from typing import Optional, List, Dict, Any
from repository.database import get_session, OrmBaseModel
from repository.model import *


class CollectionNotFound(Exception):
    ...


class Collection(OrmBaseModel):
    collection_id: int
    name: str
    description: Optional[str]


def get_collection_by_id(collection_id: int) -> Collection:
    session = get_session()
    query = session.query(CollectionTable).filter(
        CollectionTable.collection_id == collection_id
    )
    result = query.one()
    return Collection.from_orm(result)


def list_collections() -> List[Collection]:
    session = get_session()
    results = session.query(CollectionTable).all()
    return [Collection.from_orm(result) for result in results]


def create_collection(collection_object: Dict[str, Any]):
    session = get_session()
    collection_object = CollectionTable(**collection_object)
    session.add(collection_object)
    session.commit()
