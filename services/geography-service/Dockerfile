# Stage 1 - Build Stage
FROM node:16-alpine AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy only the package files first to leverage Docker's caching
COPY src/geography-service/package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application source
COPY src/geography-service ./

# Build the application
RUN npm run build

# Stage 2 - Production Image
FROM nginx:alpine

# Copy build files to the Nginx web server directory
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose the API Gateway port
EXPOSE 4003

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
