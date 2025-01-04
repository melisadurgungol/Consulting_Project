import React from "react";
import bookameeting from "../assets/images/bookameeting.png"

function CustomIcon() {
    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            {}
            <div
                style={{
                    width: "43.54px",
                    height: "48px",
                    backgroundColor: "transparent",
                    borderRadius: "50%",
                    
                    
                    
                    // display: "flex",
                    // alignItems: "center",
                    // justifyContent: "center",
                    
                }}
            >
                <img src={bookameeting} alt="" />
            </div>
        </div>
    );
}

export default CustomIcon;
