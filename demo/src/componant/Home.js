import React from 'react';
import './home.css';
import el from '../image/el.jpg'

console.log(el);

function Home() {
    
    return ( 
        <div className="top" >
       <div className='homediv'>
            <ul style={{paddingTop:'30px'}}>
                <li><a href='/userdata' >Create New Web-site</a></li>
                <li><a href='/notesbox'>Uplode Notes </a></li>
                <li><a href='/contact'>Contact</a></li>
                <li><a href='/notes'>Notes</a></li>
                <li><a href='/basic'>Basic</a> </li>
                <li><a href='/project'>Project</a></li>
            </ul>
       </div>
       <div className='imgdiv'>
            <img className='el' src={el} alt='education pic'/>


       </div>
       
       
        </div>
     );
}

export default Home;