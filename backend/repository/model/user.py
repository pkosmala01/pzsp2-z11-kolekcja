from sqlalchemy import Column, Integer, String
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import relationship
from repository.model.base import Base


class UserTable(Base, SerializerMixin):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True)
    email = Column(String, nullable=False)
    password_hash = Column(String, nullable=False)
    name = Column(String, nullable=False)
    user_collections = relationship("CollectionUserTable", back_populates="user")
