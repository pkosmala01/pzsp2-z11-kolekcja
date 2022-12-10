import sys
import os
import oracledb
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session
from pydantic import BaseModel
import yaml
from dotenv import load_dotenv

load_dotenv()

oracledb.version = "8.3.0"
sys.modules["cx_Oracle"] = oracledb


class OrmBaseModel(BaseModel):
    class Config:
        orm_mode = True


def get_engine():
    with open("config.yaml") as config_file:
        config = yaml.safe_load(config_file)['database']
        db_password = os.getenv('DB_PASSWORD')
        if db_password is None:
            raise Exception("DB password not set")
        connection_uri = f"{config['dialect']}+{config['driver']}://{config['username']}:{db_password}@{config['host']}:{config['port']}/{config['dbname']}"
        return create_engine(connection_uri)


def get_session() -> Session:
    engine = get_engine()
    session = sessionmaker(bind=engine)
    return session()
