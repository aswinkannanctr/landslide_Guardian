import React, { useState } from 'react';
import './loginPage.css'; // Import CSS file
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  // State to manage the input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // State to manage login error
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Hardcoded username and password
  const hardcodedUsername = 'admin';
  const hardcodedPassword = '123';

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    if (!username || !password) {
      setError('Please enter both username and password');
    } else if (username === hardcodedUsername && password === hardcodedPassword) {
      
      console.log('Logged in successfully');
      // Clear input fields and error message
      setUsername('');
      setPassword('');
      setError('');
      navigate('/home');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='container'>
      <div className="login-container">
        <h2>Login Page</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
