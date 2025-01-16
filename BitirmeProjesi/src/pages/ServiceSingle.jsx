import React, { useState } from "react";
import TopPanel from "../components/TopPanel";
import HeaderPanel from "../components/HeaderPanel";
import Title from "../components/Title";
import InfoCard from "../components/InfoCard";
import "../assets/styles/ServiceSingle.css";
import FinancialProjectionIcon from "../assets/images/financial-projection-icon.png";
import BalanceSheetIcon from "../assets/images/balance-sheet-icon.png";
import FinancialPlan from "../assets/images/financial-plan-icon.png";
import IncomeStatementIcon from "../assets/images/income-statement-icon.png";
import FinancialRatios from "../assets/images/financial-ratios.png";
import OurVisionOk from "../assets/images/ourvision-ok.png";
import ServiceSingleWorkWithYou from "../assets/images/servicessingle-workwithyou-image.png";
import Client1 from "../assets/images/client1.png";
import Client2 from "../assets/images/client2.png";
import Client3 from "../assets/images/client3.png";
import Client4 from "../assets/images/client4.png";
import Client5 from "../assets/images/client5.png";
import Client6 from "../assets/images/client6.png";
import ServiceSingleOurHistory from "../assets/images/servicesingle-ourhistory.png";
import ContactPhoneIcon from "../assets/images/contact-phone-icon.png";
import ContactWatchIcon from "../assets/images/contact-watch-icon.png";
import ContactLocationIcon from "../assets/images/contact-location-icon.png";
import ServiceSingleContactUsImage from "../assets/images/servicesingle-contactus-image.png";

function ServiceSingle() {

  const handleClick = () => {
    alert("Buton Tıklandı!");
};

const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
 
  const cards = [
    {
      title: "The Balance Sheet",
      description:
        "The Balance Sheet is a summary of the assets and liabilities and equity of a business at a specific point of time.",
      icon: BalanceSheetIcon, 
      backgroundColor: "#ebebeb",
      textColor: "#181818",
      width: "320px",
    },
    {
      title: "Income Statement",
      description:
        "The Income (Profit and Loss) Statement summarizes the revenue and expenses for a specific time period (one month, one quarter, one year, etc.).",
      icon: IncomeStatementIcon,
      backgroundColor: "#181818",
      textColor: "#ffffff",
      width: "320px",
      descriptionColor:"#ffffff",
      titleColor:"#ffffff"
    },
    {
      title: "Financial Plan",
      description:
        "Keep your information current and review the documents on a regular basis (monthly or more often if needed).",
      icon: FinancialPlan,
      backgroundColor: "#ebebeb",
      textColor: "#181818",
      width: "320px",
    },
    {
      title: "Financial Ratios",
      description:
        "Ratios are useful when comparing your company with the competition on financial performance and benchmarking the performance of your company.",
      icon: FinancialRatios,
      backgroundColor: "#ebebeb",
      textColor: "#181818",
      width: "320px",
    },
  ];

  return (
    <div>
      <TopPanel/>
      <HeaderPanel/>

      <div className="service-single-banner-section">
  <div className="service-single-banner-background">
    <div className="service-single-banner-content">
      <Title title="SERVICE SINGLE" backgroundColor="#FFCC4A" color="#181818" />
      <h2 className="service-single-banner-heading">
        Services Details
      </h2>
    </div>
  </div>
</div>

      <div className="financial-projections-container">
      <div className="financial-projections-container2" >
        {}
        <div className="financial-projections-header">
          <div className="header-icon">
            <img src={FinancialProjectionIcon} alt="Services Icon" />
          </div>
          <h1>Financial Projections</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
          ut aliquip ex ea commodo consequat.
          </p>
          <div className="financial-projections-navigation">
          <button className="nav-button prev"><i className="fa-solid fa-left-long" style={{color:"#ffffff", fontSize:"30px"}}></i></button>
      <button className="nav-button next"><i className="fa-solid fa-right-long" style={{color:"#000000", fontSize:"30px"}}></i></button>
        </div>
        </div>

        {}
        <div className="financial-projections-cards">
          {cards.map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon} 
              backgroundColor={card.backgroundColor}
              textColor={card.textColor}
              width={card.width}
              descriptionColor={card.descriptionColor}
              titleColor={card.titleColor}
            />
          ))}
        </div>
        
      </div>
      </div>

      <div className="work-with-you-content">

  <div className="work-with-you-right">
    <img src={ServiceSingleWorkWithYou} alt="Our Vision Illustration" />
  </div>

  <div className="work-with-you-left">
    <Title title="WE'LL WORK WITH YOU" backgroundColor="#ffcc4a" color="#000" />
    <h2>What To Expect</h2>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
    aliquip ex ea commodo consequat.
    </p>
    <div className="with-you-points">
      <div className="with-you-point">
        <img src={OurVisionOk} alt="Check Icon" />
        <p>
          Bring to the table win-win survival strategies to ensure proactive domination.
          At the end of the day.
        </p>
      </div>
      <div className="with-you-point">
        <img src={OurVisionOk} alt="Check Icon" />
        <p>
          Capitalize on low hanging fruit to identify a ballpark value added activity to
          beta test override the digital.
        </p>
      </div>
    </div>
  </div>

