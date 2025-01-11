import React from "react";
import TopPanel from "../components/TopPanel";
import PageHeader from "../components/PageHeader";
import Banner from "../components/Banner";
import changelogBanner from "../assets/images/changelog-banner.png"

function Changelog(){
    return (
        <div>
        <TopPanel/>
        <PageHeader/>
        <Banner
          title="UPDATES"
          subtitle="Changelog"
          image={changelogBanner}
          height="536px"
          contentwidth="521px"
          contentleft="360px"
          contentheight="199px"
          bannertitlewidth="115px"
        />
        </div>
      );
}
export default Changelog;