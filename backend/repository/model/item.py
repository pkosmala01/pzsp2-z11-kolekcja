from sqlalchemy import Column, Integer, String, LargeBinary, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy_serializer import SerializerMixin
from repository.model.base import Base


class ItemTable(Base, SerializerMixin):
    __tablename__ = "items"

    item_id = Column(Integer, primary_key=True)
    collection_id = Column(Integer, ForeignKey('collections.collection_id'))
    name = Column(String, nullable=False)
    description = Column(String)
    image = Column(LargeBinary)
    properties = relationship('PropertyValueTable', back_populates="item")
    collection = relationship("CollectionTable", back_populates="items")


