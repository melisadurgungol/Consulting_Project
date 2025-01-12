import React from "react";
import TopPanel from "../components/TopPanel";
import "../assets/styles/TeamPage.css";
import HeaderPanel from "../components/HeaderPanel";
import Title from "../components/Title";



function Team() {
  return (
    <div>
    <TopPanel/>
    <HeaderPanel/>

    <div className="team-banner-section">
  <div className="team-banner-background">
    <div className="team-banner-content">
      <Title title="TEAM" backgroundColor="#FFCC4A" color="#181818" />
      <h2 className="team-banner-heading">
       The Consultors
      </h2>
    </div>
  </div>
</div>
  
    </div>
  );
}

export default Team; 