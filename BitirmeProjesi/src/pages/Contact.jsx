import React from "react";
import TopPanel from "../components/TopPanel";
import HeaderPanel from "../components/HeaderPanel";
import Banner from "../components/Banner";
import contactBanner from "../assets/images/contact-banner.png"

function Contact(){
    return (
        <div>
        <TopPanel/>
        <HeaderPanel/>
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