
import React, { useState } from 'react';
import './signupuser.css';

function SignupUser() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameuser, setNameUser] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // code to handle form submission
  };

    return ( 
        <div>
        
        <form onSubmit={handleSubmit}>
        <h1>Signup User</h1><br/>
        <label>Name User:</label>
          <input className='n' type="text" value={nameuser} onChange={(e) => setNameUser(e.target.value)} required/>
          <br/>
          <label>Email:</label>
          <input className='e' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <br/>
          <label>Password:</label>
          <input className='p' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <br/>
         
          <button className='bus' type="submit">Signup</button>
        </form>
      </div>
    );
}

export default SignupUser;