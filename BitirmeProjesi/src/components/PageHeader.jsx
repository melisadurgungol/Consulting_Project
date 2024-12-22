import React from "react";
import "../assets/styles/PageHeader.css";
import { Link, useLocation } from "react-router-dom";
import messageIcon from "../assets/images/message-icon.png";
import telephoneIcon from "../assets/images/telephone-icon.png";

function PageHeader() {
    const location = useLocation(); 

    const handleCallClick = (event) => {
        event.preventDefault(); 
        const confirmCall = window.confirm(
            "Bu numarayı aramak istiyor musunuz? + (888) 452 1505"
        );
        if (confirmCall) {
            window.location.href = "tel:+8884521505";
        }
    };

    return (
        <div className="page-header">
            <div className="page-header-logo">
                <img src={messageIcon} alt="Message Icon" />
                <span>AskExperts</span>
            </div>
            <div>
                <ul className="page-header-menu">
                    <li
                        className={`page-header-menu-item ${
                            location.pathname === "/" ? "active" : ""
                        }`}
                    >
                        <span className="dot"></span>
                        <Link to="/">Home</Link>
                    </li>
                    <li
                        className={`page-header-menu-item ${
                            location.pathname === "/about" ? "active" : ""
                        }`}
                    >
                        <span className="dot"></span>
                        <Link to="/about">About</Link>
                    </li>
                    <li
                        className={`page-header-menu-item ${
                            location.pathname === "/services" ? "active" : ""
                        }`}
                    >
                        <span className="dot"></span>
                        <Link to="/services">Services</Link>
                    </li>
                    <li
                        className={`page-header-menu-item ${
                            location.pathname === "/team" ? "active" : ""
                        }`}
                    >
                        <span className="dot"></span>
                        <Link to="/team">Team</Link>
                    </li>
                    <li
                        className={`page-header-menu-item ${
                            location.pathname === "/contact" ? "active" : ""
                        }`}
                    >
                        <span className="dot"></span>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="page-header-call-button">
                <a
                    href="tel:+8884521505"
                    className="page-header-call-button-circle"
                    onClick={handleCallClick} 
                >
                    <img src={telephoneIcon} alt="Telephone Icon" />
                </a>
                <span>+ (888) 452 1505</span>
            </div>
        </div>
    );
}

export default PageHeader;
