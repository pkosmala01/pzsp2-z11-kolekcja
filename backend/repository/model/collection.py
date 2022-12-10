from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy_serializer import SerializerMixin
from repository.model.base import Base


class CollectionTable(Base, SerializerMixin):
    __tablename__ = "collections"

    collection_id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)
    users = relationship("CollectionUserTable", back_populates="collection")
    items = relationship("ItemsTable", back_populates="collection")
