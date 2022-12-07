from fastapi import FastAPI
from api import collection

app = FastAPI()

routers = [
    collection.router,
]

for router in routers:
    app.include_router(router)

@app.get("/", tags=['test'])
async def root():
    return {"message": "Hello World"}