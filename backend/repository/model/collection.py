from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy_serializer import SerializerMixin
from repository.model.base import Base, BaseTable


class CollectionTable(Base, SerializerMixin, BaseTable):
    __tablename__ = "collections"
    serialize_rules = ('-users.collection', '-items.collection')

    collection_id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)
    users = relationship("CollectionUserTable", back_populates="collection")
    items = relationship("ItemTable")
