import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/MoreButton.css";

const MoreButton = ({ text, backgroundColor, textColor, onClick, border }) => {
  return (
    <button
      className="more-button"
      style={{
        backgroundColor: backgroundColor || "#000",
        color: textColor || "#fff",
        border: border || "none"
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};


MoreButton.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
  border: PropTypes.string,
};

export default MoreButton;
