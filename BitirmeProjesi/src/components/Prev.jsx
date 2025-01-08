import "../assets/styles/prev.css";
import PropTypes from "prop-types";

function PrevButton({ icon, text = "Prev", onClick }) {
    return (
      <button className="prev-button" onClick={onClick}>
        <div className="prev-button-icon">{icon}</div>
        <span className="prev-button-text">{text}</span>
      </button>
    );
  }
  
  PrevButton.propTypes = {
    icon: PropTypes.node.isRequired,
    text: PropTypes.string, 
    onClick: PropTypes.func,
  };
  
  export default PrevButton;