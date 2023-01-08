import pytest
from unittest.mock import patch
from fastapi.testclient import TestClient

from main import app
from api.token import PermissionChecker
from repository.user import UserRepository, User
from repository.permission import AssignedCollections, PermissionRepository

client = TestClient(app)


user_1 = User(
    user_id=101,
    email='user@test.com',
    name='Test',
    password_hash='$2b$12$X9RWfxm3NGauzJjRErGpLeMN8Mlavv5WP0xA5vaf05mxFDSrIsGse'
)


@pytest.mark.usefixtures('get_test_auth_token')
class TestApiToken:
    @patch.object(UserRepository, 'get_user_by_email', return_value=user_1)
    def test_login_for_access_token(self, mock_object):
        response = client.post(
            '/token',
            data={'username': 'Test', 'password': 'password123'}
        )
        assert response.status_code == 200

    @pytest.mark.parametrize('required_level, assigned_collections', [
        (
            'User',
            AssignedCollections(
                user_collections=[1],
                admin_collections=[],
                su_collections=[]
            )
        ),
        (
            'Collection Administrator',
            AssignedCollections(
                user_collections=[],
                admin_collections=[1],
                su_collections=[]
            )
        ),
        (
            'Super User',
            AssignedCollections(
                user_collections=[],
                admin_collections=[],
                su_collections=[1]
            )
        ),
    ])
    def test_check_permissions(self, get_test_auth_token, required_level, assigned_collections):
        pc = PermissionChecker()
        with patch.object(PermissionRepository, 'get_assigned_collections', return_value=assigned_collections):
            pc.check_permissions(get_test_auth_token, required_level, 1)
