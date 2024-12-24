import React from "react";
import TopBar from "../components/TopBar";
import PageHeader from "../components/PageHeader";
import Banner from "../components/Banner";
import servicesBanner from "../assets/images/services-banner.png"

function Services(){
    return (
        <div>
        <TopBar/>
        <PageHeader/>
        <Banner
          title="SERVİCES"
          subtitle="Creative Services For Boost Your Business Growth"
          image={servicesBanner}
          height="620px"
    />
        </div>
      );
}

export default Services;