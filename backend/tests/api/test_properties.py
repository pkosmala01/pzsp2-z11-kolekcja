import pytest

from unittest.mock import patch
from fastapi.testclient import TestClient
from sqlalchemy.orm.exc import NoResultFound

from main import app
from repository.properties import PropertiesRepository

client = TestClient(app)


@pytest.mark.usefixtures('get_test_auth_token')
class TestApiProperties:
    @patch.object(PropertiesRepository, 'list_properties', side_effect=NoResultFound)
    def test_get_item(self, mock_object, get_test_auth_token):
        response = client.get(
            '/properties',
            headers={'Authorization': f'Bearer {get_test_auth_token}'}
        )
        assert response.status_code == 404
        assert response.json() == {'detail': 'No properties'}
