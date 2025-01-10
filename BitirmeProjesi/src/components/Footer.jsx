import React from "react";
import "../assets/styles/Footer.css";
import AskExperts from "../assets/images/ask-experts-image.png";
import MoreButton from "./MoreButton";
import FooterBackground from "../assets/images/footer-background.png";

function Footer() {
    const handleClick = () => {
        console.log("Button clicked!");
    };

    return (
        <footer className="footer">
            <div className="footer-container">
               
                <div className="footer-experts">
                    <div className="ask-logo">
                    <img src={AskExperts} alt="Ask Experts Logo" className="experts-logo" />
                    <h2 className="experts-title">AskExperts</h2>
                    </div>
                    <span className="social-links">Fb. / Ig. / Tw. / Be.</span>
                </div>

                <div className="grey-line"></div>

                
                <div className="footer-links">
                    
                    <div className="footer-column">
                        <h2 className="footer-column-title">Product</h2>
                        <div className="yellow-line"></div>
                        <ul className="footer-list">
                            <li>Service</li>
                            <li>FAQ</li>
                            <li>Single Service</li>
                            <li>Get Quote</li>
                            <li>Prices</li>
                        </ul>
                    </div>

                    
                    <div className="footer-column">
                        <h2 className="footer-column-title">Company</h2>
                        <div className="yellow-line"></div>
                        <ul className="footer-list">
                            <li>About</li>
                            <li>News</li>
                            <li>Contacts</li>
                            <li>Testimonials</li>
                            <li>Our team</li>
                            <li>Our approach</li>
                        </ul>
                    </div>

                    
                    <div className="footer-column">
                        <h2 className="footer-column-title">Address</h2>
                        <div className="yellow-line"></div>
                        <span className="footer-address">
                            1700 W Blancke St, kiyev port south USA, America
                        </span>
                        <div className="footer-button">
                        <MoreButton
                            text="Book an Appointment"
                            backgroundColor="#ffffff"
                            textColor="#181818"
                            onClick={handleClick}
                        />
                        </div>
                    </div>
                </div>
                <div className="footer-divider"></div>

            </div>

            <div className="greyy-line"></div>
               
                <span className="footer-bottom-text">
                    ©2022 Consultalk. All rights reserved | Terms of Service | Privacy Policy
                </span>


        </footer>
    );
}

export default Footer;
