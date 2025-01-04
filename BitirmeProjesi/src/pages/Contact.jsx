import React from "react";
import TopBar from "../components/TopBar";
import PageHeader from "../components/PageHeader";
import Banner from "../components/Banner";
import contactBanner from "../assets/images/contact-banner.png"

function Contact(){
    return (
        <div>
        <TopBar/>
        <PageHeader/>
        <Banner
          title="CONTACT US"
          subtitle="Feel Free To Reach Us"
          image={contactBanner}
          height="536px"
          contentwidth="562px"
          contentleft="360px"
          contentheight="199px"
          bannertitlewidth="144px"
    />
        </div>
      );
}
export default Contact;