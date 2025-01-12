import React from "react";
import TopPanel from "../components/TopPanel";
import HeaderPanel from "../components/HeaderPanel";
import "../assets/styles/CaseStudySinglePage.css";
import Title from "../components/Title";


function CaseStudySingle(){
    return (
        <div>
        <TopPanel/>
        <HeaderPanel/>

        <div className="case-study-single-banner-section">
          <div className="case-study-single-banner-background">
            <div className="case-study-single-banner-content">
              <Title title="CASE STUDIES SINGLE" backgroundColor="#FFCC4A" color="#181818" />
              <h2 className="case-study-single-banner-heading">
                Taxes & Efficiency
              </h2>
            </div>
          </div>
        </div>


        </div>
      );
}
export default CaseStudySingle;