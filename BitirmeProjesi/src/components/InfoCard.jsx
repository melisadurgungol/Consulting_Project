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
  descriptionColor
}) => {
  return (
    <div
      className="info-card"
      style={{
        backgroundColor,
        color: textColor,
        width,
        height,
        descriptionColor: descriptionColor
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
        <h3 className="info-card-title">{title}</h3>
        <p className="info-card-description" style={{color:descriptionColor}}>{description}</p>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired, // Başlık zorunlu
  description: PropTypes.string.isRequired, // Açıklama zorunlu
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]), // İkon (Element veya URL)
  backgroundColor: PropTypes.string, // Arka plan rengi
  textColor: PropTypes.string, // Yazı rengi
  width: PropTypes.string, // Genişlik (örn: "300px" veya "50%")
  height: PropTypes.string, // Yükseklik (örn: "200px")
  descriptionColor: PropTypes.string
};

InfoCard.defaultProps = {
  backgroundColor: "#f9f9f9", // Varsayılan arka plan rengi
  textColor: "#333", // Varsayılan yazı rengi
  width: "300px", // Varsayılan genişlik
  height: "auto", // Varsayılan yükseklik
};

export default InfoCard;
