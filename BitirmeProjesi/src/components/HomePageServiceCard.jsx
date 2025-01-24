import React from "react";
import "../assets/styles/HomePageServiceCard.css"; 
import MoreButton from "../components/MoreButton";

const HomePageServiceCard = ({
  imageSrc, 
  imageAlt = "Service Image", 
  title = "Audit & Evaluation", 
  description = "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.", // Açıklama
  buttonBgColor, 
  buttonTextColor, 
  buttonText = "Learn More", 
  onClick, 
}) => {
  return (
    <div className="homepage-service-card">
      <div className="image-container">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="text-container">
        <h2>{title}</h2>
        <p>{description}</p>
        <MoreButton
          text={buttonText}
          backgroundColor={buttonBgColor}
          textColor={buttonTextColor}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default HomePageServiceCard;
