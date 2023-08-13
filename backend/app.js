// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create the Express app
const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to the MongoDB container
const DB_HOST = process.env.DB_HOST || 'mongodb'; // Docker service name
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME || 'mern_app_db';

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Import the routes
const courseRoutes = require('./routes/courseRoutes');
const userRoutes = require('./routes/userRoutes');

// Routes for course and user
app.use('/api/courses', courseRoutes);
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
