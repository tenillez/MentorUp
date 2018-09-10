import React from "react";
import { withRouter } from 'react-router-dom';

import "./Footer.css";

const Footer = () =>{
    return (
       <div>
            
        {/* <div style={phantom} /> */}
        {/* <div style={style}> */}
        {/* <footer className="navbar navbar-dark bg-dark" id="footerNav">
            <a className="navbar-brand" href="/"><img height="35" width="35" src="./assets/logo.png" alt="logo"/></a>
            
    social media
            
        </footer> */}

        <div id="footer">
            <div id="repolink">
            <a href="https://github.com/tenillez/MentorUp" target="_blank"><i className="fab fa-github"></i></a>
            
            <div id="social">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-square"></i>
            </div>
            </div>
            {/* <div id="social">
            <i class="fab fa-twitter"></i>
            </div> */}
        
        </div>

        {/* </div> */}
    </div>
        

    )
}

export default withRouter(Footer);