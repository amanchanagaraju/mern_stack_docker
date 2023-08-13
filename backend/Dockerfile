FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy all backend source code to the container
COPY . .

# Expose the port on which the backend server will run
EXPOSE 5000

# Command to start the backend server
CMD ["npm", "start"]