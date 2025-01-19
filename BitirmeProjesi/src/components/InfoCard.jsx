import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/InfoCard.css";

const InfoCard = ({
  title,
  description,
  icon: Icon,
  backgroundColor,
  textColor,
  width,
  height,
  descriptionColor,
  titleColor, 
}) => {
  return (
    <div
      className="info-card"
      style={{
        backgroundColor,
        color: textColor,
        width,
        height,
      }}
    >
      <div className="info-card-icon">
        {typeof Icon === "string" ? (
          <img src={Icon} alt={title} />
        ) : (
          <Icon />
        )}
      </div>
      <div className="info-card-content">
        <h3 className="info-card-title" style={{ color: titleColor }}>
          {title}
        </h3>
        <p
          className="info-card-description"
          style={{ color: descriptionColor }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  descriptionColor: PropTypes.string,
  titleColor: PropTypes.string, 
};

InfoCard.defaultProps = {
  backgroundColor: "#f9f9f9",
  textColor: "#333",
  width: "300px",
  height: "auto",
  titleColor: "#181818", 
};

export default InfoCard;
