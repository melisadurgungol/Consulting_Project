import React from "react";
import TopPanel from "../components/TopPanel";
import "../assets/styles/TeamPage.css";
import HeaderPanel from "../components/HeaderPanel";
import Title from "../components/Title";
import MoreButton from "../components/MoreButton";
import SarahJasmine from "../assets/images/sarah-jasmine.png";
import JohnCarter from "../assets/images/about-john-carter.png";
import DaisyStella from "../assets/images/daisy-stella.png";
import RyanJackson from "../assets/images/ryan-jackson.png";
import MayaElizabeth from "../assets/images/maya-elizabeth.png";
import LillyVictoria  from "../assets/images/lilly-victoria.png";
import PersonCard from "../components/PersonCard";
import TeamContactImage from "../assets/images/teampage-contact-image.png";



function Team() {

  const handleClick = () => {
    alert("Buton Tıklandı!");
};

const greatTeamData = [
  {
    image: SarahJasmine,
    name: "Sarah Jasmine",
    title: "CEO at Company",
    description: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
    socialLinks: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
  {
    image: JohnCarter,
    name: "John Carter",
    title: "Manager",
    description: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
    socialLinks: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
  {
    image: DaisyStella,
    name: "Daisy Stella",
    title: "CEO at Company",
    description: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
    socialLinks: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
  {
    image: MayaElizabeth,
    name: "Maya Elizabeth",
    title: "CEO at Company",
    description: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
    socialLinks: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
  {
    image: RyanJackson,
    name: "Ryan Jackson",
    title: "CEO at Company",
    description: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
    socialLinks: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
  {
    image: LillyVictoria,
    name: "Lilly Victoria",
    title: "CEO at Company",
    description: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
    socialLinks: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
];



  return (
    <div>
    <TopPanel/>
    <HeaderPanel/>

    <div className="team-banner-section">
  <div className="team-banner-background">
    <div className="team-banner-content">
      <Title title="TEAM" backgroundColor="#FFCC4A" color="#181818" />
      <h2 className="team-banner-heading">
       The Consultors
      </h2>
    </div>
  </div>
</div>


<div className="great-team-section">
  <div className="great-team-header">
    <div className="great-team-title">
      <h2>Meet Our Great Team</h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
       ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.
      </p>
    </div>
    <div className="great-team-button">
      <MoreButton
        text="Join out team"
        backgroundColor="#181818"
        textColor="#fff"
        onClick={handleClick}
      />
    </div>
  </div>
  <div className="great-team-container">
        {greatTeamData.map((member, index) => (
          <PersonCard
            key={index}
            image={member.image}
            name={member.name}
            title={member.title}
            description={member.description}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>
</div>

<div className="contact-section">
  <div className="contact-left">
    <Title title="CONTACT" backgroundColor="#323232" color="#fff" />
    <h2>Ready To Talk?</h2>
    <p>
      Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. 
      Pellentesque pellentesque habitant morbi tristique.
    </p>
    <div className="contact-form">
      <input type="text" placeholder="your mail address" className="contact-input" />
      <button className="contact-button">Send Message</button>
    </div>
  </div>
  <div className="contact-right">
    <img src={TeamContactImage} alt="Contact Team" className="contact-image" />
  </div>
</div>


</div>
  
  );
}

export default Team; 