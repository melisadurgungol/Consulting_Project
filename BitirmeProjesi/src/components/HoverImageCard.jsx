import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/HoverImageCard.css";

const HoverImageCard = ({ image, title, subtitle, overlayColor, hoverTextColor, icon }) => {
  return (
    <div className="hover-image-card">
      { }
      <div
        className="hover-image-card-overlay"
        style={{
          backgroundColor: overlayColor || "rgba(0, 0, 0, 0.7)",
        }}
      >
        { }
        {icon && (
          <div className="hover-image-card-icon">
            <img src={icon} alt="icon" />
          </div>
        )}
        { }
        <div
          className="hover-image-card-text"
          style={{
            color: hoverTextColor || "#ffffff",
          }}
        >
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      { }
      <img src={image} alt={title} className="hover-image-card-image" />
    </div>
  );
};

HoverImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired, 
  subtitle: PropTypes.string,
  overlayColor: PropTypes.string, 
  hoverTextColor: PropTypes.string, 
  icon: PropTypes.string, 
};

export default HoverImageCard;
