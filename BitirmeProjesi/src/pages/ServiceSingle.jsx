import React from "react";
import TopBar from "../components/TopBar";
import PageHeader from "../components/PageHeader";
import Banner from "../components/Banner";
import serviceSingleBanner from "../assets/images/servicesingle-banner.png"


function ServiceSingle(){
    return (
        <div>
        <TopBar/>
        <PageHeader/>
        <Banner
      title="SERVICE SINGLE"
      subtitle="Services Details"
      image={serviceSingleBanner}
      height="620px"
    />
        </div>
      );
}
export default ServiceSingle;