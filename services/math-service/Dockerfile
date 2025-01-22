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

# Install necessary development tools like ts-node and TypeScript
RUN npm install --save-dev ts-node typescript

# Compile TypeScript into JavaScript (output to the dist/ directory)
RUN npm run build

# Expose the application port for development
EXPOSE 4001

# Command to start the application in development
CMD ["npm", "run", "start"]

# Stage 2: Production
FROM node:18-alpine AS production

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the compiled application from the development stage
COPY --from=development /app/dist /app/dist

# Expose the application port for production
EXPOSE 4001

# Command to start the application in production
CMD ["node", "dist/server.js"]
