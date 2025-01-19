import "../assets/styles/TopPanel.css";
import React from "react";
import clockIcon from "../assets/images/clock-icon.png";
import facebookIcon from "../assets/images/facebook-icon.png";
import instagramIcon from "../assets/images/instagram-icon.png";
import twitterIcon from "../assets/images/twitter-icon.png";
import linkedinIcon from "../assets/images/linkedin-icon.png";
import locationIcon from "../assets/images/location-icon.png";

function TopPanel() {
  return (
    <div className="top-panel">
  <div className="top-panel-container">
   
    <div className="top-panel-left">
      <img src={clockIcon} alt="Clock Icon" className="top-panel-icon" />
      <span>Monday - Friday 8AM - 9PM</span>
    </div>

    
    <div className="top-panel-center">
      <img src={locationIcon} alt="Location Icon" className="top-panel-icon" />
      <span>725 Park Ave, New York</span>
    </div>

    
    <div className="top-panel-right">
        <a href="https://instagram.com" target="_blank">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
        <a href="https://facebook.com" target="_blank">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
        </a>
            <a href="https://twitter.com" target="_blank">
        <img src={twitterIcon} alt="Twitter" className="social-icon" />
        </a>
            <a href="https://linkedin.com" target="_blank">
        <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
    </div>
  </div>
</div>

  );
}

export default TopPanel;

