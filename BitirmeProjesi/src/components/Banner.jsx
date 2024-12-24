import React from "react";
import "../assets/styles/Banner.css"

function Banner({image, title, subtitle, height="487px",contentwidth, contentleft, bannertitlewidth,contentheight,contenttop}){
    return(
        <div className="banner" style={{backgroundImage: `url(${image})`, height}}>
            <div className="banner-content" style={{width: contentwidth,left: contentleft, height: contentheight, top: contenttop}}>
                <div className="banner-title" style={{width: bannertitlewidth}}><h1>{title}</h1></div>
                {subtitle && <p>{subtitle}</p>}
            </div>
        </div>
    );
}

export default Banner;