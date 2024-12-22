import React from "react";
import "../assets/styles/TopBar.css";
import clockIcon from "../assets/images/clock-icon.png";
import facebookIcon from "../assets/images/facebook-icon.png";
import instagramIcon from "../assets/images/instagram-icon.png";
import twitterIcon from "../assets/images/twitter-icon.png";
import linkedinIcon from "../assets/images/linkedin-icon.png";
import locationIcon from "../assets/images/location-icon.png";


function TopBar(){
    return(
        <div className="topbar">
           <div className="topbar-section">
            <img src={clockIcon} alt="Clock Icon"/>
            <span>Monday - Friday8AM - 9PM</span>
           </div>
           <div className="topbar-section">
            <img src={locationIcon} alt="Location Icon" />
            <span>725 Park Ave, New York</span>
           </div>
           <div className="topbar-section">
            <a href="https://instagram.com" target="_blank">
                <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://facebook.com" target="_blank">
                <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank">
                <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank">
                <img src={linkedinIcon} alt="Linkedin" />
            </a>
           </div>
        </div>
    );
}

export default TopBar;
