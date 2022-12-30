from fastapi import HTTPException, APIRouter, Depends
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm.exc import NoResultFound

from repository.model import PropertyDefinitionTable
from repository import PropertiesRepository

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


@router.get(
    "/properties",
    tags=['properties'],
    responses={404: {'detail': 'No properties'}}
)
async def list_properties(token: str = Depends(oauth2_scheme)) -> list[PropertyDefinitionTable]:
    try:
        return PropertiesRepository.list_properties()
    except NoResultFound:
        raise HTTPException(status_code=404, detail='No properties') from None
