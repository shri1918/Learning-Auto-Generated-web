// import React, { useState } from 'react';
import './signupadmin.css';
import { useEffect, useState } from 'react';
// import axios from 'axios';

const SignupAdmin = () => {
  const [form, setForm] = useState({});
  const [users, setUsers] = useState([]);
 

  const handleChange = (e)=>{
    setForm({
       ...form,
      [e.target.name] : e.target.value
    })
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    window.location.href = '/crform'; 
    const response = await fetch('http://localhost:5000/webdata',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })
    setForm({ email: '', webName: '', password: '' });
    

    const data = await response.json();
   console.log(data);
  }

  const getUsers = async ()=>{
    const response = await fetch('http://localhost:5000/webdata',{
      method:'GET',
    })
   const data = await response.json();
   setUsers(data);
  }

  useEffect(()=>{
    getUsers();
  },[])

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
      <h1>Signup Admin</h1>
        <label>Email:</label>
        <input className='e1' type="email" name="email" onChange={handleChange}  required/>

        <label>Web Name:</label>
        <input className='w1' type="text" name="webName" onChange={handleChange}  required/>

        <label>Password:</label>
        <input className='p1' type="password" name="password" onChange={handleChange}  required/>
        <br></br><button className='bus' type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupAdmin;
