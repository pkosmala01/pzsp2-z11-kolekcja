from repository.database import get_session, OrmBaseModel
from repository.model import CollectionUserTable, PermissionTable
from repository.base import BaseRepository


class AssignedCollections(OrmBaseModel):
    user_collections: list[int]
    admin_collections: list[int]
    su_collections: list[int]


class PermissionResponse(OrmBaseModel):
    user_id: int
    collection_id: int
    permission_level: int


class PermissionRepository(BaseRepository):
    @staticmethod
    def get_permission_ids() -> dict[str, int]:
        session = get_session()
        results = session.query(PermissionTable).all()
        return {permission.name: permission.permission_level for permission in results}

    def get_assigned_collections(self, user_id: int) -> AssignedCollections:
        session = get_session()
        permissions = self.get_permission_ids()
        collections = session.query(CollectionUserTable).filter(CollectionUserTable.user_id == user_id).all()
        user_collections = [
            collection.collection_id for collection in collections if collection.permission_level == permissions['User']
        ]
        admin_collections = [
            collection.collection_id for collection in collections
            if collection.permission_level == permissions['Collection Administrator']
        ]
        su_collections = [
            collection.collection_id for collection in collections
            if collection.permission_level == permissions['Super User']
        ]
        return AssignedCollections(
            user_collections=user_collections,
            admin_collections=admin_collections,
            su_collections=su_collections
        )

    @staticmethod
    def get_permissions(collection_id: int) -> list[PermissionResponse]:
        session = get_session()
        results = session.query(
            CollectionUserTable
        ).filter(
            CollectionUserTable.collection_id == collection_id
        ).all()
        return [PermissionResponse.from_orm(result) for result in results]

    def assign_user(self, user_id: int, collection_id: int, permission: str) -> None:
        session = get_session()
        permission_mapping = self.get_permission_ids()
        collection_user = session.query(
            CollectionUserTable
        ).filter(
            CollectionUserTable.user_id == user_id,
            CollectionUserTable.collection_id == collection_id
        ).first()
        if collection_user is None:
            collection_user = CollectionUserTable(
                collection_id=collection_id,
                user_id=user_id,
                permission_level=permission_mapping[permission]
            )
            session.add(collection_user)
        else:
            collection_user.permission_level = permission_mapping[permission]
        session.commit()

    @staticmethod
    def delete_permission(collection_id: int, user_id: int) -> None:
        session = get_session()
        session.query(
            CollectionUserTable
        ).filter(
            CollectionUserTable.user_id == user_id,
            CollectionUserTable.collection_id == collection_id
        ).delete()
        session.commit()
