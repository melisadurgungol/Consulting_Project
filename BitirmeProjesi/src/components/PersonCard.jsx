import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/PersonCard.css";
import PersonInstagramIcon from "../assets/images/person-instagram-icon.png";
import PersonTwitterIcon from "../assets/images/person-twitter-icon.png";
import PersonFacebookIcon from "../assets/images/person-facebook-icon.png";

const PersonCard = ({ image, name, title, description, socialLinks }) => {
  return (
    <div className="person-card">
      
      <div className="person-card-image">
        <img src={image} alt={`${name}'s Profile`} />
        <div className="person-card-title-badge">{title}</div>
      </div>

     
      <div className="person-card-content">
        <h2 className="person-card-name">{name}</h2>
        <p className="person-card-description">{description}</p>
      </div>

    
      <div className="person-card-social">
        {socialLinks.instagram && (
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
            <img src={PersonInstagramIcon} alt="Instagram" />
          </a>
        )}
        {socialLinks.facebook && (
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
            <img src={PersonFacebookIcon} alt="Facebook" />
          </a>
        )}
        {socialLinks.twitter && (
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
            <img src={PersonTwitterIcon} alt="Twitter" />
          </a>
        )}
      </div>
    </div>
  );
};

PersonCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  socialLinks: PropTypes.shape({
    instagram: PropTypes.string,
    facebook: PropTypes.string,
    twitter: PropTypes.string,
  }),
};

export default PersonCard;
