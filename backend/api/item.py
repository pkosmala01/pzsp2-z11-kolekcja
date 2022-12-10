from fastapi import HTTPException, APIRouter
from typing import List, Optional
from pydantic import BaseModel
from sqlalchemy.exc import NoResultFound

from repository.item import Item, list_items

router = APIRouter()


class CreateItemRequest(BaseModel):
    name: str
    collection_id: int
    description: Optional[str]
    image: Optional[bytes]


@router.get(
    "/items",
    tags=['items'],
    responses={404: {'detail': 'No items found'}}
)
async def list_all_items() -> List[Item]:
    try:
        return list_items()
    except NoResultFound:
        raise HTTPException(status_code=404, detail='No items') from None

