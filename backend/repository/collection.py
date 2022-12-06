from typing import Optional

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
