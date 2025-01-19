import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles/HeaderPanel.css";
import AskExperts from "../assets/images/ask-experts-image.png";
import PhoneNumberButton from "../components/PhoneNumberButton";
import TelephoneButtonIcon from "../assets/images/telephone-button-icon.png";

function HeaderPanel() {
  const location = useLocation();

  const handleClick = () => {
    console.log("Phone button clicked");
  };

  return (
    <div className="header-panel">
      <div className="header-panel-container">
      
      <div className="header-panel-left">
        <img src={AskExperts} alt="Ask Experts Logo" className="experts-logo" />
        <h2 className="experts-title">AskExperts</h2>
      </div>

      
      <div className="header-panel-center">
        <ul className="header-menu">
          <li
            className={`header-menu-item ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            <span className="dot"></span>
            <Link to="/">Home</Link>
          </li>
          <li
            className={`header-menu-item ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            <span className="dot"></span>
            <Link to="/about">About</Link>
          </li>
          <li
            className={`header-menu-item ${
              location.pathname === "/services" ? "active" : ""
            }`}
          >
            <span className="dot"></span>
            <Link to="/services">Services</Link>
          </li>
          <li
            className={`header-menu-item ${
              location.pathname === "/team" ? "active" : ""
            }`}
          >
            <span className="dot"></span>
            <Link to="/team">Team</Link>
          </li>
          <li
            className={`header-menu-item ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            <span className="dot"></span>
            <Link to="/contact">Contact</Link>
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
