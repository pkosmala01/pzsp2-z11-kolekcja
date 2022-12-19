from repository.database import get_session, OrmBaseModel
from repository.model import UserTable


class User(OrmBaseModel):
    user_id: int
    email: str
    password_hash: str
    name: str


class UserRepository:
    def get_user_by_email(email: str):
        session = get_session()
        query = session.query(UserTable).filter(
            UserTable.email == email
        )
        result = query.one()
        return User.from_orm(result)
