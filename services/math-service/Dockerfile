# Stage 1: Build dependencies and transpile (if needed)
FROM node:16-alpine AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Install production dependencies
RUN npm install --production

# Copy the application source
COPY . .

# If you have a build step (e.g., TypeScript or bundling), add it here
# Uncomment the following line if you use TypeScript or another build tool
# RUN npm run build

# Stage 2: Create a lightweight production image
FROM node:16-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy only the built files from the previous stage
COPY --from=build /usr/src/app .

# Expose the application port
EXPOSE 4001

# Start the application
CMD ["npm", "start"]
