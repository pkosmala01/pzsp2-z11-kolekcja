from datetime import datetime, timedelta
from typing import Union, Optional

from fastapi import Depends, APIRouter, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import jwt
from passlib.context import CryptContext
from pydantic import BaseModel

from repository.user import UserRepository, User
from repository.permission import PermissionRepository

# to get a string like this run:
# openssl rand -hex 32
SECRET_KEY = '1ae102482c7f720d915fa6d36416fbb682ef7f2d1b66ebbc4b4d842c2484c01c'
ALGORITHM = 'HS256'
ACCESS_TOKEN_EXPIRE_MINUTES = 120


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    sub: str
    email: str
    exp: datetime


pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')

oauth2_scheme = OAuth2PasswordBearer(tokenUrl='token')

router = APIRouter()


def verify_password(plain_password: str, password_hash: str) -> bool:
    return pwd_context.verify(plain_password, password_hash)


def authenticate_user(email: str, password: str) -> User:
    user = UserRepository.get_user_by_email(email=email)
    if not user:
        return False
    if not verify_password(password, user.password_hash):
        return False
    return user


def create_access_token(data: dict, expires_delta: Union[timedelta, None] = None) -> str:
    to_encode = data.copy()

    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({'exp': expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def decode_access_token(token: str) -> TokenData:
    decoded_jwt = jwt.decode(token=token, key=SECRET_KEY, algorithms=[ALGORITHM, ])
    return TokenData(**decoded_jwt)


@router.post('/token', response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Incorrect username or password',
            headers={'WWW-Authenticate': 'Bearer'},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={
            'sub': str(user.user_id),
            'email': user.email,
        },
        expires_delta=access_token_expires
    )
    return {'access_token': access_token, 'token_type': 'bearer'}


def check_permissions(token: str, required_level: str, collection_id: Optional[int]) -> None:
    token_content = decode_access_token(token)
    permission_repo = PermissionRepository()
    assigned_collections = permission_repo.get_assigned_collections(int(token_content.sub))
    if required_level == 'Super User' and assigned_collections.su_collections == []:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail='The action requires Super User permissions')
    if collection_id is None:
        return
    if required_level == 'User':
        if collection_id not in assigned_collections.user_collections and \
         collection_id not in assigned_collections.admin_collections:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail='The action requires the user to be assigned to the collection'
            )
        return
    if required_level == 'Collection Administrator':
        if collection_id not in assigned_collections.admin_collections:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN, detail='The action requires Collection Administrator permissions'
            )
        return
