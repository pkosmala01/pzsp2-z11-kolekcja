from sqlalchemy import create_engine
import sys
import oracledb
from repository.model.user import User
from sqlalchemy.orm import sessionmaker

oracledb.version = "8.3.0"
sys.modules["cx_Oracle"] = oracledb

engine = create_engine('oracle+cx_oracle://PZSP11:PZSP11@ora2.ia.pw.edu.pl:1521/iais')

Session = sessionmaker(bind=engine)

session = Session()

user = session.query(User).all()[0]

print(user.to_dict())