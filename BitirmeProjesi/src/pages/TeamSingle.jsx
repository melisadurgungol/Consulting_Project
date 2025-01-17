import React from "react";
import TopPanel from "../components/TopPanel";
import "../assets/styles/TeamSinglePage.css";
import HeaderPanel from "../components/HeaderPanel";
import TeamSingleFacebook from "../assets/images/teamsingle-facebook-icon.png";
import TeamSingleInstagram from "../assets/images/teamsingle-instagram-icon.png";
import TeamSingleTwitter from "../assets/images/teamsingle-twitter-icon.png";
import TeamSingleLinkedin from "../assets/images/teamsingle-linkedin-icon.png";
import SarahJasmine from "../assets/images/sarah-jasmine.png";


function TeamSingle() {
  return (
    <div>
    <TopPanel/>
    <HeaderPanel/>

    <div className="team-single-section">

  <div className="team-single-left">
  <div className="team-single-pattern"></div>
    <img src={SarahJasmine} alt="Sarah Jasmine" className="team-single-image" />
  </div>


  <div className="team-single-right">
    <div className="team-single-header">
      <div className="team-single-info">
        <h2 className="team-single-name">Sarah Jasmine</h2>
        <p className="team-single-title">CEO at Company</p>
      </div>
      <div className="team-single-social">
        <img src={TeamSingleInstagram} alt="Instagram" className="team-social-icon" />
        <img src={TeamSingleFacebook} alt="Facebook" className="team-social-icon" />
        <img src={TeamSingleTwitter} alt="Twitter" className="team-social-icon" />
        <img src={TeamSingleLinkedin} alt="LinkedIn" className="team-social-icon" />
      </div>
    </div>


    <div className="team-single-description">
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit sed do.
      </p>
    </div>

    <div className="team-single-experience">
      <h2 className="experience-title">Past experience</h2>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit sed do. 
        <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  </div>
</div>

<div className="newsletter">
  <div className="newsletter-section">
    <div className="newsletter-left">
      <h2>Subscribe Our Newsletter</h2>
      <p>Build stronger Customer Relationships with <span>Consultalk</span></p>
    </div>
    <div className="newsletter-right">
      <input type="text" placeholder="your mail address" />
      <button>Subscribe</button>
    </div>
  </div>
</div>


    </div>
  );
}

export default TeamSingle;
