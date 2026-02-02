# Build
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Package export into nginx html directory
FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80