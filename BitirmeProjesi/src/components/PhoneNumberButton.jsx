import React from 'react';
import PropTypes from 'prop-types';
import "../assets/styles/PhoneNumberButton.css";

const PhoneNumberButton = ({ icon, number, onClick, phoneButtonBackgroundColor = "#fff", textColor = "#181818" }) => {
  return (
    <button
      className="phone-number-button"
      onClick={onClick}
      style={{
        phoneButtonBackgroundColor: phoneButtonBackgroundColor,
        color: textColor,
      }}
    >
      <div className="phone-icon">{icon}</div>
      <span className="phone-number" style={{ color: textColor }}>
        {number}
      </span>
    </button>
  );
};

PhoneNumberButton.propTypes = {
  icon: PropTypes.node.isRequired, 
  number: PropTypes.string.isRequired, 
  onClick: PropTypes.func, 
  phoneButtonBackgroundColor: PropTypes.string, 
  textColor: PropTypes.string, 
};

export default PhoneNumberButton;
