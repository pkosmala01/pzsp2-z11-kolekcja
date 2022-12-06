from typing import Optional, List

from repository.database import get_session, OrmBaseModel
from repository.model.collection import CollectionTable


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


def create_collection(collection: Collection):
    session = get_session()
    collection = CollectionTable(**collection.dict())
    session.add(collection)
    session.commit()
