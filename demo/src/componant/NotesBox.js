// import React from "react";
// // import './notesbox.css';

// function NotesBox({col,name}) {
//     const divStyle = {
//         backgroundColor:col,
//         width: '250px',
//         height: '100px',
//         float: 'left',
//         textAlign: 'center',marginLeft: '130px',
//         float: 'left',paddingTop:'20px',
//         marginBottom: '20px',
//     }

//     return (  
//         <div className="box" >
//             <h1 style={divStyle}>{name}</h1>
//         </div>
    
    
    
//    );
// }

// export default NotesBox;
import React, { useState } from 'react';
import axios from 'axios';

const NotesBox = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = async (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default NotesBox;




