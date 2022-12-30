from repository.database import get_session, OrmBaseModel
from repository.model import CollectionUserTable, PermissionTable


class AssignedCollections(OrmBaseModel):
    user_collections: list[int]
    admin_collections: list[int]
    su_collections: list[int]


class PermissionRepository():
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
