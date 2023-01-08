import bcrypt

from repository.database import get_session, OrmBaseModel
from repository.model import UserTable
from repository.base import BaseRepository


class User(OrmBaseModel):
    user_id: int
    email: str
    password_hash: str
    name: str


class UserRepository(BaseRepository):
    @staticmethod
    def get_user_by_email(email: str) -> User:
        session = get_session()
        query = session.query(UserTable).filter(
            UserTable.email == email
        )
        result = query.one()
        return User.from_orm(result)

    @staticmethod
    def _get_password_hash(password: str) -> str:
        bytes = password.encode('utf-8')
        salt = bcrypt.gensalt()
        hash = bcrypt.hashpw(bytes, salt)
        return hash.decode('utf-8')

    def create_user(self, email: str, password: str, name: str) -> int:
        session = get_session()
        password_hash = self._get_password_hash(password)
        user = UserTable(email=email, password_hash=password_hash, name=name)
        session.add(user)
        session.commit()
        return user.user_id
