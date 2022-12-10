from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy_serializer import SerializerMixin
from repository.model.base import Base


class PropertyValueTable(Base, SerializerMixin):
    __tablename__ = "property_values"

    item_id = Column(Integer, ForeignKey('items.item_id'), primary_key=True)
    property_id = Column(Integer, ForeignKey('property_definitions.property_id'), primary_key=True)
    value = Column(String)
    property_definition = relationship("PropertyDefinitionTable", back_populates="property_value")
    item = relationship("ItemsTable", back_populates="properties")