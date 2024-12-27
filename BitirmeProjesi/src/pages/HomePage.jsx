import React from "react";
import "../assets/styles/HomePage.css";
import TopBar from "../components/TopBar";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Client1 from "../assets/images/client1.png";
import Client2 from "../assets/images/client2.png";
import Client3 from "../assets/images/client3.png";
import Client4 from "../assets/images/client4.png";
import Client5 from "../assets/images/client5.png";
import Client6 from "../assets/images/client6.png";
import About from "../components/About";
import AboutSmile from "../assets/images/about-smile.png"
import AboutStar from "../assets/images/about-star.png"
import AboutUsPeople from "../assets/images/aboutus-people-image.png"
import AboutUsDot from "../assets/images/aboutus-dot-image.png"
import MarketExperience from "../assets/images/market-experience.png"
function HomePage() {

  const handleClick = () => {
    alert("Buton Tıklandı!");
};

  const stats = [
    {
      icon: AboutStar,
      value: "400+",
      label: "Business Services"
    },
    {
      icon: AboutSmile,
      value: "100+",
      label: "Happy Customer"
    }
  ]

  const styles = {
      aboutContainerStyle: {width:"1200px", height:"469px", marginLeft:"360px", marginTop:"126px", gap:"65px"},
      aboutLeftStyle: {width:"420px", height:"468px", gap:"55px"},
      aboutSectionTitleStyle:{width:"120px", height:"24px", backgroundColor:"#ffcc4a", borderRadius:"20px"},
      aboutDescriptionStyle:{width: "373px",height: "54px", marginTop:"180px"},
      aboutTextStyle:{width: "420px",height: "48px", marginTop:"245px"},
      aboutStatsStyle:{width:"380px", height:"96px", position:"absolute", top:"355px",alignItems:"center", display:"flex", justifyContent:"center", gap:"40px"},
      aboutLeftStatItemStyle:{width:"170px", height:"170px", height:"94px", backgroundColor:"#f6f6f6", borderRadius:"15px", display:"flex", alignItems:"center", position:"relative"},
      aboutStatIconStyle:{top:"0", left:"0", marginTop:"19.43px", left:"23px", position:"absolute"},
      aboutStatValueStyle:{height:"36px", fontFamily:"Cabin", fontWeight:"700", fontSize:"30px", lineHeight:"35px", 
                          top:"0", marginTop:"14px", left:"0", marginLeft:"57px", position:"absolute"},
      aboutStatLabelStyle:{position:"absolute", top:"0", left:"0", marginTop:"54px", marginLeft:"25px", fontFamily:"lato", 
                          fontWeight:"700", fontSize:"16px", lineHeight:"23.6px"},
      aboutImage1:{top:"0", right:"0", position:"absolute", zIndex: 2},
      aboutImage2:{position:"absolute", top:"0", left:"0", marginLeft:"485px", marginTop:"136px", zIndex:1},
      aboutImage3:{position:"absolute",top:"0", left:"0",marginLeft:"570px", marginTop:"305px",  zIndex: 4 },
      aboutMarketExperience:{backgroundColor:"#ffffff", width:"241px", height:"136px", borderRadius:"20px",position:"absolute",top:"0", left:"0",marginLeft:"546px", marginTop:"282px", zIndex: 3 },

      
  }

  return (
    <div>
        <TopBar/>
        <PageHeader/>
        <div className="home-banner">
            <div className="home-banner-content">
                <p className="home-banner-text1">Your small business growth advisors</p>
                <p className="home-banner-text2">Get help from Alex Moore, a professional business coach with <br />advanced experience on growth and business scaling.</p>
                <div className="home-banner-button-container">
                <Button
                text="Our Services"
                onClick={handleClick}
                styleClass="ikonsuz-button"
                withIcon={false} // İkonu ekliyoruz
            />
                <Button
                text="Book a Meeting"
                onClick={handleClick}
                styleClass="ikonlu-button"
                backgroundColor="#fff"
                color="#353535"
                withIcon={true} // İkonu ekliyoruz
            />
                </div>

            </div>
        </div>

        <div className="client">
          <div style={{width:"205.42px", height:"54px"}}><img src={Client1} alt="" style={{height:"40px", marginTop:"10px"}} /></div>
          <div style={{width:"94px", height:"89px"}}><img src={Client2} alt="" style={{height:"75px", marginTop:"10px"}}/></div>
          <div style={{width:"185px", height:"53px"}}><img src={Client3} alt="" style={{height:"39px", marginTop:"10px"}}/></div>
          <div style={{width:"174px", height:"53px"}}><img src={Client4} alt="" style={{height:"39px", marginTop:"10px"}}/></div>
          <div style={{width:"240px", height:"53px"}}><img src={Client5} alt="" style={{height:"39px", marginTop:"10px"}}/></div>
          <div style={{width:"246px", height:"53px"}}><img src={Client6} alt="" style={{height:"39px", marginTop:"10px"}}/></div>
        </div>

        <About
            sectionTitle="ABOUT US" 
            heading={<>About our Consulting <br /> Agency Team</>}
            description="We create experiences and build products that make business grow."
            text="Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling."
            image1={AboutUsPeople}
            image2={AboutUsDot}
            image3={MarketExperience}
            stats={stats}
            styles={styles}
        />

        <div className="abotLineTop" style={{width:"380px", height:"1px", backgroundColor:"#d8d8d8", position:"absolute", top:"0", marginTop:"1585px", marginLeft:"335px"}}></div>
        <div className="aboutLine" style={{backgroundColor:"#d8d8d8", position:"absolute", top:"0",width:"1px", height:"91px", marginTop:"1605px", marginLeft:"525px"}}></div>
        <div className="aboutLineBottom" style={{width:"380px", height:"1px", backgroundColor:"#d8d8d8", position:"absolute", top:"0", marginTop:"1713px", marginLeft:"335px"}}></div>
    </div>
  );
}

export default HomePage;
