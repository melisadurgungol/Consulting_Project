import React from "react";
import TopPanel from "../components/TopPanel";
import HeaderPanel from "../components/HeaderPanel";
import "../assets/styles/CaseStudiesPage.css";
import Title from "../components/Title";



function CaseStudies(){
    return (
      <div>
        <TopPanel/>
        <HeaderPanel/>

        <div className="case-study-banner-section">
          <div className="case-study-banner-background">
            <div className="case-study-banner-content">
              <Title title="CASE STUDIES" backgroundColor="#FFCC4A" color="#181818" />
              <h2 className="case-study-banner-heading">
                Case Studies
              </h2>
            </div>
          </div>
        </div>
        
      </div>
      );
}

export default CaseStudies;