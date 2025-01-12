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

    </div>
  );
}

export default Licenses; 
