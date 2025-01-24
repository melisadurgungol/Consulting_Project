import React, { useState } from "react";
import "../assets/styles/HomePage2.css";
import HeaderPanel from "../components/HeaderPanel";
import BookAMeeting from "../components/BookAMeeting";
import Title from "../components/Title";
import BookAMeetingImage from "../assets/images/bookameeting.png";
import BannerImage from "../assets/images/homepage2-banner-image.png";
import WhoWeAreCard from "../components/WhoWeAreCard";
import WhoWeAreImg1 from "../assets/images/whoweare-img1.png";
import WhoWeAreImg2 from "../assets/images/whoweare-img2.png";
import WhoWeAreImg3 from "../assets/images/whoweare-img3.png";
import MoreButton from "../components/MoreButton";
import AboutMailIcon from "../assets/images/homepage2-about-mail-icon.png";
import AboutTelIcon from "../assets/images/homepage2-about-tel-icon.png";
import AboutImage from "../assets/images/homepage2-about-image.png";
import HomePageServiceCard from "../components/HomePageServiceCard";
import ServiceCardImage1 from "../assets/images/service-card-image1.png";
import ServiceCardImage2 from "../assets/images/service-card-image2.png";
import ServiceCardImage3 from "../assets/images/service-card-image3.png";
import HomePageServicePrevButton from "../assets/images/homepage-servicecard-prev-button-icon.png";
import HomePageServiceNextButton from "../assets/images/homepage-servicecard-next-button-icon.png";

function HomePage2() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = () => {
        alert("Buton Tıklandı!");
    };

    const handleServicesClick = () => {
        navigate("/services"); 
      };
      
      

    const whoWeAreCards = [
        {
          backgroundImage: WhoWeAreImg1,
          title: "Finance & Restructuring",
          description:
            "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
          descriptionColor: "#595566",
          titleColor: "#181818",
          buttonText: "Our Services",
          buttonBgColor: "#fff",
          buttonTextColor: "#181818",
        },
        {
          backgroundImage: WhoWeAreImg2,
          title: "Finance & Restructuring",
          description:
            "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
          descriptionColor: "#595566",
          titleColor: "#181818",
          buttonText: "More About",
          buttonBgColor: "#fff",
          buttonTextColor: "#181818",
        },
        {
          backgroundImage: WhoWeAreImg3,
          title: "Consultalk Result",
          description:
            "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
          descriptionColor: "#fff",
          titleColor: "#fff",
          buttonText: "Explore Our Solution",
          buttonBgColor: "#151515",
          buttonTextColor: "#fff",
        },
      ];

      const homePageServiceCards = [
        {
            imageSrc: ServiceCardImage1,
            buttonBgColor:"#fff",
            buttonTextColor:"#353535",
            buttonText:"Learn More",
        },
        {
            imageSrc: ServiceCardImage2 ,
            buttonBgColor:"#181818",
            buttonTextColor:"#fff",
            buttonText:"Learn More",
        },
        {
            imageSrc: ServiceCardImage3 ,
            buttonBgColor:"#fff",
            buttonTextColor:"#353535",
            buttonText:"Learn More",
        },
        {
            imageSrc: ServiceCardImage1,
            buttonBgColor:"#fff",
            buttonTextColor:"#353535",
            buttonText:"Learn More",
        },
        {
            imageSrc: ServiceCardImage2 ,
            buttonBgColor:"#181818",
            buttonTextColor:"#fff",
            buttonText:"Learn More",
        },
        {
            imageSrc: ServiceCardImage3 ,
            buttonBgColor:"#fff",
            buttonTextColor:"#353535",
            buttonText:"Learn More",
        },
       
      ];

      const handleNext = () => {
        if (currentIndex < homePageServiceCards.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div>
            <HeaderPanel backgroundColor="#fff" color="#181818" textcolor="#181818" />

            <div className="homepage2-banner">
                <div className="homepage2-banner-content1">
                <div className="homepage2-banner-content">
                    <Title title="HELLO' I AM" backgroundColor="#FFCC4A" color="#181818" />
                    <h2>Adam Buschemia Business Consultant</h2>
                    <p>
                        Get help from Alex Moore, a professional business coach
                        with advanced experience on growth and business scaling.
                    </p>
                    <BookAMeeting
                        text="Book a Meeting"
                        backgroundColor="#fff"
                        textColor="#181818"
                        onClick={handleClick}
                        icon={
                            <img
                                src={BookAMeetingImage}
                                alt="Icon"
                                style={{ width: "40px", height: "40px" }}
                            />
                        }
                    />
                </div>
                </div>
                <div className="homepage2-banner-image">
                    <img src={BannerImage} alt="Banner" />
                </div>
            </div>

            <div>

            </div>

        <div className="who-we-are-container">
        {whoWeAreCards.map((card, index) => (
        <WhoWeAreCard
          key={index} 
          backgroundImage={card.backgroundImage}
          title={card.title}
          description={card.description}
          descriptionColor={card.descriptionColor}
          titleColor={card.titleColor}
          buttonText={card.buttonText}
          buttonBgColor={card.buttonBgColor}
          buttonTextColor={card.buttonTextColor}
          onClick={handleClick}
        />
      ))}

        </div>

        <div className="homepage2-about-container">
  <div className="homepage2-about-content">
    <Title title="ABOUT ME" backgroundColor="#FFCC4A" color="#181818" />
    <h2>About Our Consulting Agency Team</h2>
    <p>We create experiences and build products that make business grow</p>
    <p>Get guidance from Alex Moore, a professional business coach with extensive experience in growth and business scaling.</p>

    <div className="homepage2-contact-info">
      <div className="homepage2-email">
        <img src={AboutMailIcon} alt="Email Icon" />
        <p>Buschemia@gmail.com</p>
      </div>
      <div className="homepage2-phone">
        <img src={AboutTelIcon} alt="Phone Icon" />
        <p>(001) 5648 6584</p>
      </div>
    </div>

    <MoreButton
      text="Make An Appointment"
      backgroundColor="#181818"
      textColor="#fff"
      onClick={handleServicesClick}
    />
  </div>

  <div className="homepage2-about-image">
    <img src={AboutImage} alt="About Us Image" />
  </div>
</div>


      <div className="homepage-services-content">
        <div className="homepage-services-content-title">
        <Title title="SERVİCES" backgroundColor="#4eaf4e" color="#fff" />
        <h2>Get Control Over Your Business I take your finance to next level</h2>
        </div>
        
        <div className="service-card-content">
               
                {homePageServiceCards.slice(currentIndex, currentIndex + 3).map((card, index) => (
                    <HomePageServiceCard
                        key={index}
                        imageSrc={card.imageSrc}
                        buttonText={card.buttonText}
                        buttonBgColor={card.buttonBgColor}
                        buttonTextColor={card.buttonTextColor}
                        onClick={() => alert("Button Clicked!")}
                    />
                ))}
        <div className="button-container">
                    <button onClick={handlePrev} className="homepage-prev-image-button">
                        <img src={HomePageServicePrevButton} alt="Prev Button" />
                    </button>
                    <button onClick={handleNext} className="homepage-next-image-button">
                        <img src={HomePageServiceNextButton} alt="Next Button" />
                    </button>
        </div>
        </div>
        

      </div>







        </div>
    );
}

export default HomePage2;
