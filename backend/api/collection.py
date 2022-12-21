from typing import List, Optional

from fastapi import HTTPException, APIRouter, Depends
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
from sqlalchemy.orm.exc import NoResultFound

from repository.collection import Collection, CollectionRepository
from repository.item import Item, ItemRepository

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


class CreateCollectionRequest(BaseModel):
    name: str
    description: Optional[str]


@router.get(
    "/collections/{collection_id}",
    tags=['collections'],
    responses={404: {'detail': 'Collection not found'}}
)
async def get_collection(collection_id: int, token: str = Depends(oauth2_scheme)) -> Collection:
    try:
        return CollectionRepository.get_collection_by_id(collection_id=collection_id)
    except NoResultFound:
        raise HTTPException(status_code=404, detail='Collection not found') from None


@router.get(
    "/user/{user_id}/collections/",
    tags=['collections'],
    responses={404: {'detail': 'User not found'}}
)
async def get_collections_for_user(user_id: int, token: str = Depends(oauth2_scheme)) -> list[Collection]:
    try:
        return CollectionRepository.list_collections_for_user(user_id=user_id)
    except NoResultFound:
        raise HTTPException(status_code=404, detail='User not found') from None


@router.get(
    "/collections",
    tags=['collections'],
    responses={404: {'detail': 'No collections'}}
)
async def list_collections(token: str = Depends(oauth2_scheme)) -> List[Collection]:
    try:
        return CollectionRepository.list_collections()
    except NoResultFound:
        raise HTTPException(status_code=404, detail='No collections') from None


@router.post(
    "/collections",
    tags=['collections'],
    responses={400: {'detail': 'Invalid request payload'}}
)
async def create_collection(collection: CreateCollectionRequest, token: str = Depends(oauth2_scheme)) -> None:
    CollectionRepository.create_collection(collection.dict())


@router.delete(
    "/collections/{collection_id}",
    tags=['collections'],
    responses={404: {'detail': 'Collection not found'}}
)
async def delete_collection(collection_id: int, token: str = Depends(oauth2_scheme)) -> None:
    try:
        return CollectionRepository.delete_collection(collection_id)
    except NoResultFound:
        raise HTTPException(status_code=404, detail='Collection not found') from None