from sqlalchemy import Column, Integer, String
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class CollectionTable(Base, SerializerMixin):
    __tablename__ = "collections"

    collection_id = Column(Integer, primary_key=True)
    name = Column(String)
    description = Column(String)
