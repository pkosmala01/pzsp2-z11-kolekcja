from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy_serializer import SerializerMixin
from repository.model.base import Base


class PermissionTable(Base, SerializerMixin):
    __tablename__ = "permissions"

    permission_level = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)
    collection_user = relationship("CollectionUserTable", back_populates="permission")
