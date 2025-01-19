import React from "react";
import PropTypes from "prop-types";

function CustomIcon({ iconSrc, iconSize = "24px" }) {
    return (
        <div
            style={{
                width: iconSize,
                height: iconSize,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <img src={iconSrc} alt="icon" style={{ width: "100%", height: "100%" }} />
        </div>
    );
}

CustomIcon.propTypes = {
    iconSrc: PropTypes.string.isRequired, 
    iconSize: PropTypes.string, 
};

export default CustomIcon;
