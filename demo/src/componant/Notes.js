// import React from 'react';
// import './notes.css';
// import NotesBox from './NotesBox';

// function Notes() {
//     let lag = [{
//         name:'C',
//         col:'red',
//     },{
//         name:'Java',
//         col:'blue',
//     },{
//         name:'Python',
//         col:'green',
//     },{
//         name:'C#',
//         col:'yellow',
//     },{
//         name:'React.js',
//         col:'red',
//     },{
//         name:'Node',
//         col:'pink',
//     }];
//     return (  
//        <div>
//        {lag.map((notesbox, index) => (
//         <NotesBox key={index} name={notesbox.name} col={notesbox.col} />
//       ))}
//        </div>
//     );
// }

// export default Notes;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notes = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await axios.get('/files');
      setFiles(response.data.files);
    } catch (error) {
      console.log(error);
    }
  };

  const downloadFile = async (filename) => {
    try {
      const response = await axios.get(`/files/download/${filename}`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Files:</h3>
      {files.length === 0 ? (
        <p>No files found.</p>
      ) : (
        <ul>
          {files.map((file, index) => (
            <li key={index}>
              {file}
              <button onClick={() => downloadFile(file)}>Download</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notes;
