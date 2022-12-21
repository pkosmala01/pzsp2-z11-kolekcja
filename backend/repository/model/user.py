from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy_serializer import SerializerMixin

from repository.model.base import Base


class UserTable(Base, SerializerMixin):
    __tablename__ = "users"
    serialize_rules = ('-user_collections.user', '-password_hash')

    user_id = Column(Integer, primary_key=True)
    email = Column(String, nullable=False)
    password_hash = Column(String, nullable=False)
    name = Column(String, nullable=False)
    user_collections = relationship("CollectionUserTable", back_populates="user")
