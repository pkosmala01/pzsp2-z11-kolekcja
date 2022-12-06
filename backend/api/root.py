from fastapi import FastAPI

from api import collection


routers = [
    collection.router,
]


app = FastAPI()
for router in routers:
    app.include_router(router)


@app.get("/", tags=['test'])
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}", tags=['test'])
async def say_hello(name: str):
    return {"message": f"Hello {name}"}
