from typing import Optional, Any

from repository.database import get_session, OrmBaseModel
from repository.model import ItemTable, PropertyValueTable


class Item(OrmBaseModel):
    item_id: int
    collection_id: int
    name: str
    description: Optional[str]
    photo: Optional[bytes]
    properties: list


class ItemRepository:
    @staticmethod
    def get_item_by_id(item_id: int) -> Item:
        session = get_session()
        query = session.query(ItemTable).filter(
            ItemTable.item_id == item_id
        )
        result = query.one()
        return result.to_dict()

    @staticmethod
    def get_image_for_item(item_id: int) -> ItemTable:
        session = get_session()
        query = session.query(ItemTable).filter(
            ItemTable.item_id == item_id
        )
        result = query.one()
        return result.photo

    @staticmethod
    def get_items_for_collection_id(collection_id: int) -> list[Item]:
        session = get_session()
        results = session.query(ItemTable).filter(
            ItemTable.collection_id == collection_id
        ).all()
        return [result.to_dict() for result in results]

    @staticmethod
    def create_item(item_dict: dict[str, Any], properties: dict[str, dict[int, str]]) -> int:
        item_object = ItemTable(**item_dict)
        print(properties)
        session = get_session()
        session.add(item_object)
        session.flush()
        properties = properties['properties']
        for property_id in properties:
            property_value = PropertyValueTable(
                    item_id=item_object.item_id,
                    property_id=property_id,
                    value=properties[property_id]
                )
            session.add(property_value)
        session.commit()
        return item_object.item_id

    @staticmethod
    def delete_item(item_id: int):
        session = get_session()
        session.query(ItemTable).filter(
            ItemTable.item_id == item_id
        ).delete()
        session.commit()

    @staticmethod
    def change_image_for_item(item_id: int, image: bytes):
        session = get_session()
        item = session.query(ItemTable).filter(
            ItemTable.item_id == item_id
        ).one()
        item.photo = image
        session.commit()

    @staticmethod
    def edit_item(item_dict: dict[str, Any]):
        raise NotImplementedError
