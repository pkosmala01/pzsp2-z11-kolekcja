from typing import List, Optional

from fastapi import HTTPException, APIRouter
from pydantic import BaseModel
from sqlalchemy.orm.exc import NoResultFound

from repository.collection import Collection, CollectionRepository
from repository.item import Item, ItemRepository

router = APIRouter()


class CreateCollectionRequest(BaseModel):
    name: str
    description: Optional[str]


@router.get(
    "/collections/{collection_id}",
    tags=['collections'],
    responses={404: {'detail': 'Collection not found'}}
)
async def get_collection(collection_id: int) -> Collection:
    try:
        return CollectionRepository.get_collection_by_id(collection_id=collection_id)
    except NoResultFound:
        raise HTTPException(status_code=404, detail='Collection not found') from None


@router.get(
    "/collections",
    tags=['collections'],
    responses={404: {'detail': 'No collections'}}
)
async def list_collections() -> List[Collection]:
    try:
        return CollectionRepository.list_collections()
    except NoResultFound:
        raise HTTPException(status_code=404, detail='No collections') from None


@router.post(
    "/collections",
    tags=['collections'],
    responses={400: {'detail': 'Invalid request payload'}}
)
async def create_collection(collection: CreateCollectionRequest) -> None:
    CollectionRepository.create_collection(collection.dict())


@router.get(
    "/collections/{collection_id}/items",
    tags=['collections'],
    responses={404: {'detail': 'Collection not found'}}
)
async def get_collection_items(collection_id: int) -> List[Item]:
    try:
        return ItemRepository.get_items_for_collection_id(collection_id=collection_id)
    except NoResultFound:
        raise HTTPException(status_code=404, detail='Collection not found') from None
