FROM node:14 as base

# Prepare app directories for each service
WORKDIR /app/api-gateway
COPY ./services/api-gateway/package*.json ./
RUN npm install
COPY ./services/api-gateway ./

WORKDIR /app/math-service
COPY ./services/math-service/package*.json ./
RUN npm install
COPY ./services/math-service ./

WORKDIR /app/history-service
COPY ./services/history-service/package*.json ./
RUN npm install
COPY ./services/history-service ./

WORKDIR /app/geography-service
COPY ./services/geography-service/package*.json ./
RUN npm install
COPY ./services/geography-service ./

# Build each service
WORKDIR /app/api-gateway
RUN npm run build

WORKDIR /app/math-service
RUN npm run build

WORKDIR /app/history-service
RUN npm run build

WORKDIR /app/geography-service
RUN npm run build

# Final stage: Use Nginx to serve your services' builds (if applicable)
FROM nginx:alpine
COPY --from=base /app/api-gateway/build /usr/share/nginx/html/api-gateway
COPY --from=base /app/math-service/build /usr/share/nginx/html/math-service
COPY --from=base /app/history-service/build /usr/share/nginx/html/history-service
COPY --from=base /app/geography-service/build /usr/share/nginx/html/geography-service

# Expose ports
EXPOSE 4000 4001 4002 4003
