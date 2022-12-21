from typing import List

from repository.database import get_session
from repository.model import PropertyDefinitionTable


class PropertiesRepository:
    @staticmethod
    def list_properties() -> List[PropertyDefinitionTable]:
        serialize_rules = ('-property_value',)
        session = get_session()
        results = session.query(PropertyDefinitionTable).all()
        return [result.to_dict(rules=serialize_rules) for result in results]
