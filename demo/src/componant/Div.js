import React from 'react';
import ReactPlayer from 'react-player';
import './div.css';

function Div({ videolink, title, notes, w, h }) {
  return (
    <div className="divv" style={{ width: { w }, height: { h }, float: 'left', marginRight: '3vw', marginBottom: '3vh' }}>
      <ReactPlayer url={videolink} width="100%" height="100%" controls />
      <h3>{title}</h3>
      <div className="not1">
        <a href={notes} rel="noopener noreferrer">
          Download Word File
        </a>
      </div>
    </div>
  );
}

export default Div;
