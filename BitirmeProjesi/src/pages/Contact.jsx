import React from "react";
import TopPanel from "../components/TopPanel";
import HeaderPanel from "../components/HeaderPanel";
import "../assets/styles/ContactPage.css";
import Title from "../components/Title";

function Contact(){
    return (
        <div>
        <TopPanel/>
        <HeaderPanel/>

        <div className="contact-banner-section">
          <div className="contact-banner-background">
            <div className="contact-banner-content">
              <Title title="CONTACT US" backgroundColor="#FFCC4A" color="#181818" />
              <h2 className="contact-banner-heading">
              Feel Free To Reach Us
              </h2>
            </div>
          </div>
        </div>

     
        </div>
      );
}
export default Contact;