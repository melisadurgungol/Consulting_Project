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
import AboutpageOurvision from "../assets/images/aboutpage-ourvision.png";
import MoreButton from "../components/MoreButton";
import PrinciplesInfoCard from "../components/PrinciplesInfoCard";
import AboutBestFeatures from "../assets/images/about-best-features.png";
import AboutCreativeIdeas from "../assets/images/about-creative-ideas.png";
import AboutEasySolutions from "../assets/images/about-easy-solutions.png";
import AboutExperience from "../assets/images/about-experience.png";
import AboutOurHistory from "../assets/images/about-ourhistory.png";
import PersonCard from "../components/PersonCard";
import SarahJasmine from "../assets/images/sarah-jasmine.png";
import JohnCarter from "../assets/images/about-john-carter.png";
import DaisyStella from "../assets/images/daisy-stella.png";
import PhoneNumberButton from "../components/PhoneNumberButton";
import PhoneIcon from "../assets/images/telephone-icon.png";
import ConsultBanner from "../assets/images/consult-banner.png";


function AboutPage() {

  const handleClick = () => {
    alert("Buton Tıklandı!");
};


const principlesData = [
  {
    icon: <img src={AboutCreativeIdeas} alt="Icon" style={{ width: "24px", height: "24px" }} />,
    title: "Creative Ideas",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.Mauris eget accumsan augue. Donec aliquam sem vel felis hendrerit, non condimentum elit consectetur. Vivamus a nisi vitae enim fermentum placerat."
  },
  {
    icon: <img src={AboutBestFeatures} alt="Icon" style={{ width: "24px", height: "24px" }} />,
    title: "Best Features",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris eget accumsan augue. Donec aliquam sem vel felis hendrerit, non condimentum elit consectetur. Vivamus a nisi vitae enim fermentum placerat."
  },
  {
    icon: <img src={AboutExperience} alt="Icon" style={{ width: "24px", height: "24px" }} />,
    title: "Experience",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.Mauris eget accumsan augue. Donec aliquam sem vel felis hendrerit, non condimentum elit consectetur. Vivamus a nisi vitae enim fermentum placerat."
  },
  {
    icon: <img src={AboutEasySolutions} alt="Icon" style={{ width: "24px", height: "24px" }} />,
    title: "Easy Solutions",
    shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris eget accumsan augue. Donec aliquam sem vel felis hendrerit, non condimentum elit consectetur. Vivamus a nisi vitae enim fermentum placerat."
  }
];


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

  const teamData = [
    {
      image: SarahJasmine,
      name: "Sarah Jasmine",
      title: "CEO at Company",
      description: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
      socialLinks: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
      },
    },
    {
      image: JohnCarter,
      name: "John Carter",
      title: "Manager",
      description: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
      socialLinks: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
      },
    },
    {
      image: DaisyStella,
      name: "Daisy Stella",
      title: "CEO at Company",
      description: "Leverage agile frameworks to provide a robust synopsis for high-level overviews.",
      socialLinks: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
      },
    },
  ];

  return (
    <div>
    <TopPanel/>
    <HeaderPanel/>
    
    <div className="about-banner-section">
 
  <div className="about-banner-background">
    <div className="about-banner-content">
      <Title title="SERVICES" backgroundColor="#FFCC4A" color="#181818" />
      <h2 className="about-banner-heading">
        Creative Services For Boost Your Business Growth
      </h2>
    </div>
  </div>
</div>



<div className="our-vision">
  <div className="our-vision-left">
    <Title title="OUR VISION" backgroundColor="#4eaf4e" color="#fff" />
    <h2>Turn your ideas into reality.</h2>
    <p>
      Capitalize on low hanging fruit to identify a ballpark value added activity beta test.
      Override the digital divide with additional from DevOps.
    </p>
    <div className="vision-points">
      <div className="vision-point">
        <img src={OurVisionOk} alt="Check Icon" />
        <p>
          Bring to the table win-win survival strategies to ensure proactive domination.
          At the end of the day.
        </p>
      </div>
      <div className="vision-point">
        <img src={OurVisionOk} alt="Check Icon" />
        <p>
          Capitalize on low hanging fruit to identify a ballpark value added activity to
          beta test override the digital.
        </p>
      </div>
    </div>
  </div>

  <div className="our-vision-right">
    <img src={AboutpageOurvision} alt="Our Vision Illustration" />
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


      <div style={{width:"100%", backgroundColor:"#f5f5f5"}}>
      <div className="principles-section">
  <div className="principles-header">
    <div className="principle-title">
      <Title
        title="GROWING WITH OUR CLIENTS"
        backgroundColor="#FFCC4A"
        color="#181818"
      />
      <h2>Our core values & principles</h2>
      <p>
        Capitalize on low hanging fruit to identify a ballpark value added
        activity beta test. Override the digital divide with additional from
        DevOps.
      </p>
    </div>
    <div className="principles-button">
      <MoreButton
        text="Get in Touch"
        backgroundColor="#181818"
        textColor="#fff"
        onClick={handleClick}
      />
    </div>
  </div>

  <div className="principles-container">
    {principlesData.map((item, index) => (
      <PrinciplesInfoCard
        key={index}
        icon={item.icon}
        title={item.title}
        shortDescription={item.shortDescription}
        longDescription={item.longDescription}
      />
    ))}
  </div>
</div>
      </div>

      <div className="our-history-section">
  {/* Başlık ve Açıklama */}
  <div className="history-header">
    <Title
      title="OUR HISTORY"
      backgroundColor="#4eaf4e"
      color="#fff"
    />
    <h2>Better Website Means A User Experience</h2>
    <p>
      Ippsum is the result of synergy between our teams and our customers. 
      Our company culture is focused on excellent productivity, customer satisfaction, 
      respect for team and individual achievements.
    </p>
  </div>

  {/* Video Görseli */}
  <div className="history-video-container">
    <div className="history-video-wrapper">
      <img src={AboutOurHistory} alt="Our History Video" className="history-video" />
    </div>
  </div>
</div>


<div className="team-page">
      {/* Başlık Bölümü */}
      <div className="team-header">
        <Title title="OUR TEAM" backgroundColor="#ffcc4a" color="#181818" />
        <h2>We champion the bold to achieve the extraordinary</h2>
        <p>
          Ippsum is the result of synergy between our teams and our customers.
          Our company culture is focused on excellent productivity, customer
          satisfaction, respect for team.
        </p>
      </div>

      {/* Takım Üyeleri */}
      <div className="team-container">
        {teamData.map((member, index) => (
          <PersonCard
            key={index}
            image={member.image}
            name={member.name}
            title={member.title}
            description={member.description}
            socialLinks={member.socialLinks}
          />
        ))}
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
    <img src={ConsultBanner} alt="" className="consult-image" />
  </div>
</div>





  
      

    </div>
    
  );
}

export default AboutPage; 
