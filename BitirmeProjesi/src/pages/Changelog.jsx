import React from "react";
import TopPanel from "../components/TopPanel";
import HeaderPanel from "../components/HeaderPanel";
import "../assets/styles/ChangeLogPage.css";
import Title from "../components/Title";

function Changelog(){
    return (
        <div>
        <TopPanel/>
        <HeaderPanel/>
        

        <div className="change-log-banner-section">
          <div className="change-log-banner-background">
            <div className="change-log-banner-content">
              <Title title="UPDATES" backgroundColor="#FFCC4A" color="#181818" />
              <h2 className="change-log-banner-heading">
              Changelog
              </h2>
            </div>
          </div>
        </div>


        </div>
      );
}
export default Changelog;