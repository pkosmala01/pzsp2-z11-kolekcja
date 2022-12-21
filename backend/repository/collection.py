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
        serialize_rules = ('-users.collection_id', '-users.permission_level', '-users.user_id', '-collection_id')
        session = get_session()
        query = session.query(CollectionTable).filter(
            CollectionTable.collection_id == collection_id
        )
        result = query.one()
        return result.to_dict(rules=serialize_rules)

    @staticmethod
    def list_collections_for_user(user_id: int) -> list[Collection]:
        serialize_rules = ('-users', '-items',)
        session = get_session()
        query = session.query(CollectionTable).join(CollectionUserTable).filter(CollectionUserTable.user_id == user_id)
        results = query.all()
        return [result.to_dict(rules=serialize_rules) for result in results]

    @staticmethod
    def list_collections() -> List[Collection]:
        serialize_rules = ('-users', '-items',)
        session = get_session()
        results = session.query(CollectionTable).all()
        return [result.to_dict(rules=serialize_rules) for result in results]

    @staticmethod
    def create_collection(collection_dict: Dict[str, Any], user_id: int):
        session = get_session()
        collection_object = CollectionTable(**collection_dict)
        session.add(collection_object)
        session.flush()
        collection_administrator_permission_level = 2
        collection_user = CollectionUserTable(
            user_id=user_id,
            permission_level=collection_administrator_permission_level,
            collection_id=collection_object.collection_id
        )
        session.add(collection_user)
        session.commit()

    @staticmethod
    def delete_collection(collection_id: int):
        session = get_session()
        session.query(CollectionTable).filter(
            CollectionTable.collection_id == collection_id
        ).delete()
        session.commit()
