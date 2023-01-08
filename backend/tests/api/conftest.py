import pytest
from datetime import datetime, timedelta
from api.token import create_access_token


@pytest.fixture(scope='module')
def get_test_auth_token() -> str:
    return create_access_token(
        data={
            'sub': "1",
            'email': 'user@test.com',
        },
        expires_delta=timedelta(minutes=120)
    )
