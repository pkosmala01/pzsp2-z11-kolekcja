import pytest

from unittest.mock import patch
from fastapi.testclient import TestClient
from sqlalchemy.orm.exc import NoResultFound

from api.token import PermissionChecker

from main import app
from repository.collection import CollectionRepository, Collection
from repository.item import ItemRepository, Item
from repository.permission import PermissionRepository

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


@pytest.mark.usefixtures('get_test_auth_token')
class TestApiCollection:
    @patch.object(PermissionChecker, 'check_permissions')
    @patch.object(CollectionRepository, 'get_collection_by_id', return_value=collection_1)
    def test_get_collection(self, auth_mock, mock_object, get_test_auth_token):
        response = client.get(
            '/collections/100',
            headers={'Authorization': f'Bearer {get_test_auth_token}'}
        )
        assert response.status_code == 200
        assert response.json() == {'collection_id': 100, 'name': 'Test Collection', 'description': 'desc'}

    @patch.object(PermissionChecker, 'check_permissions')
    @patch.object(CollectionRepository, 'get_collection_by_id', side_effect=NoResultFound)
    def test_get_collection_not_found(self, auth_mock, mock_object, get_test_auth_token):
        response = client.get(
            '/collections/100',
            headers={'Authorization': f'Bearer {get_test_auth_token}'}
        )
        assert response.status_code == 404
        assert response.json() == {'detail': 'Collection not found'}

    @patch.object(CollectionRepository, 'list_collections_for_user', return_value=[collection_1, collection_2])
    def test_get_collection_for_user(self, mock_object, get_test_auth_token):
        response = client.get(
            'user/1/collections',
            headers={'Authorization': f'Bearer {get_test_auth_token}'}
        )
        assert response.status_code == 200
        assert response.json() == [
            {'collection_id': 100, 'name': 'Test Collection', 'description': 'desc'},
            {'collection_id': 200, 'name': 'Test Collection 2', 'description': 'description'}
        ]

    @patch.object(PermissionChecker, 'check_permissions')
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
    def test_get_collection_items(self, auth_mock, function_return, expected_response, get_test_auth_token):
        with patch.object(ItemRepository, 'get_items_for_collection_id', return_value=function_return):
            response = client.get(
                '/collections/100/items',
                headers={'Authorization': f'Bearer {get_test_auth_token}'}
            )
        assert response.status_code == 200
        assert response.json() == expected_response

    @patch.object(PermissionChecker, 'check_permissions')
    @patch.object(ItemRepository, 'get_items_for_collection_id', side_effect=NoResultFound)
    def test_get_collection_items_collection_not_found(self, auth_mock, mock_object, get_test_auth_token):
        response = client.get(
            '/collections/100/items',
            headers={'Authorization': f'Bearer {get_test_auth_token}'}
        )
        assert response.status_code == 404
        assert response.json() == {'detail': 'Collection not found'}

    @patch.object(CollectionRepository, 'list_collections_for_user', return_value=[collection_1, collection_2])
    def test_list_collections(self, mock_object, get_test_auth_token):
        response = client.get(
            '/collections',
            headers={'Authorization': f'Bearer {get_test_auth_token}'}
        )
        assert response.status_code == 200
        assert response.json() == [
            {'collection_id': 100, 'name': 'Test Collection', 'description': 'desc'},
            {'collection_id': 200, 'name': 'Test Collection 2', 'description': 'description'}
        ]

    @patch.object(CollectionRepository, 'list_collections_for_user', side_effect=NoResultFound)
    def test_list_collections_not_found(self, mock_object, get_test_auth_token):
        response = client.get(
            '/collections',
            headers={'Authorization': f'Bearer {get_test_auth_token}'}
        )
        assert response.status_code == 404
        assert response.json() == {'detail': 'No collections'}

    @patch.object(CollectionRepository, 'create_collection', return_value=1)
    def test_create_collection(self, mock_object, get_test_auth_token):
        response = client.post(
            '/collections',
            json={'name': 'Test Collection'},
            headers={'Authorization': f'Bearer {get_test_auth_token}'}
        )
        assert response.status_code == 200

    @patch.object(PermissionChecker, 'check_permissions')
    @patch.object(CollectionRepository, 'delete_collection', return_value=1)
    def test_delete_collection(self, auth_mock, mock_object, get_test_auth_token):
        response = client.delete(
            '/collections/1',
            headers={'Authorization': f'Bearer {get_test_auth_token}'}
        )
        assert response.status_code == 200

    @patch.object(PermissionChecker, 'check_permissions')
    @patch.object(PermissionRepository, 'assign_user')
    def test_assign_user(self, auth_mock, mock_object, get_test_auth_token):
        response = client.post(
            '/collections/1/users',
            json={'user_id': 1, 'permission': 'User'},
            headers={'Authorization': f'Bearer {get_test_auth_token}'}
        )
        assert response.status_code == 200
