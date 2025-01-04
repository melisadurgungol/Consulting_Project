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
    withIcon = false, // İkonlu buton seçeneği
}) {
    return (
        <button
            className={`${styleClass} ${size}`}
            onClick={onClick}
            style={{
                color: color,
                backgroundColor: backgroundColor,
            }}
        >
            {}
            <div className="button-content">
                {withIcon && <CustomIcon />}
                <span className="button-text">{text}</span>
            </div>
        </button>
    );
}

export default Button;
