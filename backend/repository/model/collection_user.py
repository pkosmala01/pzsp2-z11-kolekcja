from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import relationship
from repository.model.base import Base


class CollectionUserTable(Base, SerializerMixin):
    __tablename__ = "collection_users"

    user_id = Column(Integer, ForeignKey('users.user_id'), primary_key=True)
    collection_id = Column(Integer, ForeignKey('collections.collection_id'), primary_key=True)
    permission_level = Column(Integer, ForeignKey('permissions.permission_level'), nullable=False)
    user = relationship("UserTable", back_populates="user_collections")
    collection = relationship("CollectionTable")
    permission = relationship("PermissionTable")
