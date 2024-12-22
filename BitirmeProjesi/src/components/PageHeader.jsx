import React from "react";
import "../assets/styles/PageHeader.css";
import { Link, useLocation } from "react-router-dom";
import messageIcon from "../assets/images/message-icon.png";
import telephoneIcon from "../assets/images/telephone-icon.png";

function PageHeader() {
    const location = useLocation(); // Mevcut URL'yi almak için

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
                <div className="page-header-call-button-circle">
                    <img src={telephoneIcon} alt="Telephone Icon" />
                </div>
                <span>+ (888) 452 1505</span>
            </div>
        </div>
    );
}

export default PageHeader;

