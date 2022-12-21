from typing import Optional, List, Dict, Any

from repository.database import get_session, OrmBaseModel
from repository.model import CollectionTable, CollectionUserTable


class CollectionNotFound(Exception):
    ...


class Collection(OrmBaseModel):
    collection_id: int
    name: str
    description: Optional[str]


class CollectionRepository:
    @staticmethod
    def get_collection_by_id(collection_id: int) -> Collection:
        serialize_rules = ('-users.collection_id','-users.permission_level', '-users.user_id', '-collection_id')
        session = get_session()
        query = session.query(CollectionTable).filter(
            CollectionTable.collection_id == collection_id
        )
        result = query.one()
        return result.to_dict(rules=serialize_rules)

    @staticmethod
    def get_collections_for_user(user_id: int) -> list[Collection]:
        serialize_rules = ('-users', '-items',)
        session = get_session()
        query = session.query(CollectionTable).join(CollectionUserTable).filter(CollectionUserTable.user_id == user_id)
        results = query.all()
        return [result.to_dict(rules=serialize_rules) for result in results]

    @staticmethod
    def list_collections() -> List[Collection]:
        session = get_session()
        results = session.query(CollectionTable).all()
        return [result.to_dict() for result in results]

    @staticmethod
    def create_collection(collection_dict: Dict[str, Any]):
        session = get_session()
        collection_object = CollectionTable(**collection_dict)
        session.add(collection_object)
        session.commit()
