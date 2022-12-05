from sqlalchemy import Column, Integer, String
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class User(Base, SerializerMixin):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True)
    email = Column(String)
    password_hash = Column(String)
    name = Column(String)
