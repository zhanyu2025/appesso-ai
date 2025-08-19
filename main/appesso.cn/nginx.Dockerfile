# nginx.Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY website/package*.json ./

# Install dependencies
RUN npm install

# Copy the website source code
COPY website/ ./

# Build the application
RUN npm run build

# Production stage with nginx
FROM nginx:alpine

# Copy built files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf
COPY .htpasswd /etc/nginx/.htpasswd

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
