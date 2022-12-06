import sys
import os
import oracledb

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from pydantic import BaseModel


oracledb.version = "8.3.0"
sys.modules["cx_Oracle"] = oracledb

engine = create_engine('oracle+cx_oracle://PZSP11:PZSP11@ora2.ia.pw.edu.pl:1521/iais')


class OrmBaseModel(BaseModel):
    class Config:
        orm_mode = True


def get_session() -> sessionmaker:
    db_password = os.getenv('DB_PASSWORD')
    connection_uri = f'oracle+cx_oracle://PZSP11:{db_password}@ora2.ia.pw.edu.pl:1521/iais'
    engine = create_engine(connection_uri.format(db_password=db_password))
    Session = sessionmaker(bind=engine)
    return Session()
