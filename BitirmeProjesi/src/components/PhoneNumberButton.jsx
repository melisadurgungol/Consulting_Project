import React from 'react';
import PropTypes from 'prop-types';
import "../assets/styles/PhoneNumberButton.css";

const PhoneNumberButton = ({ icon, number, onClick, backgroundColor = "#ffcc4a", textColor = "#181818" }) => {
  return (
    <button
      className="phone-number-button"
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
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
  icon: PropTypes.node.isRequired, // Telefon ikonu
  number: PropTypes.string.isRequired, // Telefon numarası
  onClick: PropTypes.func, // Tıklama olay fonksiyonu
  backgroundColor: PropTypes.string, // Arka plan rengi
  textColor: PropTypes.string, // Metin rengi
};

export default PhoneNumberButton;
