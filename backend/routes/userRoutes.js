const express = require('express');
const router = express.Router();

// Import the user controller
const userController = require('../controllers/userController');

// Define the user routes
router.post('/register', userController.signup);
router.post('/login', userController.login);

module.exports = router;
