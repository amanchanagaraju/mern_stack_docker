// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" color="inherit" style={{ textDecoration: 'none' }}>
          MERN Course Selling App
        </Typography>
        <Button component={Link} to="/courses" color="inherit">
          Courses
        </Button>
        <Button component={Link} to="/about" color="inherit">
          About
        </Button>
        <Button component={Link} to="/login" color="inherit">
          Login
        </Button>
        <Button component={Link} to="/register" color="inherit">
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
