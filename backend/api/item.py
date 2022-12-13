from typing import Optional

from fastapi import HTTPException, APIRouter
from pydantic import BaseModel
from sqlalchemy.exc import NoResultFound

from repository.item import Item, ItemRepository

router = APIRouter()


class CreateItemRequest(BaseModel):
    name: str
    collection_id: int
    description: Optional[str]
    photo: Optional[bytes]


@router.get(
    "/items/{item_id}",
    tags=['items'],
    responses={404: {'detail': 'Item not found'}}
)
async def get_item(item_id: int) -> Item:
    try:
        return ItemRepository.get_item_by_id(item_id=item_id)
    except NoResultFound:
        raise HTTPException(status_code=404, detail='Item not found') from None


@router.post(
    "/items",
    tags=['items'],
    responses={400: {'detail': 'Invalid request payload'}}
)
async def create_item(collection: CreateItemRequest) -> None:
    ItemRepository.create_item(collection.dict())
