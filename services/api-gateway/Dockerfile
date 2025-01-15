#Stage1-initial build
FROM node:16-alpine AS build

# Create app directory
WORKDIR /usr/src/app/api-gateway

# Copy package.json files to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the source files
COPY . .

# Build the React app for production
RUN npm run build

#Stage2-Making our Image  smaller

FROM nginx:alpine

# Copy build files to Nginx
COPY --from=build /usr/src/app/api-gateway/build /usr/share/nginx/html
EXPOSE 4000
CMD ["nginx", "-g", "daemon off;"]

