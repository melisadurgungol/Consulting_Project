import React from "react";
import TopPanel from "../components/TopPanel";
import PageHeader from "../components/PageHeader";
import Banner from "../components/Banner";
import licensesBanner from "../assets/images/licenses-banner.png"

function Licenses() {
  return (
    <div>
    <TopPanel/>
    <PageHeader/>
    <Banner
          title="LİCENSES"
          subtitle="All asset's Licenses"
          image={licensesBanner}
          height="536px"
          contentwidth="521px"
          contentheight="199px"
          contentleft="360px"
    />
    </div>
  );
}

export default Licenses; 
