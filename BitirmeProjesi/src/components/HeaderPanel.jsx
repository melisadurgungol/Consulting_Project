import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles/HeaderPanel.css";
import AskExperts from "../assets/images/ask-experts-image.png";
import PhoneNumberButton from "../components/PhoneNumberButton";
import TelephoneButtonIcon from "../assets/images/telephone-button-icon.png";

function HeaderPanel({ backgroundColor = "rgba(27, 27, 27, 0.91)" , color = "#fff", textcolor = "#fff" }) {
  const location = useLocation();

  const handleClick = () => {
    console.log("Phone button clicked");
  };

    let phoneButtonBackgroundColor = "#fff"; 

  
    if (location.pathname === "/home-2") {
      phoneButtonBackgroundColor = "#f3f3f3"; 
    }

  return (
    <div className="header-panel" style={{backgroundColor: backgroundColor, color: color }}>
      <div className="header-panel-container" >
      
      <div className="header-panel-left">
        <img src={AskExperts} alt="Ask Experts Logo" className="experts-logo" />
        <h2 className="experts-title">AskExperts</h2>
      </div>

      
      <div className="header-panel-center" >
        <ul className="header-menu"  >
          <li
            className={`header-menu-item ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            <span className="dot"></span>
            <Link to="/"  style={{color: textcolor }}>Home</Link>
          </li>
          <li
            className={`header-menu-item ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            <span className="dot"></span>
            <Link to="/about"  style={{color: textcolor }}>About</Link>
          </li>
          <li
            className={`header-menu-item ${
              location.pathname === "/services" ? "active" : ""
            }`}
          >
            <span className="dot"></span>
            <Link to="/services"  style={{color: textcolor }}>Services</Link>
          </li>
          <li
            className={`header-menu-item ${
              location.pathname === "/team" ? "active" : ""
            }`}
          >
            <span className="dot"></span>
            <Link to="/team"  style={{color: textcolor }}>Team</Link>
          </li>
          <li
            className={`header-menu-item ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            <span className="dot"></span>
            <Link to="/contact"  style={{color: textcolor }}>Contact</Link>
          </li>
        </ul>
      </div>

      
      <div className="header-panel-right">
        <PhoneNumberButton
          icon={<img src={TelephoneButtonIcon} alt="Phone" />}
          number="+ (888) 452 1505"
          backgroundColor="#fff"
          onClick={handleClick}
        />
      </div>
      </div>
    </div>
  );
}

export default HeaderPanel;