</div>

<div className="client">
  <div>
    <img src={Client1} alt="Client 1" />
  </div>
  <div>
    <img src={Client2} alt="Client 2" />
  </div>
  <div>
    <img src={Client3} alt="Client 3" />
  </div>
  <div>
    <img src={Client4} alt="Client 4" />
  </div>
  <div>
    <img src={Client5} alt="Client 5" />
  </div>
  <div>
    <img src={Client6} alt="Client 6" />
  </div>
</div>


<div className="ss-our-history-section">
 
 <div className="ss-history-header">
   <Title
     title="OUR HISTORY"
     backgroundColor="#4eaf4e"
     color="#fff"
   />
   <h2>Strategy for Every Stage in the Client's Journey</h2>
 </div>


 <div className="ss-history-video-container">
   <div className="ss-history-video-wrapper">
     <img src={ServiceSingleOurHistory} alt="Our History Video" className="history-video" />
   </div>
 </div>
</div>

<div className="ss-contact-section">
        <div className="ss-contact-left">
        <Title title="PROCCESS" backgroundColor="#FFCC4A" color="#181818" />
          <h2>Contact Us. It’s Easy.</h2>
          <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to
          corporate strategy foster collaborative.</p>
          <div className="ss-contact-info">
          <div className="ss-info-item">
            <img src={ContactPhoneIcon} alt="" />
            <div className="info-text">
            <span>Call Today</span>
            <span>+1 800 100 900</span>
            </div>
          </div>
          <div className="ss-info-item">
            <img src={ContactWatchIcon} alt="" />
            <div className="info-text"> 
            <span>Monday To Friday</span>
            <span>9AM - 5PM</span>
            </div>
          </div>
          <div className="ss-info-item">
            <img src={ContactLocationIcon} alt="" />
            <div className="info-text">
            <span>USA Office</span>
            <span>195 Devonshire St Boston, MA 02110</span>
            </div>
          </div>
          </div>
        </div>
        <div className="ss-contact-right">
          <img src={ServiceSingleContactUsImage} alt="" />
        </div>

    </div>
    <div className="faq-section">
      <div className="faq-header">
        <Title title="FAQ" backgroundColor="#4eaf4e" color="#fff" />
        <h2>Customer Questions</h2>
      </div>
      <div className="faq-list">
        <div className={`faq-item ${activeIndex === 0 ? "open" : ""}`}>
          <div className="faq-question" onClick={() => toggleFAQ(0)}>
            <span>What will happen when I've sent my application?</span>
            <span className="faq-toggle">{activeIndex === 0 ? "−" : "+"}</span>
          </div>
          {activeIndex === 0 && (
            <div className="faq-answer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est accusamus quod mollitia tenetur inventore. 
              Iure ab, iste voluptatum, soluta nesciunt rerum provident incidunt excepturi repudiandae quo enim 
              reiciendis eius sapiente?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus nisi, quas ducimus nihil dolor.
            </div>
          )}
        </div>
        <div className={`faq-item ${activeIndex === 1 ? "open" : ""}`}>
          <div className="faq-question" onClick={() => toggleFAQ(1)}>
            <span>Can I get a free trial before I purchase?</span>
            <span className="faq-toggle">{activeIndex === 1 ? "−" : "+"}</span>
          </div>
          {activeIndex === 1 && (
            <div className="faq-answer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est accusamus quod mollitia tenetur inventore. 
              Iure ab, iste voluptatum, soluta nesciunt rerum provident incidunt excepturi repudiandae quo enim 
              reiciendis eius sapiente?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus nisi, quas ducimus nihil dolor.
            </div>
          )}
        </div>
        <div className={`faq-item ${activeIndex === 2 ? "open" : ""}`}>
          <div className="faq-question" onClick={() => toggleFAQ(2)}>
            <span>What should I include in my personal statement?</span>
            <span className="faq-toggle">{activeIndex === 2 ? "−" : "+"}</span>
          </div>
          {activeIndex === 2 && (
            <div className="faq-answer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est accusamus quod mollitia tenetur inventore. 
              Iure ab, iste voluptatum, soluta nesciunt rerum provident incidunt excepturi repudiandae quo enim 
              reiciendis eius sapiente?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus nisi, quas ducimus nihil dolor.
            </div>
          )}
        </div>
        <div className={`faq-item ${activeIndex === 3 ? "open" : ""}`}>
          <div className="faq-question" onClick={() => toggleFAQ(3)}>
            <span>Will membership plans be charged automatically?</span>
            <span className="faq-toggle">{activeIndex === 3 ? "−" : "+"}</span>
          </div>
          {activeIndex === 3 && (
            <div className="faq-answer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est accusamus quod mollitia tenetur inventore. 
              Iure ab, iste voluptatum, soluta nesciunt rerum provident incidunt excepturi repudiandae quo enim 
              reiciendis eius sapiente?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus nisi, quas ducimus nihil dolor.
            </div>
          )}
        </div>
      </div>
    </div>
      
    </div>
  );
}

export default ServiceSingle;
