FROM python:3.11-slim

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Build context is the repository root (see docker-compose.yml / host settings)
COPY backend/requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# ML package + data: without these the backend silently falls back to the mock recommender
COPY ml/ /app/ml/
RUN pip install --no-cache-dir /app/ml/
COPY data/ /app/data/
COPY backend/ /app/backend/

EXPOSE 8000

# Hosts such as Render/Railway provide $PORT; default to 8000 locally
CMD ["sh", "-c", "uvicorn backend.app.main:app --host 0.0.0.0 --port ${PORT:-8000}"]
