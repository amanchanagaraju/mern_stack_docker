const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const signup = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Check if the user with the given email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User with this email already exists' });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const newUser = await User.create({ email, password: hashedPassword, role });

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(400).json({ message: 'Bad request' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists and if the password is correct
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id, role: user.role }, 'your_secret_key', {
      expiresIn: '1h', // Token will expire in 1 hour
    });

    res.json({ message: 'User logged in successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  signup,
  login,
};
