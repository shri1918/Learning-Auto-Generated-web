import React from 'react';

function Logo() {
    const logo={
        src:'Lo.jpg',
    }
    const sty={
        marginLeft:'20px',
        width:'50px', 
        height:'50px'
    }
    return(
            <div>
            <img style={sty} src={logo.src} alt="logo" />
            </div>
    );
}

export default Logo;