import React from "react";
import TopBar from "../components/TopBar";
import PageHeader from "../components/PageHeader";
import Banner from "../components/Banner";
import aboutBanner from "../assets/images/about-banner.png"

function About() {
  return (
    <div>
    <TopBar/>
    <PageHeader/>
    <Banner
      title="SERVİCES"
      subtitle="Creative Services For Boost Your Business Growth"
      image={aboutBanner}
      height="620px"
    />
    </div>
  );
}

export default About; 
