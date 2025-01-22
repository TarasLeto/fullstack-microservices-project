# Stage 1: Development
FROM node:18-alpine AS development

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for efficient dependency installation
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 4003

# Default command: Use nodemon for hot-reloading in development
CMD ["npm", "run", "dev"]

# Stage 2: Production
FROM node:18-alpine AS production

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy compiled files and essential configurations from the development stage
COPY --from=development /app/dist /app/dist


# Expose the application port
EXPOSE 4003

# Command: Use the compiled JavaScript files for production
CMD ["npm", "start"]
