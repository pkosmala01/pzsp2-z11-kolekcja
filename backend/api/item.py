from typing import Optional

from fastapi import HTTPException, APIRouter, Depends, UploadFile
from fastapi.security import OAuth2PasswordBearer
from fastapi.responses import Response
from pydantic import BaseModel
from sqlalchemy.exc import NoResultFound

from repository.item import Item, ItemRepository
from api.token import check_permissions

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


class CreateItemRequest(BaseModel):
    name: str
    collection_id: int
    description: Optional[str]
    photo: Optional[bytes]
    properties: dict[int, str]


class CreateItemResponse(BaseModel):
    item_id: int


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


@router.get(
    "/items/{item_id}/image",
    tags=['items'],
    responses={
        404: {'detail': 'Image not found'},
        200: {"content": {"image/png": {}}},
    },
    response_class=Response
)
async def get_image_for_item(item_id: int, token: str = Depends(oauth2_scheme)) -> Response:
    try:
        image = ItemRepository.get_image_for_item(item_id=item_id)
        return Response(
            content=image,
            media_type='image/png'
        )
    except NoResultFound:
        raise HTTPException(status_code=404, detail='Item not found') from None


@router.post(
    "/items/{item_id}/image",
    tags=['items'],
    responses={400: {'detail': 'Invalid request payload'}}
)
async def attach_image_to_item(file: UploadFile, item_id: int, token: str = Depends(oauth2_scheme)) -> None:
    try:
        image = await file.read()
        ItemRepository.change_image_for_item(item_id, image)
    except NoResultFound:
        raise HTTPException(status_code=404, detail='Item not found') from None


@router.post(
    "/items",
    tags=['items'],
    responses={400: {'detail': 'Invalid request payload'}}
)
async def create_item(
    item_with_properties: CreateItemRequest, token: str = Depends(oauth2_scheme)
) -> CreateItemResponse:
    check_permissions(
        token=token, required_level='Collection Administrator', collection_id=item_with_properties.collection_id
    )
    item = item_with_properties.dict(exclude={'properties'})
    properties = item_with_properties.dict(include={'properties'})
    item_id = ItemRepository.create_item(item, properties)
    return CreateItemResponse(item_id=item_id)


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
