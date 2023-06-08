import React, { useState } from 'react';
import axios from 'axios';
import './contact.css';

function Contact() {
  const [formStatus, setFormStatus] = useState('Send');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('Submitting...');
  
    try {
      await axios.post('/send-email', {
        name,
        email,
        message,
      });
  
      setFormStatus('Email Sent!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      setFormStatus('Error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>

      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          required
        />
      </div>

      <button type="submit">{formStatus}</button>
    </form>
  );
}

export default Contact;
