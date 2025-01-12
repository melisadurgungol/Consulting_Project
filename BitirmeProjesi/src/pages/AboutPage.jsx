import React from "react";
import TopPanel from "../components/TopPanel";
import HeaderPanel from "../components/HeaderPanel";
import "../assets/styles/AboutPage.css";
import About from "../components/About";
import OurVisionDot from "../assets/images/aboutus-dot-image.png";
import OurVisionPeople from "../assets/images/ourvision-people-image.png";
import OurVisionOk from "../assets/images/ourvision-ok.png";
import OurVisionOk2 from "../assets/images/ourvision-ok2.png";
import Title from "../components/Title";

function AboutPage() {

  const stats = [
    {
      
    },
    {
      
    }
  ]

  const styles={
    aboutContainerStyle:{width:"1272px", height:"410px", top:"0", left:"0", marginLeft:"360px", marginTop:"95.27px"},
    aboutLeftStyle: {width:"590px", height:"271px", gap:"19px", position:"relative",top:"0"},
    aboutSectionTitleStyle:{width:"135px", height:"24px", backgroundColor:"#4eaf4e", borderRadius:"20px",top:"0", position:"absolute"},
    aboutDescriptionStyle:{width: "524px",height: "52px", top:"0", marginTop:"115px", fontWeight:"400", fontSize:"16px", lineHeight:"23.6px", color:"#595566"},
    aboutTextStyle:{width:"519px", height:"38px",fontFamily:"Cabin", fontWeight:"400", fontSize:"16px", lineHeight:"18.56px", color:"#595566",
    position:"absolute", marginTop:"180px", gap:"10px", marginLeft:"30px"},
    aboutText2Style:{width:"519px", height:"38px",fontFamily:"Cabin", fontWeight:"400", fontSize:"16px", lineHeight:"18.56px", color:"#595566",
      position:"absolute", marginTop:"230px", gap:"10px", marginLeft:"30px"},
    aboutImage2:{position:"absolute", top:"0", right:"0", zIndex:1, width:"226px", height:"226px", transform:"rotate(180deg)"},
    aboutImage1:{top:"0", right:"0",marginRight:"72px", position:"absolute", zIndex: 2, width:"488px", height:"366px", marginTop:"44.2px"},
    aboutStatIconStyle:{display:"block", alignItems:"center", flexDirection: "column"},
    aboutLeftStatItemStyle:{marginTop:"105px"},
    aboutMarketExperience:{width:"10px"}
    
  }

  return (
    <div>
    <TopPanel/>
    <HeaderPanel/>
    
    <div className="about-banner-section">
  {/* Arka Plan Görseli */}
  <div className="about-banner-background">
    <div className="about-banner-content">
      <Title title="SERVICES" backgroundColor="#FFCC4A" color="#181818" />
      <h2 className="about-banner-heading">
        Creative Services For Boost Your Business Growth
      </h2>
    </div>
  </div>
</div>

    <About
      sectionTitle="OUR VİSİON" 
      heading="Turn your ideas into reality."
      description="Capitalize on low hanging fruit to identify a ballpark value added activity beta test. 
      Override the digital divide with additional from DevOps."
      image1={OurVisionPeople}
      image2={OurVisionDot}
      text="Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day."
      text2="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test override the digital."
      stats={stats}
      styles={styles}
    />
    <div className="our-vision-green-box" style={{backgroundColor:"#4eaf4e", width:"113px", height:"126px", borderRadius:"20px", top:"0",
                                           marginTop:"920px", position:"absolute",left:"0", marginLeft:"1465px", transform: "rotate(90deg)" }}></div>
    <img src={OurVisionOk} alt=""  style={{marginLeft:"355px", marginTop:"-109px", position:"absolute"}}/>
    <img src={OurVisionOk2} alt="" style={{marginLeft:"355px", marginTop:"-160px", position:"absolute"}}/>
    </div>
    
  );
}

export default AboutPage; 
