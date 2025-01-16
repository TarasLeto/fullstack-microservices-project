# Stage 1: Development (ts-node)
FROM node:18-alpine AS development

# Set the working directory
WORKDIR /app

# Copy only the package.json and package-lock.json for efficient caching
COPY package*.json ./

# Install all dependencies, including devDependencies
RUN npm install

# Copy the entire application to the container
COPY . .

# Install ts-node, TypeScript, and any other necessary dev dependencies
RUN npm install --save-dev ts-node typescript

# Compile TypeScript to generate dist/ directory
RUN npx tsc  # This will use the TypeScript compiler to create the dist/ folder

# Expose the application port
EXPOSE 4003

# Start the application using ts-node (development mode)
CMD ["npm", "run", "start"]  # This will run ts-node src/server.ts

# Stage 2: Production (compiled JavaScript)
FROM node:18-alpine AS production

# Set the working directory
WORKDIR /app

# Copy only the package.json and package-lock.json to avoid reinstalling dependencies
COPY package*.json ./

# Install production dependencies only
RUN npm install --production

# Copy the compiled files (dist/) from the builder stage
COPY --from=development /app/dist /app/dist

# Expose the application port for production
EXPOSE 4003

# Start the application using the compiled JavaScript (from dist/)
CMD ["node", "dist/server.js"]  # Runs the compiled server.js file
