from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy_serializer import SerializerMixin
from repository.model.base import Base, BaseTable


class PermissionTable(Base, SerializerMixin, BaseTable):
    __tablename__ = "permissions"
    serialize_rules = ('-collection_user.permission',)

    permission_level = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)
    collection_user = relationship("CollectionUserTable", back_populates="permission")
