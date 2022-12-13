import pytest

from unittest.mock import patch
from fastapi.testclient import TestClient
from sqlalchemy.orm.exc import NoResultFound

from main import app
from repository.collection import CollectionRepository, Collection
from repository.item import ItemRepository, Item

client = TestClient(app)


collection_1 = Collection(
    collection_id=100,
    name='Test Collection',
    description='desc'
)
collection_2 = Collection(
    collection_id=200,
    name='Test Collection 2',
    description='description'
)


class TestApiCollection:
    @patch.object(CollectionRepository, 'get_collection_by_id', return_value=collection_1)
    def test_get_collection(self, mock_object):
        response = client.get('/collections/100')
        assert response.status_code == 200
        assert response.json() == {'collection_id': 100, 'name': 'Test Collection', 'description': 'desc'}

    @patch.object(CollectionRepository, 'get_collection_by_id', side_effect=NoResultFound)
    def test_get_collection_not_found(self, mock_object):
        response = client.get('/collections/100')
        assert response.status_code == 404
        assert response.json() == {'detail': 'Collection not found'}

    @patch.object(CollectionRepository, 'list_collections', return_value=[collection_1, collection_2])
    def test_list_collections(self, mock_object):
        response = client.get('/collections')
        assert response.status_code == 200
        assert response.json() == [
            {'collection_id': 100, 'name': 'Test Collection', 'description': 'desc'},
            {'collection_id': 200, 'name': 'Test Collection 2', 'description': 'description'}
        ]

    @patch.object(CollectionRepository, 'list_collections', side_effect=NoResultFound)
    def test_list_collections_not_found(self, mock_object):
        response = client.get('/collections')
        assert response.status_code == 404
        assert response.json() == {'detail': 'No collections'}

    @patch.object(CollectionRepository, 'create_collection', return_value=None)
    def test_create_collection(self, mock_object):
        response = client.post('/collections', json={'name': 'Test Collection'})
        assert response.status_code == 200

    @pytest.mark.parametrize('function_return, expected_response', [
        (
            [],
            []
        ),
        (
            [Item(item_id=101, collection_id=100, name='Test', properties=[1, 2])],
            [
                {
                    'item_id': 101,
                    'collection_id': 100,
                    'name': 'Test',
                    'properties': [1, 2],
                    'description': None,
                    'photo': None
                }
            ]
        )
    ])
    def test_get_collection_items(self, function_return, expected_response):
        with patch.object(ItemRepository, 'get_items_for_collection_id', return_value=function_return):
            response = client.get('/collections/100/items')
        assert response.status_code == 200
        assert response.json() == expected_response

    @patch.object(ItemRepository, 'get_items_for_collection_id', side_effect=NoResultFound)
    def test_get_collection_items_collection_not_found(self, mock_object):
        response = client.get('/collections/100/items')
        assert response.status_code == 404
        assert response.json() == {'detail': 'Collection not found'}
