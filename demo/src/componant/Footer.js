import React from "react";
import "./Footer.css";

// import {
//     faYoutube,
//     faGithub,
//     faFacebook,
// } from "@fortawesome/free-brands-svg-icons";
// import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    {/* <PrivacyModal /> */}
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    {/* <FontAwesomeIcon icon={faCopyright} />{" "} */}
                    <span style={{ paddingLeft: 5 }}>
                        {/* {new Date().getFullYear()} YourCompany. All Rights */}
                        Reserved.
                    </span>
                </div>
                <a
                    href="https://github.com/sudiptob2/simple-react-footer"
                    
                    className="item3"
                >GitHub
                    {/* <FontAwesomeIcon icon={faGithub} /> */}
                </a>
                <a
                    href="http://fb.com/sudiptob2"
                    
                    className="item4"
                >FB
                    {/* <FontAwesomeIcon icon={faFacebook} /> */}
                </a>
                <a
                    href="https://www.youtube.com/"
                    
                    className="item5"
                >youtube
                    {/* <FontAwesomeIcon icon={faYoutube} /> */}
                </a>

               
            </div>
        </footer>
    );
};

export default Footer;