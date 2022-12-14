from typing import Optional

from fastapi import HTTPException, APIRouter, Depends
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
from sqlalchemy.orm.exc import NoResultFound

from api.token import decode_access_token, PermissionChecker
from repository.collection import Collection, CollectionRepository
from repository.item import Item, ItemRepository
from repository.permission import PermissionRepository, PermissionResponse

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


class CreateCollectionRequest(BaseModel):
    name: str
    description: Optional[str]


class UpdateCollectionRequest(BaseModel):
    name: Optional[str]
    description: Optional[str]


class CollectionResponse(BaseModel):
    collection_id: int


class AssignRequest(BaseModel):
    user_id: int
    permission: str


@router.get(
    "/collections/{collection_id}",
    tags=['collections'],
    responses={404: {'detail': 'Collection not found'}}
)
async def get_collection(collection_id: int, token: str = Depends(oauth2_scheme)) -> Collection:
    pc = PermissionChecker()
    pc.check_permissions(token=token, required_level='User', collection_id=collection_id)
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
    "/collections/{collection_id}/items",
    tags=['collections'],
    responses={404: {'detail': 'Collection not found'}}
)
async def get_collection_items(collection_id: int, token: str = Depends(oauth2_scheme)) -> list[Item]:
    pc = PermissionChecker()
    pc.check_permissions(token=token, required_level='User', collection_id=collection_id)
    try:
        return ItemRepository.get_items_for_collection_id(collection_id=collection_id)
    except NoResultFound:
        raise HTTPException(status_code=404, detail='Collection not found') from None


@router.get(
    "/collections",
    tags=['collections'],
    responses={404: {'detail': 'No collections'}}
)
async def list_collections(token: str = Depends(oauth2_scheme)) -> list[Collection]:
    try:
        user_id = int(decode_access_token(token).sub)
        return CollectionRepository.list_collections_for_user(user_id=user_id)
    except NoResultFound:
        raise HTTPException(status_code=404, detail='No collections') from None


@router.post(
    "/collections",
    tags=['collections'],
    responses={400: {'detail': 'Invalid request payload'}}
)
async def create_collection(
    collection: CreateCollectionRequest, token: str = Depends(oauth2_scheme)
) -> CollectionResponse:
    user_id = int(decode_access_token(token).sub)
    collection_id = CollectionRepository.create_collection(collection.dict(), user_id)
    return CollectionResponse(collection_id=collection_id)


@router.put(
    "/collections/{collection_id}",
    tags=['collections'],
    responses={404: {'detail': 'Collection not found'}}
)
async def update_collection(
    collection: UpdateCollectionRequest, collection_id: int, token: str = Depends(oauth2_scheme)
) -> Collection:
    pc = PermissionChecker()
    pc.check_permissions(token=token, required_level='Collection Administrator', collection_id=collection_id)
    try:
        return CollectionRepository.update_collection(collection.dict(exclude_none=True), collection_id)
    except NoResultFound:
        raise HTTPException(status_code=404, detail='Collection not found') from None


@router.delete(
    "/collections/{collection_id}",
    tags=['collections'],
    responses={404: {'detail': 'Collection not found'}}
)
async def delete_collection(collection_id: int, token: str = Depends(oauth2_scheme)) -> None:
    pc = PermissionChecker()
    pc.check_permissions(token=token, required_level='Collection Administrator', collection_id=collection_id)
    try:
        return CollectionRepository.delete_collection(collection_id)
    except NoResultFound:
        raise HTTPException(status_code=404, detail='Collection not found') from None


@router.get(
    '/collections/{collection_id}/users',
    tags=['collections', 'users'],
    responses={404: {'detail': 'User or collection not found'}}
)
async def get_permissions(
    collection_id: int, token: str = Depends(oauth2_scheme)
) -> list[PermissionResponse]:
    pc = PermissionChecker()
    pc.check_permissions(token=token, required_level='Collection Administrator', collection_id=collection_id)
    permission_repo = PermissionRepository()
    try:
        return permission_repo.get_permissions(collection_id)
    except NoResultFound:
        raise HTTPException(status_code=404, detail='User or collection not found') from None


@router.post(
    '/collections/{collection_id}/users',
    tags=['collections', 'users'],
    responses={404: {'detail': 'User or collection not found'}}
)
async def assign_user(collection_id: int, assign_request: AssignRequest, token: str = Depends(oauth2_scheme)) -> None:
    pc = PermissionChecker()
    pc.check_permissions(token=token, required_level='Collection Administrator', collection_id=collection_id)
    permission_repo = PermissionRepository()
    try:
        permission_repo.assign_user(assign_request.user_id, collection_id, assign_request.permission)
    except NoResultFound:
        raise HTTPException(status_code=404, detail='User or collection not found') from None


@router.delete(
    '/collections/{collection_id}/users/{user_id}',
    tags=['collections', 'users'],
    responses={404: {'detail': 'User or collection not found'}}
)
async def delete_permission(collection_id: int, user_id: int, token: str = Depends(oauth2_scheme)) -> None:
    pc = PermissionChecker()
    pc.check_permissions(token=token, required_level='Collection Administrator', collection_id=collection_id)
    permission_repo = PermissionRepository()
    try:
        permission_repo.delete_permission(collection_id, user_id)
    except NoResultFound:
        raise HTTPException(status_code=404, detail='User or collection not found') from None
