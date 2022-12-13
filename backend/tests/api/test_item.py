from unittest.mock import patch
from fastapi.testclient import TestClient
from sqlalchemy.orm.exc import NoResultFound

from main import app
from repository.item import ItemRepository, Item

client = TestClient(app)


item_1 = Item(
    item_id=101,
    collection_id=100,
    name='Test',
    properties=[1, 2]
)


class TestApiItem:
    @patch.object(ItemRepository, 'get_item_by_id', return_value=item_1)
    def test_get_item(self, mock_object):
        response = client.get('/items/100')
        assert response.status_code == 200
        assert response.json() == {
            'item_id': 101,
            'collection_id': 100,
            'name': 'Test',
            'properties': [1, 2],
            'description': None,
            'photo': None
        }

    @patch.object(ItemRepository, 'get_item_by_id', side_effect=NoResultFound)
    def test_get_item_not_found(self, mock_object):
        response = client.get('/items/100')
        assert response.status_code == 404
        assert response.json() == {'detail': 'Item not found'}

    @patch.object(ItemRepository, 'create_item', return_value=None)
    def test_create_item(self, mock_object):
        response = client.post('/items', json={'name': 'Test', 'collection_id': 100})
        assert response.status_code == 200
