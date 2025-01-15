import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/Title.css";

const Title = ({ title, backgroundColor, color  }) => {
  return (
    <div
      className="custom-box"
      style={{ backgroundColor, color }}
    >
      <span className="custom-box-title">{title}</span>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired, 
  backgroundColor: PropTypes.string, 
  color: PropTypes.string, 
};

export default Title;

