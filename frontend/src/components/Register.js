import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ...
const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', { email, password });
      console.log(response.data); // Handle successful registration response
    } catch (error) {
      console.error('Registration error:', error);
    }
  };
  // ...
  

  return (
    <div>
      <h2>Register</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
