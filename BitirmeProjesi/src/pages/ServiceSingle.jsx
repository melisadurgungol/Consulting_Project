import React from "react";
import TopPanel from "../components/TopPanel";
import HeaderPanel from "../components/HeaderPanel";
import Banner from "../components/Banner";
import serviceSingleBanner from "../assets/images/servicesingle-banner.png";
import InfoCard from "../components/InfoCard";
import "../assets/styles/ServiceSingle.css";
import ServicesIcon1 from "../assets/images/services-icon1.png"; // Resim dosyası (string) olarak import
import FinancialProjectionIcon from "../assets/images/financial-projection-icon.png";
import BalanceSheetIcon from "../assets/images/balance-sheet-icon.png";
import FinancialPlan from "../assets/images/financial-plan-icon.png";
import IncomeStatementIcon from "../assets/images/income-statement-icon.png";
import FinancialRatios from "../assets/images/financial-ratios.png";

function ServiceSingle() {
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
      descriptionColor:"#ffffff"
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
      <Banner
        title="SERVICESINGLE"
        subtitle="Services Details"
        image={serviceSingleBanner}
        height="620px"
        bannertitlewidth="180px"
      />
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
              icon={card.icon} // Burada icon JSX olarak tanımlandı
              backgroundColor={card.backgroundColor}
              textColor={card.textColor}
              width={card.width}
              descriptionColor={card.descriptionColor}
            />
          ))}
        </div>
        
      </div>
  
      </div>
      
    </div>
  );
}

export default ServiceSingle;
