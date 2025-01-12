import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/BookAMeeting.css";

const BookAMeeting = ({ text, backgroundColor, textColor, onClick, border,icon}) => {
  return (
    <button
      className="book-meeting"
      style={{
        backgroundColor: backgroundColor || "#000",
        color: textColor || "#fff",
        border: border || "none"
      }}
      onClick={onClick}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {text}
    </button>
  );
};


BookAMeeting.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
  border: PropTypes.string,
  icon: PropTypes.element,
};

export default BookAMeeting;
