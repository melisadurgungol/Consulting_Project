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
import Services from "../components/Services";
import ServicesIcon1 from "../assets/images/services-icon1.png";
import ServicesIcon2 from "../assets/images/services-icon2.png";
import ServicesIcon3 from "../assets/images/services-icon3.png";
import ServicesIcon4 from "../assets/images/services-icon4.png";
import ServicesIcon5 from "../assets/images/services-icon5.png";
import ServicesIcon6 from "../assets/images/services-icon6.png";
import Title from "../components/Title";
import NumberOne from "../assets/images/process-number-one.png";
import NumberTwo from "../assets/images/process-number-two.png";
import NumberThree from "../assets/images/process-number-three.png";
import InfoCard from "../components/InfoCard";
import ConsistencyIcon from "../assets/images/consistency.png";
import ImprovementIcon from "../assets/images/improvement.png";
import BranchingIcon from "../assets/images/branching.png";
import CompanyGrowthIcon from "../assets/images/company-growth.png";
import BookAMeeting from "../assets/images/bookameeting.png";
import HoverImageCard from "../components/HoverImageCard";
import HoverImageCardOne from "../assets/images/hover-img-card-one.png";
import HoverImageCardTwo from "../assets/images/hover-img-card-two.png";
import HoverImageCardThree from "../assets/images/hover-img-card-three.png";
import HoverImageCardFour from "../assets/images/hover-img-card-four.png";
import HoverImageCardFive from "../assets/images/hover-img-card-five.png";
import HoverImageCardSix from "../assets/images/hover-img-card-six.png";
import HoverImageCardPlus from "../assets/images/hover-img-card-plus.png";
import HoverBackground from "../assets/images/hover-background.png";
import PrevButton from "../components/Prev";
import PrevIcon from "../assets/images/prev-icon.png";
import NextButton from "../components/Next";
import NextIcon from "../assets/images/next-icon.png";
import KathleenSmith from "../assets/images/kathleen-smith.png";
import PhoneNumberButton from "../components/PhoneNumberButton";
import PhoneIcon from "../assets/images/telephone-icon.png";
import GreenBox from "../assets/images/green-box.png";
import YellowShadowBox from "../assets/images/yellow-shadow-box.png";
import GetControlBox from "../assets/images/get-control-box.png";
import GrowthAdvisorsBox from "../assets/images/growth-advisors-box.png";

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
  ];

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

  const hoverCards = [
    {
      image: HoverImageCardOne,
      title: "Taxes & Efficiency",
      subtitle: "Business",
      overlayColor: "rgba(0, 0, 0, 0.7)",
      hoverTextColor: "#ffcc00",
      icon: HoverImageCardPlus,
    },
    {
      image: HoverImageCardTwo,
      title: "Financial Planning",
      subtitle: "Business",
      overlayColor: "rgba(0, 0, 0, 0.7)",
      hoverTextColor: "#ffcc00",
      icon: HoverImageCardPlus,
    },
    {    
      image: HoverImageCardThree,
      title: "Taxes & Efficiency",
      subtitle: "Business",
      overlayColor: "rgba(0, 0, 0, 0.7)",
      hoverTextColor: "#ffcc00",
      icon: HoverImageCardPlus,
    },
    {
      image: HoverImageCardFour,
      title: "Financial Planning",
      subtitle: "Business",
      overlayColor: "rgba(0, 0, 0, 0.7)",
      hoverTextColor: "#ffcc00",
      icon: HoverImageCardPlus,
    },
    {    
      image: HoverImageCardFive,
      title: "Taxes & Efficiency",
      subtitle: "Business",
      overlayColor: "rgba(0, 0, 0, 0.7)",
      hoverTextColor: "#ffcc00",
      icon: HoverImageCardPlus,
    },
    {
      image: HoverImageCardSix,
      title: "Financial Planning",
      subtitle: "Business",
      overlayColor: "rgba(0, 0, 0, 0.7)",
      hoverTextColor: "#ffcc00",
      icon: HoverImageCardPlus,
    }
    
  ]

  const cards = [
    {
      title: "Consistencyt",
      description:
        "Podcasting operational change management workflow.",
      icon: ConsistencyIcon, 
      backgroundColor: "#fafafa",
      textColor: "#181818",
      width: "280px",
    },
    {
      title: "Improvement",
      description:
        "Podcasting operational change management workflow.",
      icon: ImprovementIcon,
      backgroundColor: "#fafafa",
      textColor: "#181818",
      width: "280px",
    },
    {
      title: "Branching",
      description:
        "Podcasting operational change management workflow.",
      icon: BranchingIcon,
      backgroundColor: "#fafafa",
      textColor: "#181818",
      width: "280px",
    },
    {
      title: "Company Growth",
      description:
        "Podcasting operational change management workflow.",
      icon: CompanyGrowthIcon,
      backgroundColor: "#fafafa",
      textColor: "#181818",
      width: "280px",
    },
  ];

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
                backgroundColor="#181818"
                withIcon={false} 
            />
                <Button
                text="Book a Meeting"
                onClick={handleClick}
                styleClass="ikonlu-button"
                backgroundColor="#fff"
                color="#353535"
                withIcon={true} 
                iconSrc={BookAMeeting}
                border="2px solid #ebebeb"
                iconSize="30px"
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

        <Services
          headerText="Get Control Over Your Business I take your finance to next level"
          contentTitle="Services"
          serviceList={serviceList}
        />
          
      <div className="process-page">
      <div className="process-page-container">
        <div className="process-section">
        <div className="process-section-title">
        <Title
        title="PROCCESS"
        backgroundColor="#4EAF4E"
        color="#ffffff"
        />
        </div>
        <h2>There have some easy steps to join with us!</h2>
        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. 
        Iterative approaches to corporate strategy foster collaborative thinking
        to further the overall value proposition.
        </p>
        <div className="steps">
          <div className="step">
            <div className="step-icon"><img src={NumberOne} alt="" /></div>
              <div>
                <h3>Setup Account</h3>
                <p>We understand the importance of approaching each work integrally.</p>
              </div>
          </div>
          <div className="step">
            <div className="step-icon"><img src={NumberTwo} alt="" /></div>
              <div>
                <h3>Consult with us</h3>
                <p>Increase social reach and productivity with our App Directory, a collection.</p>
              </div>
          </div>
          <div className="step">
            <div className="step-icon"><img src={NumberThree} alt="" /></div>
              <div>
                <h3>Payment & Boost</h3>
                <p>We encourage every team member to be a whole person. We have a flexible.</p>
              </div>
          </div>
        </div>
        </div>
        
      <div className="experience-section">
     <div className="experience-section-title">
     <Title
        title="GROWING WITH OUR CLIENTS"
        backgroundColor="#FFCC4A"
        color="#181818"
      />
     </div>
      <h2>30 Years of Experience</h2>
      <p> Capitalize on low hanging fruit to identify a ballpark
         value added activity beta test. Override the digital divide
          with additional from DevOps. </p>
      <p>Leverage agile frameworks to 
          provide a robust synopsis for high level overviews. Iterative 
          approaches to corporate strategy foster collaborative thinking 
          to further the overall value proposition..</p>
      <div className="info-cards">
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

     
      

    <div className="hover-section">
    <div className="hover-background" style={{backgroundColor:"#181818"}}><img src={HoverBackground} alt="" style={{width:"100%"}} /></div>
      <div className="hover-section-header">
        <Title
        title="PROCCESS"
        backgroundColor="#4EAF4E"
        color="#ffffff"
        />
        <h2>Our client, global analytical techno company, wanted to build market.</h2>
        <Button
        text="More Gallery"
        styleClass="more-gallery-button"
        backgroundColor="#FFCC4A"
        color="#333"
        />
      </div>
      <div>
      <div className="hover-image-cards" style={{ display: "flex", gap: "20px", padding: "20px" }}>
        {hoverCards.map((hoverCard,index) => (
          <HoverImageCard
          key={index}
          image={hoverCard.image}
          title={hoverCard.title}
          subtitle={hoverCard.subtitle}
          overlayColor={hoverCard.overlayColor}
          hoverTextColor={hoverCard.hoverTextColor}
          icon={HoverImageCardPlus}
          />
        ))}
      </div>
      </div>

   
    </div>
    <div className="home-counters">
        <div className="home-counter">
          <p>1128+</p>
          <p>Successful Work</p>
        </div>
        <div className="home-counter">
          <p>908+</p>
          <p>Team Member</p>
        </div>
        <div className="home-counter">
          <p>258+</p>
          <p>Happy Customers</p>
        </div>
        <div className="home-counter">
          <p>564+</p>
          <p>Creative Idea</p>
        </div>
      </div>

      <div className="client-feedback">
  <div className="feedback-title">
    <Title title="CLIENT FEEDBACK" backgroundColor="#4EAF4E" color="#ffffff" />
    <p className="feedback-description">
      “Lorem ipsum dolor sit amet, consectetur{" "}
      <strong style={{ color: "#181818" }}>
        adipiscing elit, sed do eiusmod
      </strong>{" "}
      tempor incididunt ut labore et dolore”
    </p>
  </div>

  <div className="feedback-content">
    <div className="feedback-buttons">
      <PrevButton
        icon={<img src={PrevIcon} alt="Prev" />}
        onClick={handleClick}
      />
    </div>

    <div className="feedback-profile">
      <img src={KathleenSmith} alt="User Profile" className="profile-image" />
      <h2>Kathleen Smith</h2>
      <p>Web Designer</p>
    </div>

    <div className="feedback-buttons">
      <NextButton
        icon={<img src={NextIcon} alt="Next" />}
        onClick={handleClick}
      />
    </div>
  </div>
  </div>


  <div className="consult-banner">
  <div className="consult-banner-left">
    <Title title="BOOK NOW" backgroundColor="#4CAF50" color="#ffffff" />
    <h2>Better Consult, <strong style={{color:"#727272"}}>Better</strong> Results</h2>
    <p>
      Our software development agency has a growth up to 30% per each year. If
      you are result-oriented, not afraid to take initiative – drop us a note
      and join our team!
    </p>
    <div className="consult-phone">
      <PhoneNumberButton
        icon={<img src={PhoneIcon} alt="Phone" />}
        number="+800 1234 654"
        onClick={handleClick}
      />
    </div>
  </div>

  <div className="consult-banner-right">
    <img src={AboutUsDot} alt="Banner 1" className="consult-image" />
    <img src={YellowShadowBox} alt="Banner 2" className="consult-image overlay-image" />
    <img src={GreenBox} alt="Banner 3" className="consult-image overlay-image" />
    <img src={GrowthAdvisorsBox} alt="Banner 4" className="consult-image overlay-image" />
    <img src={GetControlBox} alt="Banner 5" className="consult-image overlay-image" />
  </div>
</div>

    </div>


  );
}

export default HomePage;
