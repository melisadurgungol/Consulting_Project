import React from "react";
import TopPanel from "../components/TopPanel";
import HeaderPanel from "../components/HeaderPanel";
import "../assets/styles/ProtectionPage.css";
import Title from "../components/Title";


function PasswordProtection(){
    return (
        <div>
        <TopPanel/>
        <HeaderPanel/>

        <div className="protection-banner-section">
          <div className="protection-banner-background">
            <div className="protection-banner-content">
              <Title title="BLOG" backgroundColor="#FFCC4A" color="#181818" />
              <h2 className="protection-banner-heading">
              Latest Blogs & News
              </h2>
            </div>
          </div>
        </div>

        <div className="protection-section">
          <h2 className="protection-title">Enter Password</h2>
          <input type="text" placeholder="Enter Your Password" className="protection-mail"/>
          <button className="protection-button">Submit</button>
        </div>

        </div>
      );
}
export default PasswordProtection;