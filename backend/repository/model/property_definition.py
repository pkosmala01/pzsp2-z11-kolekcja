from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy_serializer import SerializerMixin

from repository.model.base import Base


class PropertyDefinitionTable(Base, SerializerMixin):
    __tablename__ = "property_definitions"
    serialize_rules = ('-property_value.property_definition',)

    property_id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    data_type = Column(String, nullable=False)
    is_optional = Column(Boolean, nullable=False)
    description = Column(String)
    property_value = relationship("PropertyValueTable", back_populates="property_definition")
