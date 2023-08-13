FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy all frontend source code to the container
COPY . .

# Expose the port on which the frontend server will run
EXPOSE 3000

# Command to start the frontend server
CMD ["npm", "start"]