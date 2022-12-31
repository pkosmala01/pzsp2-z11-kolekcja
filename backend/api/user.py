from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel

from repository.user import UserRepository

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


class CreateUserRequest(BaseModel):
    email: str
    password: str
    name: str


@router.post(
    '/users',
    tags=['users']
)
async def create_user(create_request: CreateUserRequest, token: str = Depends(oauth2_scheme)) -> int:
    user_repo = UserRepository()
    user_id = user_repo.create_user(create_request.email, create_request.password, create_request.name)
    return user_id
