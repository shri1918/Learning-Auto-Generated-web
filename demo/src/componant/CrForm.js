import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './crform.css';

function CrForm({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/webdata/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Login successful
        handleLogin(); // Update login status in App component
        navigate('/home'); // Navigate to the home page
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      if (error.response) {
        const { status } = error.response;

        if (status === 401) {
          setErrorMessage('Invalid email or password.');
        } else {
          setErrorMessage('An error occurred. Please try again.');
        }
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <form className="f" onSubmit={handleSubmit}>
      <h2>
        <b>Welcome to Login</b>
      </h2>
      {errorMessage && <p className="err">{errorMessage}</p>}
      <div>
        <label>Login ID:</label>
        <input
          className="l1"
          type="text"
          id="loginId"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className='pas'>Password:</label>
        <input
          className="p1"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="b1" type="submit">
        Login
      </button>
      <br />
      <a className="a1" href="/signup">
        Create Account
      </a>
    </form>
  );
}

export default CrForm;