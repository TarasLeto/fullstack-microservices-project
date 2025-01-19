# Stage 1: Build the frontend app
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . ./

# Build the app for production
RUN npm run build

# Stage 2: Run the React app
FROM node:18-alpine AS production

WORKDIR /app

# Install dependencies (we only need production dependencies)
COPY package.json package-lock.json ./
RUN npm install --production

# Copy the build files from the build stage
COPY --from=build /app/build /app/build

# Expose port 3000 for the frontend
EXPOSE 3000

# Command to run the app on port 3000
CMD ["npm", "start"]
