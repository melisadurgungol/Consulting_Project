import React from "react";
import TopPanel from "../components/TopPanel";
import HeaderPanel from "../components/HeaderPanel";
import "../assets/styles/ContactPage.css";
import Title from "../components/Title";
import LetsTalkImage from "../assets/images/contactpage-letstalk.png";
import LetsTalkTelIcon from "../assets/images/letstalk-tel-icon.png";
import LetsTalkMailIcon from "../assets/images/letstalk-mail-icon.png";
import LetsTalkNavIcon from "../assets/images/letstalk-nav-icon.png";
import ContactPhoneIcon from "../assets/images/contact-phone-icon.png";
import ContactWatchIcon from "../assets/images/contact-watch-icon.png";
import ContactLocationIcon from "../assets/images/contact-location-icon.png";
import MoreButton from "../components/MoreButton";


function Contact(){

  const handleClick = () => {
    alert("Buton Tıklandı!");
};
 
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
        
        <div className="lets-talk-container">
    <img src={LetsTalkImage} alt="Team Collaboration" className="lets-talk-image" />
  <div className="lets-talk-content">
    <Title title="LET'S TALK" backgroundColor="#4eaf4e" color="#fff" />
    <h2 className="lets-talk-title">Get In Touch With Us</h2>
    <p className="lets-talk-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
    </p>
    <div className="lets-talk-item">
      <img src={LetsTalkTelIcon} alt="Phone Icon" className="lets-talk-icon" />
      <div>
      <p className="lets-talk-label">Have Any Question?</p>
      <p className="lets-talk-value">Free +01 238 543 987</p>
      </div>
    </div>
    <div className="lets-talk-item">
      <img src={LetsTalkMailIcon} alt="Mail Icon" className="lets-talk-icon" />
     <div>
     <p className="lets-talk-label">Write Email</p>
     <p className="lets-talk-value">Info@consultalk.com</p>
     </div>
    </div>
    <div className="lets-talk-item">
      <img src={LetsTalkNavIcon} alt="Navigation Icon" className="lets-talk-icon" />
      <div>
      <p className="lets-talk-label">Visit Anytime</p>
      <p className="lets-talk-value">King Street, Prior Lake, New York.</p>
      </div>
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



<div className="contact-section">
        <div className="contact-left">
        <Title title="PROCCESS" backgroundColor="#FFCC4A" color="#181818" />
          <h2>Contact Us. It’s Easy.</h2>
          <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to
          corporate strategy foster collaborative.</p>
          <div className="contact-info">
          <div className="info-item">
            <img src={ContactPhoneIcon} alt="" />
            <div className="info-text">
            <span>Call Today</span>
            <span>+1 800 100 900</span>
            </div>
          </div>
          <div className="info-item">
            <img src={ContactWatchIcon} alt="" />
            <div className="info-text"> 
            <span>Monday To Friday</span>
            <span>9AM - 5PM</span>
            </div>
          </div>
          <div className="info-item">
            <img src={ContactLocationIcon} alt="" />
            <div className="info-text">
            <span>USA Office</span>
            <span>195 Devonshire St Boston, MA 02110</span>
            </div>
          </div>
          </div>
        </div>
        <div className="contact-right">
  <form className="contact-form">
    <div className="form-row">
      <div className="form-group">
        <label>Full Name</label>
        <input type="text" placeholder="john david" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="consult@mail.com" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group">
        <label>Phone</label>
        <input type="text" placeholder="+008 654 231" />
      </div>
      <div className="form-group">
        <label>Company (optional)</label>
        <input type="text" placeholder="yourcompany.com" />
      </div>
    </div>
    <div className="form-row">
      <label>Message</label>
      <textarea placeholder="Briefly tell us about your project and your current goals. How can we help you?"></textarea>
    </div>
    <MoreButton 
      text="Send Message"
      backgroundColor="#181818"
      textColor="#fff"
      onClick={handleClick}
    />
  </form>
</div>

    </div>


     
        </div>
      );
}
export default Contact;