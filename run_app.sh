# run locally
# source backend/venv/bin/activate
# PYTHONPATH=$PWD/backend
# uvicorn backend.api.root:app --host 0.0.0.0

# run in docker
docker compose build
docker compose up -d
