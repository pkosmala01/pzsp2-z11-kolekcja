from typing import Optional, List, Dict, Any

from repository.database import get_session, OrmBaseModel
from repository.model import *


class Item(OrmBaseModel):
    item_id: int
    collection_id: int
    name: str
    description: Optional[str]
    image: Optional[bytes]


def get_item_by_id(item_id: int) -> Item:
    session = get_session()
    query = session.query(ItemTable).filter(
        ItemTable.item_id == item_id
    )
    result = query.one()
    return Item.from_orm(result)


def list_items() -> List[Item]:
    session = get_session()
    results = session.query(ItemTable).all()
    return [Item.from_orm(result) for result in results]


def create_item(item_object: Dict[str, Any]):
    session = get_session()
    item_object = ItemTable(**item_object)
    session.add(item_object)
    session.commit()
