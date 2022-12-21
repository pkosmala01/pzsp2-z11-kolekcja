from typing import Optional, Dict

from fastapi import HTTPException, APIRouter, Depends
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
from sqlalchemy.exc import NoResultFound

from repository.item import Item, ItemRepository

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


class CreateItemRequest(BaseModel):
    name: str
    collection_id: int
    description: Optional[str]
    photo: Optional[bytes]
    properties: Dict[int, str]


@router.get(
    "/items/{item_id}",
    tags=['items'],
    responses={404: {'detail': 'Item not found'}}
)
async def get_item(item_id: int, token: str = Depends(oauth2_scheme)) -> Item:
    try:
        return ItemRepository.get_item_by_id(item_id=item_id)
    except NoResultFound:
        raise HTTPException(status_code=404, detail='Item not found') from None


@router.post(
    "/items",
    tags=['items'],
    responses={400: {'detail': 'Invalid request payload'}}
)
async def create_item(item_with_properties: CreateItemRequest, token: str = Depends(oauth2_scheme)) -> None:
    item = item_with_properties.dict(exclude={'properties'})
    properties = item_with_properties.dict(include={'properties'})
    ItemRepository.create_item(item, properties)

@router.delete(
    "/items/{item_id}",
    tags=['items'],
    responses={404: {'detail': 'Item not found'}}
)
async def delete_item(item_id: int, token: str = Depends(oauth2_scheme)) -> None:
    try:
        return ItemRepository.delete_item(item_id=item_id)
    except NoResultFound:
        raise HTTPException(status_code=404, detail='Item not found') from None
