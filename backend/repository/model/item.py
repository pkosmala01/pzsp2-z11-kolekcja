from sqlalchemy import Column, Integer, String, LargeBinary, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy_serializer import SerializerMixin

from repository.model.base import Base, BaseTable


class ItemTable(Base, SerializerMixin, BaseTable):
    __tablename__ = "items"
    serialize_rules = ('-properties.item', '-properties.item_id', '-properties.property_id', '-collection_id', '-photo')

    item_id = Column(Integer, primary_key=True)
    collection_id = Column(Integer, ForeignKey('collections.collection_id'))
    name = Column(String, nullable=False)
    description = Column(String)
    photo = Column(LargeBinary)
    properties = relationship('PropertyValueTable')
