# JustDiego Docker Image

This directory contains a simple Docker setup for running JustDiego directly from the GitHub repository.

## Quick Start

### Option 1: Using Docker (Simplest)

```bash
# Build the image
docker build -t justdiego https://github.com/dewstouh/justdiego.git#main:docker/images/justdiego

# Run the container
docker run -p 3000:3000 \
  -v $(pwd)/data:/app/packages/db/prisma \ # Persist data
  justdiego
```

### Option 2: Using Docker Compose

```bash
# Clone the repository
git clone https://github.com/dewstouh/justdiego.git
cd justdiego/docker/images/justdiego

# Start the application
docker compose up
```

### Option 3: Build from local source

```bash
# Clone the repository
git clone https://github.com/dewstouh/justdiego.git
cd justdiego/docker/images/justdiego

# Build and run
docker build -t justdiego .
docker run -p 3000:3000 justdiego
```

## Accessing the Application

Once running, you can access:
- **Web Application**: http://localhost:3000
- The application will automatically initialize with sample data

## Environment Variables

You can customize the deployment using environment variables:

```bash
docker run -p 3000:3000 \
  -e PORT=3000 \
  -e NODE_ENV=production \
  justdiego
```

## Health Check

The container includes a health check that monitors the application status. You can check it with:

```bash
docker ps
```

Look for the health status in the STATUS column.

## Troubleshooting

- If the build fails, ensure you have a stable internet connection for cloning the repository
- If the application doesn't start, check the logs with: `docker logs <container-id>`
- The database is automatically initialized on first run