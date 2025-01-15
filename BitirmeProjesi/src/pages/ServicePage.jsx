import React from "react";
import TopPanel from "../components/TopPanel";
import HeaderPanel from "../components/HeaderPanel";
import "../assets/styles/ServicesPage.css";
import Title from "../components/Title";
import Services from "../components/Services";
import ServicesIcon1 from "../assets/images/services-icon1.png";
import ServicesIcon2 from "../assets/images/services-icon2.png";
import ServicesIcon3 from "../assets/images/services-icon3.png";
import ServicesIcon4 from "../assets/images/services-icon4.png";
import ServicesIcon5 from "../assets/images/services-icon5.png";
import ServicesIcon6 from "../assets/images/services-icon6.png";
import BankingFinance from "../assets/images/banking-finance.png";
import LogisticTransportation from "../assets/images/logistic-transportation.png";
import Trading from "../assets/images/trading.png";
import ProcessImage from "../assets/images/services-process-image.png";
import ContactPhoneIcon from "../assets/images/contact-phone-icon.png";
import ContactWatchIcon from "../assets/images/contact-watch-icon.png";
import ContactLocationIcon from "../assets/images/contact-location-icon.png";
import MoreButton from "../components/MoreButton";
import PricingCard from "../components/PricingCard";



function ServicePage(){

  const handleClick = () => {
    alert("Buton Tıklandı!");
};
 

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



    const plans = [
      {
        planName: "Basic Plan",
        description: "The argument in favor of using to filler text goes something.",
        price: "35",
        features: [
          "24/7 system monitoring",
          "Security management",
          "Secure finance backup",
          "Remote support"
        ],
        buttonText: "Get This Plan"
      },
      {
        planName: "Standard Plan",
        description: "The argument in favor of using to filler text goes something.",
        price: "56",
        features: [
          "24/7 system monitoring",
          "Security management",
          "Secure finance backup",
          "Remote support"
        ],
        buttonText: "Get This Plan"
      },
      {
        planName: "Premium Plan",
        description: "The argument in favor of using to filler text goes something.",
        price: "75",
        features: [
          "24/7 system monitoring",
          "Security management",
          "Secure finance backup",
          "Remote support"
        ],
        buttonText: "Get This Plan"
      }
    ];


    return (
        <div>
        <TopPanel/>
        <HeaderPanel/>


        <div className="service-banner-section">
  <div className="service-banner-background">
    <div className="service-banner-content">
      <Title title="SERVICES" backgroundColor="#FFCC4A" color="#181818" />
      <h2 className="service-banner-heading">
        Creative Services For Boost Your Business Growth
      </h2>
    </div>
  </div>
</div>


    <Services
          headerText="Get Control Over Your Business I take your finance to next level"
          contentTitle="Services"
          serviceList={serviceList}
        />


        <div className="process-container">
          <div className="process-image">
            <img src={ProcessImage} alt="Process" />
          </div>
          <div className="process-content">
            <div className="process-header">
              <Title title="PROCESS" backgroundColor="#FFCC4A" color="#181818" />
              <h2>Our Consulting Service Development</h2>
            </div>
            <div className="process-services">
              <div className="service-item">
                <div className="service-item-header">
                <img src={BankingFinance} alt="Banking and Finance" />
                <h3>Banking and Finance</h3>
                </div>
                <p>
                  Professionally fashion wireless leadership rather than prospective
                  experiences my cardinate clicks-and-mortar testing whereas.
                </p>
              </div>
              <div className="service-item">
                <div className="service-item-header">
                <img src={LogisticTransportation} alt="Logistic and Transportation" />
                <h3>Logistic and Transportation</h3>
                </div>
                <p>
                  Compellingly embrace empowered e-business after user-friendly
                  intellectual capital. Interactively actualize front-end processes.
                </p>
              </div>
              <div className="service-item">
                <div className="service-item-header">
                <img src={Trading} alt="Trading" />
                <h3>Trading</h3>
                </div>
                <p>
                  Uniquely matrix economically sound value through cooperative
                  technology parallel task fully researched data and enterprise.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pricing-section">
      <div className="pricing-header">
        <Title title="PRICING" backgroundColor="#4eaf4e" color="#fff" />
        <h2>Our Pricing Plan</h2>
      </div>
      <div className="pricing-cards-container">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            planName={plan.planName}
            description={plan.description}
            price={plan.price}
            features={plan.features}
            buttonText={plan.buttonText}
          />
        ))}
      </div>
    </div>


        <div className="contact-section">
        <div className="contact-left">
        <Title title="PROCCESS" backgroundColor="#FFCC4A" color="#181818" />
          <h2>Contact Us. It’s Easy.</h2>
          <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to
          corporate strategy foster collaborative.</p>
          <div className="contact-info">
          <div className="info-item">
            <img src={ContactPhoneIcon} alt="" />
            <div className="info-text">
            <span>Call Today</span>
            <span>+1 800 100 900</span>
            </div>
          </div>
          <div className="info-item">
            <img src={ContactWatchIcon} alt="" />
            <div className="info-text"> 
            <span>Monday To Friday</span>
            <span>9AM - 5PM</span>
            </div>
          </div>
          <div className="info-item">
            <img src={ContactLocationIcon} alt="" />
            <div className="info-text">
            <span>USA Office</span>
            <span>195 Devonshire St Boston, MA 02110</span>
            </div>
          </div>
          </div>
        </div>
        <div className="contact-right">
  <form className="contact-form">
    <div className="form-row">
      <div className="form-group">
        <label>Full Name</label>
        <input type="text" placeholder="john david" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="consult@mail.com" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group">
        <label>Phone</label>
        <input type="text" placeholder="+008 654 231" />
      </div>
      <div className="form-group">
        <label>Company (optional)</label>
        <input type="text" placeholder="yourcompany.com" />
      </div>
    </div>
    <div className="form-row">
      <label>Message</label>
      <textarea placeholder="Briefly tell us about your project and your current goals. How can we help you?"></textarea>
    </div>
    <MoreButton 
      text="Send Message"
      backgroundColor="#181818"
      textColor="#fff"
      onClick={handleClick}
    />
  </form>
</div>
    </div>


    


        </div>
      );

}

export default ServicePage;