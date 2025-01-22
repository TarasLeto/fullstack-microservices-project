# Stage 1: Development (ts-node for development)
FROM node:18-alpine AS development

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for efficient caching
COPY package*.json ./

# Install all dependencies, including devDependencies
RUN npm install

# Copy the entire application source code
COPY . .

# Install TypeScript and ts-node as dev dependencies
RUN npm install --save-dev ts-node typescript

# Expose the application port for development
EXPOSE 4003

# Start the application in development mode using ts-node
CMD ["npm", "run", "start"]  # This uses ts-node to run src/app.ts

# Stage 2: Production (compiled JavaScript)
FROM node:18-alpine AS production

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for efficient caching
COPY package*.json ./

# Install production dependencies only
RUN npm install --production

# Copy the compiled files (dist/) from the development stage
COPY --from=development /app/dist /app/dist

# Expose the application port for production
EXPOSE 4003

# Start the application in production mode using the compiled JavaScript
CMD ["node", "dist/app.js"]  # Runs the compiled app.js file from dist/
