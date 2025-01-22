# Stage 1: Development
FROM node:18-alpine AS development

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies, including devDependencies
RUN npm install

# Copy the application source code
COPY . .

# Install necessary dev tools like TypeScript and ts-node
RUN npm install --save-dev ts-node typescript

# Compile TypeScript to JavaScript (output to dist/)
RUN npm run build

# Expose the application port for development
EXPOSE 4002

# Start the application in development mode
CMD ["npm", "run", "start"]

# Stage 2: Production
FROM node:18-alpine AS production

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy compiled application code from the development stage
COPY --from=development /app/dist /app/dist

# Copy any additional configuration files, e.g., .env
COPY .env .env

# Expose the application port
EXPOSE 4002

# Start the application in production mode
CMD ["node", "dist/server.js"]
