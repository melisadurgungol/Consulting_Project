import React from "react";
import TopPanel from "../components/TopPanel";
import PageHeader from "../components/PageHeader";
import Banner from "../components/Banner";
import teamBanner from "../assets/images/team-banner.png"


function Team() {
  return (
    <div>
    <TopPanel/>
    <PageHeader/>
    <Banner
          title="TEAM"
          subtitle="The Consultors"
          image={teamBanner}
          height="487px"
          contentwidth="443px"
          contentleft="322px"
          contentheight="199px"
          bannertitlewidth="82px"
        />
    </div>
  );
}

export default Team; 