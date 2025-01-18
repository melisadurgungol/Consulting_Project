import React from "react";
import "../assets/styles/NotFound.css";
import TopPanel from "../components/TopPanel";
import HeaderPanel from "../components/HeaderPanel";
import DotImage from "../assets/images/404-dot-img.png";

function NotFound404(){
    return (
        <div>
        <TopPanel/>
        <HeaderPanel/>


        <div class="not-found-section">
  <div class="not-found-background">
    <img src={DotImage} alt="Dot Pattern" class="dot-pattern" />
  </div>
  <div class="not-found-content">
    <h2 class="not-found-code">404</h2>
    <h3 class="not-found-title">Page Not Found</h3>
    <p class="not-found-description">
      This Page Doesn't or was removed! We suggest you back to home
    </p>
    <button class="not-found-button">Back to home</button>
  </div>
  <div class="not-found-shape"></div>
</div>




        </div>
      );
}
export default NotFound404;