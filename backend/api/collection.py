from fastapi import HTTPException, APIRouter
from sqlalchemy.orm.exc import NoResultFound
from typing import List, Optional
from pydantic import BaseModel

from repository.collection import get_collection_by_id, Collection, create_collection, list_collections


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
        return get_collection_by_id(collection_id=collection_id)
    except NoResultFound:
        raise HTTPException(status_code=404, detail='Collection not found') from None


@router.get(
    "/collections",
    tags=['collections'],
    responses={404: {'detail': 'No collections'}}
)
async def list_all_collections() -> List[Collection]:
    try:
        return list_collections()
    except NoResultFound:
        raise HTTPException(status_code=404, detail='No collections') from None


@router.post(
    "/collections",
    tags=['collections'],
    responses={400: {'detail': 'Invalid request payload'}}
)
async def new_collection(collection: CreateCollectionRequest) -> None:
    create_collection(collection.dict())
