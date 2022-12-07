from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api import collection

app = FastAPI()

origins = [
    "http://localhost:8080",
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
]

for router in routers:
    app.include_router(router)


@app.get("/", tags=['test'])
async def root():
    return {"message": "Hello World"}
