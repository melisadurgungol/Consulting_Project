import "../assets/styles/next.css";
import PropTypes from "prop-types";

function NextButton({ icon, text = "Next", onClick }) {
    return (
      <button className="next-button" onClick={onClick}>
        <span className="next-button-text">{text}</span>
        <div className="next-button-icon">{icon}</div>
        
      </button>
    );
  }
  
  NextButton.propTypes = {
    icon: PropTypes.node.isRequired,
    text: PropTypes.string, 
    onClick: PropTypes.func,
  };
  
  export default NextButton;