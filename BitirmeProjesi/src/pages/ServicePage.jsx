import React from "react";
import TopPanel from "../components/TopPanel";
import HeaderPanel from "../components/HeaderPanel";
import Banner from "../components/Banner";
import servicesBanner from "../assets/images/services-banner.png"
import Services from "../components/Services";
import ServicesIcon1 from "../assets/images/services-icon1.png";
import ServicesIcon2 from "../assets/images/services-icon2.png";
import ServicesIcon3 from "../assets/images/services-icon3.png";
import ServicesIcon4 from "../assets/images/services-icon4.png";
import ServicesIcon5 from "../assets/images/services-icon5.png";
import ServicesIcon6 from "../assets/images/services-icon6.png";

function ServicePage(){
  const serviceList = [
    {
      title:"Audit & Evaluation",
      description:"Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
      variant:"#ebebeb",
      icon: ServicesIcon1
    },
    {
      title:"Financial Projections",
      description:"Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
      variant:"#ebebeb",
      icon: ServicesIcon2
    },
    {
      title:"Funds and investments",
      description:"Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
      variant:"#ebebeb",
      icon: ServicesIcon3
    },
    {
      title:"Finance & Restructuring",
      description:"Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
      variant:"#ebebeb",
      icon: ServicesIcon4
    },
    {
      title:"Taxes & Efficiency",
      description:"Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
      variant:"#ebebeb",
      icon: ServicesIcon5
    },
    {
      title:"Investment banking",
      description:"Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
      variant:"#ebebeb",
      icon: ServicesIcon6
    }
  ];
    return (
        <div>
        <TopPanel/>
        <HeaderPanel/>
        <Banner
          title="SERVİCES"
          subtitle="Creative Services For Boost Your Business Growth"
          image={servicesBanner}
          height="620px"
    />
    <Services
          headerText="Get Control Over Your Business I take your finance to next level"
          contentTitle="Services"
          serviceList={serviceList}
        />
        </div>
      );
}

export default ServicePage;