import React from "react";
import TopPanel from "../components/TopPanel";
import HeaderPanel from "../components/HeaderPanel";
import "../assets/styles/LicensesPage.css";
import Title from "../components/Title";

function Licenses() {
  return (
    <div>
    <TopPanel/>
    <HeaderPanel/>
  
    <div className="licenses-banner-section">
          <div className="licenses-banner-background">
            <div className="licenses-banner-content">
              <Title title="LICENSES" backgroundColor="#FFCC4A" color="#181818" />
              <h2 className="licenses-banner-heading">
              All asset's Licenses
              </h2>
            </div>
          </div>
        </div>


        <div className="licenses-content">

  <div className="licenses-graphics-content">
    <div className="licenses-graphics-left">
      <h2>Icon & Graphics</h2>
    </div>
    <div className="licenses-graphics-right">
      <p>
        All graphical assets in this template are licensed for personal and commercial use. 
        If you'd like to use a specific asset, please check the license below.
      </p>
      <p>
        The iconography used in this Template are licensed for free personal and commercial use. 
        If you'd like to use any specific Icon, you can check the licenses and download the images for free on 
        phosphoricons.
      </p>
      <h3></h3>
    </div>
  </div>

  <div className="licenses-photography-content">
    <div className="licenses-photography-left">
      <h2>Photography</h2>
    </div>
    <div className="licenses-photography-right">
      <p>
        All images used in the PrimeChat Webflow Template are licensed for free personal and commercial use. If you'd like to
        use any specific image, you can check the licenses and download the images for free on
      </p>
      <h3></h3>
      <p>
        Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, 
        Image 14, Image 15, Image 16, Image 17, Image 18, Image 19, Image 20, Image 21, Image 22, Image 23, Image 24, Image 25
      </p>
      <h3></h3>
      <p>Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10</p>
    </div>
  </div>


  <div className="licenses-font-content">
    <div className="licenses-font-left">
      <h2>Font</h2>
    </div>
    <div className="licenses-font-right">
      <p>Consultalk template uses free licensed Google Fonts. Please check Cabin and Lato.</p>
    </div>
  </div>
</div>
  
<div className="newsletter">
  <div className="newsletter-section">
    <div className="newsletter-left">
      <h2>Subscribe Our Newsletter</h2>
      <p>Build stronger Customer Relationships with <span>Consultalk</span></p>
    </div>
    <div className="newsletter-right">
      <input type="text" placeholder="your mail address" />
      <button>Subscribe</button>
    </div>
  </div>
</div>


    </div>
  );
}

export default Licenses; 
