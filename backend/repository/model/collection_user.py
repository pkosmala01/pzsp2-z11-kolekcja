from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import relationship
from repository.model.base import Base, BaseTable


class CollectionUserTable(Base, SerializerMixin, BaseTable):
    __tablename__ = "collection_users"
    serialize_rules = ('-user.user_collections', '-permission.collection_user', '-collection.users',)

    user_id = Column(Integer, ForeignKey('users.user_id'), primary_key=True)
    collection_id = Column(Integer, ForeignKey('collections.collection_id'), primary_key=True)
    permission_level = Column(Integer, ForeignKey('permissions.permission_level'), nullable=False)
    user = relationship("UserTable", back_populates="user_collections")
    collection = relationship("CollectionTable")
    permission = relationship("PermissionTable")
