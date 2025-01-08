import React from "react";
import CustomIcon from "./CustomIcon";
import "../assets/styles/Button.css";

function Button({
    text = "Button",
    onClick,
    styleClass = "default-button",
    color = "#fff",
    backgroundColor = "#353535",
    size = "medium",
    withIcon = false, 
    iconSrc,
    border,
    iconSize
}) {
    return (
        <button
            className={`${styleClass} ${size}`}
            onClick={onClick}
            style={{
                color: color,
                backgroundColor: backgroundColor,
                border: border
            }}
        >
            <div className="button-content">
                {withIcon && <CustomIcon iconSrc={iconSrc} iconSize={iconSize} />}
                <span className="button-text">{text}</span>
            </div>
        </button>
    );
}

export default Button;
