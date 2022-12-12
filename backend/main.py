import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api import collection, item

app = FastAPI()

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
]

for router in routers:
    app.include_router(router)


@app.get("/", tags=['test'])
async def root():
    db_password = os.getenv('DB_PASSWORD')
    if db_password is None:
        return {"error": "DB_PASSWORD env variable not set"}
    return {"message": "Hello World"}
