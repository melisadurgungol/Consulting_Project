import React from "react";
import "../assets/styles/WhoWeAreCard.css";
import MoreButton from "../components/MoreButton";

const WhoWeAreCard = ({
  backgroundImage,
  title,
  description,
  descriptionColor,
  buttonText,
  buttonBgColor,
  buttonTextColor,
  titleColor,
  onClick,
}) => {
  return (
    <div
      className="who-we-are-card"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        descriptionColor: descriptionColor,
        titleColor: titleColor

      }}
    >
      <div className="content">
        <h2 style={{ color: titleColor }}>{title}</h2>
        <p style={{ color: descriptionColor }}>{description}</p>
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

export default WhoWeAreCard;
