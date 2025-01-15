import React from "react";
import "../assets/styles/PricingCard.css";
import Title from "../components/Title";
import Ok from "../assets/images/pricing-card-icon.png";
import background from "../assets/images/pricing-background.png";

const PricingCard = ({ planName, description, price, features, buttonText }) => {
  return (
    <div className="pricing-card">
      <div className="pricing-card-header" >
        <div className="pricing-card-plan">
          <h2>{planName}</h2>
          <p>{description}</p>
        </div>
        <div className="pricing-card-price">
          <h2>${price}</h2>
          <Title title="MONTHLY" backgroundColor="#3a3a3a" color="#fff" />
        </div>
      </div>
      <div className="pricing-card-features">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <img src={Ok} alt="Feature Icon" />
            <p>{feature}</p>
          </div>
        ))}
      </div>
      <div className="pricing-card-footer">
        <button className="pricing-card-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default PricingCard;
