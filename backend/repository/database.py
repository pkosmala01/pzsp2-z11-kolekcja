import sys
import os
import oracledb
from sqlalchemy import create_engine, inspect
from sqlalchemy.orm import sessionmaker, Session
from pydantic import BaseModel

oracledb.version = "8.3.0"
sys.modules["cx_Oracle"] = oracledb


class OrmBaseModel(BaseModel):
    class Config:
        orm_mode = True


def get_engine():
    db_password = os.getenv('DB_PASSWORD')
    connection_uri = f'oracle+cx_oracle://PZSP11:{db_password}@ora2.ia.pw.edu.pl:1521/iais'
    return create_engine(connection_uri.format(db_password=db_password))


def get_session() -> Session:
    engine = get_engine()
    session = sessionmaker(bind=engine)
    return session()


