from fastapi import FastAPI
import sqlalchemy
from sqlalchemy import create_engine

# app = FastAPI()


# @app.get("/")
# async def root():
#     return {"message": "Hello World"}
#
#
# @app.get("/hello/{name}")
# async def say_hello(name: str):
#     return {"message": f"Hello {name}"}

engine = create_engine('oracle://PZSP2:PZSP2@ora2.ia.pw.edu.pl:1521/iais', echo='debug')
with engine.connect() as connection:
    connection.execute("select * from tabel")
