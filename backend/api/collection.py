from fastapi import HTTPException, APIRouter
from sqlalchemy.orm.exc import NoResultFound

from repository.collection import get_collection_by_id, Collection


router = APIRouter()


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
