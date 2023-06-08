
import './userdata.css';
import { useEffect, useState } from 'react';

function UserData() {
  const [form, setForm] = useState({});
  
  const [error, setError] = useState([]);
  
  const handleChange = (e)=>{
    setForm({
       ...form,
      [e.target.name] : e.target.value
    })
    setSelectedOption(e.target.value);
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    
    const response = await fetch('http://localhost:8080/video',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })
    e.target.reset();

    // Clear the form state
    setForm({
      title: '',
      videolink: '',
      notes: '',
      videouplode: ''
    });
    

    const data = await response.json();
   console.log(data);
  }

  const [selectedOption, setSelectedOption] = useState(null);
  const [videoLink, setVideoLink] = useState('');
  const [videoUplode, setVideoUplode] = useState(null);

  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

  const handleVideoLinkChange = (event) => {
    setVideoLink(event.target.value);
    
  };

  const handleVideoFileUpload = (event) => {
    const upload = event.target.files[0];
    setVideoUplode(upload);
    const videoLink = URL.createObjectURL(upload);
    setVideoLink(videoLink);
  };
  return (
    <div id='full'>
    <form onSubmit={handleSubmit}>
      <h3 ><b> Create Data</b></h3><br></br><br></br>
      <input className='userinput' type="text"  name="title" placeholder='Video Title' onChange={handleChange} style={{marginBottom:'20px'}}></input>
      <br></br> 
      <div className='check'>
        <input
          type="radio"
          name="option"
          value="link"
          checked={selectedOption === 'link'}
          onChange={handleChange}
        />
        <label htmlFor="link">Link</label>
        <input
          type="radio"
          name="option"
          value="upload"
          checked={selectedOption === 'upload'}
          onChange={handleChange}
        />
        <label htmlFor="upload">Upload</label>
      </div>
      {selectedOption === 'link' && (
        <div>
          <label htmlFor="videoLink">Video Link:</label>
          <input
            type="link"
            placeholder='Video Link'
            id="videoLink"
            // value={videoLink}
            name="videolink"
            onChange={handleChange}
          />
        </div>
      )}

      {selectedOption === 'upload' && (
        <div>
          {/* <label htmlFor="videoFile">Upload Video:</label> */}
          <input
            type="file"
            placeholder='Video File'
            id="videoFile"
            accept="video/*"
            onChange={handleVideoFileUpload}
          />
        </div>
      )}

      {/* <input type="file" className='userinput'  name="videouplode" placeholder='Video uplode' accept="video/*"  onChange={handleChange} style={{marginBottom:'20px'}}></input><br></br>
      {error && <p className='pero'>{error}</p>}
      <input type="link" className='userinput' name="videolink" placeholder='video Link ' onChange={handleChange} style={{marginBottom:'20px'}}></input> */}
      {/* <input type="link" className='userinput' name="notes" placeholder='Drive Notes Link ' onChange={handleChange} style={{marginBottom:'20px'}}></input>
      */}
      <input className='inbut' type="Submit" value="Submit"></input>
    </form>
    
  </div>
  )
}

export default UserData;

