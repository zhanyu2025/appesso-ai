FROM node:18-slim
RUN apt-get update
RUN apt-get install -y openssl

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose the port the app runs on
EXPOSE 5000

# The command to run the application
CMD ["npm", "run", "dev"]
