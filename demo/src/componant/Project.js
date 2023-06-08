import React, { useEffect, useState } from 'react';
import './project.css';
import Div from './Div';

function Project() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch('http://localhost:8080/video', {
      method: 'GET',
    });
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const sendMessage = () => {
    const targetWindow = document.getElementById('targetWindow').contentWindow;

    if (targetWindow) {
      const targetOrigin = window.location.origin; // Use the current window's origin

      try {
        targetWindow.postMessage('Message from sender', targetOrigin);
      } catch (error) {
        console.error('Failed to send message:', error);
      }
    }
  };

  return (
    <>
      <div style={{ marginLeft: '10vw', width: '100%', height: 'auto', marginBottom: '300px' }}>
        {users.map((div) => (
          <Div key={div._id} title={div.title} videolink={div.videolink} videouplode={div.videouplode} />
        ))}
      </div>
      {/* <button onClick={sendMessage}>Send Message</button> */}
    </>
  );
}

export default Project;
