from typing import Optional, List, Dict, Any

from repository.database import get_session, OrmBaseModel
from repository.model import *


class Item(OrmBaseModel):
    item_id: int
    collection_id: int
    name: str
    description: Optional[str]
    photo: Optional[bytes]
    properties: List


def get_item_by_id(item_id: int) -> Item:
    session = get_session()
    query = session.query(ItemTable).filter(
        ItemTable.item_id == item_id
    )
    result = query.one()
    return result.to_dict()


def get_items_for_collection_id(collection_id: int) -> List[Item]:
    session = get_session()
    results = session.query(ItemTable).filter(
        ItemTable.collection_id == collection_id
    ).all()
    return [Item.from_orm(result) for result in results]


def create_item(item_dict: Dict[str, Any]):
    session = get_session()
    item_object = ItemTable(**item_dict)
    session.add(item_object)
    session.commit()


def delete_item(item_id):
    session = get_session()
    session.query(ItemTable).filter(
        ItemTable.item_id == item_id
    ).delete()
    session.commit()


def edit_item(item_dict: Dict[str, Any]):
    raise NotImplementedError
