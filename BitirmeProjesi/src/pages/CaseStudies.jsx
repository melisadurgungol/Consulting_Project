import React from "react";
import TopPanel from "../components/TopPanel";
import HeaderPanel from "../components/HeaderPanel";
import "../assets/styles/CaseStudiesPage.css";
import Title from "../components/Title";
import HoverImageCard from "../components/HoverImageCard";
import HoverImageCardOne from "../assets/images/hover-img-card-one.png";
import HoverImageCardTwo from "../assets/images/hover-img-card-two.png";
import HoverImageCardThree from "../assets/images/hover-img-card-three.png";
import HoverImageCardFour from "../assets/images/hover-img-card-four.png";
import HoverImageCardFive from "../assets/images/hover-img-card-five.png";
import HoverImageCardSix from "../assets/images/hover-img-card-six.png";
import HoverImageCardPlus from "../assets/images/hover-img-card-plus.png";
import ContactPhoneIcon from "../assets/images/contact-phone-icon.png";
import ContactWatchIcon from "../assets/images/contact-watch-icon.png";
import ContactLocationIcon from "../assets/images/contact-location-icon.png";
import MoreButton from "../components/MoreButton";



function CaseStudies(){

    const handleClick = () => {
    alert("Buton Tıklandı!");
};
 
  
  const hoverCards = [
    {
      image: HoverImageCardOne,
      title: "Taxes & Efficiency",
      subtitle: "Business",
      overlayColor: "rgba(0, 0, 0, 0.7)",
      hoverTextColor: "#ffcc00",
      icon: HoverImageCardPlus,
    },
    {
      image: HoverImageCardTwo,
      title: "Financial Planning",
      subtitle: "Business",
      overlayColor: "rgba(0, 0, 0, 0.7)",
      hoverTextColor: "#ffcc00",
      icon: HoverImageCardPlus,
    },
    {    
      image: HoverImageCardThree,
      title: "Taxes & Efficiency",
      subtitle: "Business",
      overlayColor: "rgba(0, 0, 0, 0.7)",
      hoverTextColor: "#ffcc00",
      icon: HoverImageCardPlus,
    },
    {
      image: HoverImageCardFour,
      title: "Financial Planning",
      subtitle: "Business",
      overlayColor: "rgba(0, 0, 0, 0.7)",
      hoverTextColor: "#ffcc00",
      icon: HoverImageCardPlus,
    },
    {    
      image: HoverImageCardFive,
      title: "Taxes & Efficiency",
      subtitle: "Business",
      overlayColor: "rgba(0, 0, 0, 0.7)",
      hoverTextColor: "#ffcc00",
      icon: HoverImageCardPlus,
    },
    {
      image: HoverImageCardSix,
      title: "Financial Planning",
      subtitle: "Business",
      overlayColor: "rgba(0, 0, 0, 0.7)",
      hoverTextColor: "#ffcc00",
      icon: HoverImageCardPlus,
    }
    
  ]
    return (
      <div>
        <TopPanel/>
        <HeaderPanel/>

        <div className="case-study-banner-section">
          <div className="case-study-banner-background">
            <div className="case-study-banner-content">
              <Title title="CASE STUDIES" backgroundColor="#FFCC4A" color="#181818" />
              <h2 className="case-study-banner-heading">
                Case Studies
              </h2>
            </div>
          </div>
        </div>

        <div class="case-blog-section">
  <div class="blog-tabs">
    <p class="tab active">All</p>
    <p class="tab">Taxes & Efficiency</p>
    <p class="tab">Investment Banking</p>
    <p class="tab">Financial Plan</p>
    <p class="tab">Audit & Evaluation</p>
  </div>
  <div class="case-blog-cards">
    {hoverCards.map((hoverCard, index) => (
      <HoverImageCard
        key={index}
        image={hoverCard.image}
        title={hoverCard.title}
        subtitle={hoverCard.subtitle}
        overlayColor={hoverCard.overlayColor}
        hoverTextColor={hoverCard.hoverTextColor}
        icon={HoverImageCardPlus}
      />
    ))}
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

export default CaseStudies;