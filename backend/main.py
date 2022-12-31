import os

from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer

from api import collection, item, token, properties, user
from api.token import decode_access_token

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

routers = [
    collection.router,
    item.router,
    token.router,
    properties.router,
    user.router,
]

for router in routers:
    app.include_router(router)


@app.get("/", tags=['test'])
async def root(token: str = Depends(oauth2_scheme)):
    db_password = os.getenv('DB_PASSWORD')
    if db_password is None:
        return {"error": "DB_PASSWORD env variable not set"}
    return {"message": "Hello World", "email": decode_access_token(token=token)}
