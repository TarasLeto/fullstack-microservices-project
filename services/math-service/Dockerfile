FROM node:alpine AS builder
 
WORKDIR /app
 
COPY package.json package.json
COPY package-lock.json package-lock.json
 
RUN npm install
 
COPY . .

FROM node:alpine AS production

WORKDIR /app

COPY --from=builder .

EXPOSE 4001

CMD [ "node", "src/server.ts" ]
