import React, { useState } from "react";
import "../assets/styles/PrinciplesInfoCard.css"; 

const PrinciplesInfoCard = ({ icon, title, shortDescription, longDescription }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`principle-info-card ${expanded ? "expanded" : ""}`}>
      <div className="principle-info-card-icon">{icon}</div>
      <h3 className="principle-info-card-title">{title}</h3>
      <p className="principle-info-card-description">
        {expanded ? longDescription : shortDescription}
      </p>
      <button className="principle-info-card-button" onClick={toggleExpand}>
        {expanded ? "Show Less" : "Read More"} →
      </button>
    </div>
  );
};

export default PrinciplesInfoCard;
