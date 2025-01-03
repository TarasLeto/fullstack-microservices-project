# Microservices Platform with Docker and CI/CD

This repository contains a microservices-based application with services for mathematics, history, and geography, an API gateway, and a frontend. All services are containerized using Docker and orchestrated with Docker Compose.

## Project Structure

project-root/
├── services/ 
  ├── api-gateway/ 
  ├── math-service/ 
  ├── history-service/ 
  ├── geography-service/ 
├── frontend/ 
├── docker-compose.yml 
└── .github/ 
  └── workflows/ 
    └── ci.yml


### Services

1. **API Gateway**: Manages API routing and communication between services.
2. **Math Service**: Provides math-related APIs backed by MongoDB.
3. **History Service**: Provides history-related APIs backed by PostgreSQL.
4. **Geography Service**: Provides geography-related APIs backed by MongoDB.
5. **Frontend**: React-based user interface.

---

## Prerequisites

1. Install Docker and Docker Compose.
2. Install Node.js and npm (for local development).

---

## Environment Variables

Set the following variables in `.env` files for each service:

### Common
- `MONGO_URL`: MongoDB connection string.
- `POSTGRES_*`: PostgreSQL connection credentials.

### Example `.env` file for `history-service`:
PORT=4002 
POSTGRES_HOST=history-db 
POSTGRES_PORT=5432 
POSTGRES_USER=user 
POSTGRES_PASSWORD=password 
POSTGRES_DB=questions

---

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
    docker-compose up --build

2. Access the application:

  Frontend: http://localhost:3000
  API Gateway: http://localhost:4000

---

## Health Checks
Each service includes a health check:

API Gateway: /health
Math Service: /health
History Service: /health
Geography Service: /health
Frontend: Root URL (/)
Run docker-compose ps to check the health status of services.

---

## Testing

cd <service-name>
npm test

---

## CI/CD Configuration

The CI/CD process uses GitHub Actions to:

Build Docker images.
Run tests with a quality gate of 20% coverage.
Deploy services using Docker Compose.
Workflow File
Located in .github/workflows/ci.yml. The workflow includes:

Code Linting.
Unit Testing.
Docker Build & Push.
Deployment.


