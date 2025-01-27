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
import dotImage from "../assets/images/404-dot-img.png";
import ConsistencyImage from "../assets/images/homepage2-consistency-image.png";
import ImprovementImage from "../assets/images/homepage2-improvement-image.png";
import BranchingImage from "../assets/images/homepage2-branching-image.png";
import Homepage2HoverCard1 from "../assets/images/homepage2-hovercard-image1.png";
import Homepage2HoverCard2 from "../assets/images/homepage2-hovercard-image2.png";
import Homepage2HoverCard3 from "../assets/images/homepage2-hovercard-image3.png";
import Homepage2HoverCard4 from "../assets/images/homepage2-hovercard-image4.png";
import Homepage2HoverCard5 from "../assets/images/homepage2-hovercard-image5.png";
import Homepage2HoverCard6 from "../assets/images/homepage2-hovercard-image6.png";
import Homepage2HoverCard7 from "../assets/images/homepage2-hovercard-image7.png";
import HoverImageCard from "../components/HoverImageCard";
import HoverImageCardPlus from "../assets/images/hover-img-card-plus.png";
import ResumeImageLeft from "../assets/images/resume-left-item-img.png";
import ResumeImageRight from "../assets/images/resume-right-item-img.png";
import SatisfiedIcon from "../assets/images/homepage2-satisfied-icon.png";
import ActiveIcon from "../assets/images/homepage-activate-icon.png";
import AwardsIcon from "../assets/images/homepage2-awards-icon.png";
import TestimonialCard from "../components/TestimonialCard";
import KathleenSmith from "../assets/images/kathleen-smith.png";
import PrevButton from "../components/Prev";
import PrevIcon from "../assets/images/prev-icon.png";
import NextButton from "../components/Next";
import NextIcon from "../assets/images/next-icon.png";
import Client1 from "../assets/images/homepage2-client1.png";
import Client2 from "../assets/images/homepage2-client2.png";
import Client3 from "../assets/images/homepage2-client3.png";
import Client4 from "../assets/images/homepage2-client4.png";
import Client5 from "../assets/images/homepage2-client5.png";
import Client6 from "../assets/images/homepage2-client6.png";
import PricingCard from "../components/PricingCard";
import TeamContactImage from "../assets/images/teampage-contact-image.png";
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


    const homepage2HoverCards = [
        {
          image: Homepage2HoverCard1,
          title: "Taxes & Efficiency",
          subtitle: "Business",
          overlayColor: "rgba(0, 0, 0, 0.7)",
          hoverTextColor: "#ffcc00",
          icon: HoverImageCardPlus,
        },
        {
          image: Homepage2HoverCard2,
          title: "Financial Planning",
          subtitle: "Business",
          overlayColor: "rgba(0, 0, 0, 0.7)",
          hoverTextColor: "#ffcc00",
          icon: HoverImageCardPlus,
        },
        {    
          image: Homepage2HoverCard3,
          title: "Taxes & Efficiency",
          subtitle: "Business",
          overlayColor: "rgba(0, 0, 0, 0.7)",
          hoverTextColor: "#ffcc00",
          icon: HoverImageCardPlus,
        },
        {
          image: Homepage2HoverCard4,
          title: "Financial Planning",
          subtitle: "Business",
          overlayColor: "rgba(0, 0, 0, 0.7)",
          hoverTextColor: "#ffcc00",
          icon: HoverImageCardPlus,
        },
        {    
          image: Homepage2HoverCard5,
          title: "Taxes & Efficiency",
          subtitle: "Business",
          overlayColor: "rgba(0, 0, 0, 0.7)",
          hoverTextColor: "#ffcc00",
          icon: HoverImageCardPlus,
        },
        {
          image: Homepage2HoverCard6,
          title: "Financial Planning",
          subtitle: "Business",
          overlayColor: "rgba(0, 0, 0, 0.7)",
          hoverTextColor: "#ffcc00",
          icon: HoverImageCardPlus,
        },
        {
            image: Homepage2HoverCard7,
            title: "Financial Planning",
            subtitle: "Business",
            overlayColor: "rgba(0, 0, 0, 0.7)",
            hoverTextColor: "#ffcc00",
            icon: HoverImageCardPlus,
          }
        
      ]

      const testimonialCards = [
        {
            testimonialImg: KathleenSmith,
            testimonialDescription: "Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus turpis. pellentesque habitant morbil.",
            testimonialName: "Kathleen Smith",
            testimonialJob:"Web Designer"
        }, {
            testimonialImg: KathleenSmith,
            testimonialDescription: "Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus turpis. pellentesque aservices, and become a multinational firm, offering solutions Worldwide.",
            testimonialName: "John Martin",
            testimonialJob:"Web Designer"
        },
        {
            testimonialImg: KathleenSmith,
            testimonialDescription: "Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus turpis. pellentesque habitant morbil.",
            testimonialName: "Natalia Duke",
            testimonialJob:"Web Designer"
        }
      ]


      const Homepage2ServicesCard = [
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
    ]


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








        <div style={{backgroundColor:"#f5f5f5"}}>
        <div className="homepage-resume">
            <div className="homepage-resume-title">
            <Title title="INFORMATION" backgroundColor="#4eaf4e" color="#fff" />
            <h2>My Resume</h2>
            </div>
            <div className="homepage-resume-content">
                <div className="homepage-resume-content-left">
                <Title title="EDUCATION" backgroundColor="#4eaf4e" color="#fff" />

                <div className="resum-left-item">
                    <div>
                        <img src={ResumeImageLeft} alt="" />
                    </div>
                    <div className="resum-item-info">
                        <p>Finance Сourse - New York (2018 - 2019)</p>
                        <h3>Financial Projections</h3>
                        <p>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies 
                            lacus sed turpis. Pellentesque pulvinar pellentesque habitant morbi tristique.</p>
                    </div>
                </div>
                <div className="resum-left-item">
                    <div>
                        <img src={ResumeImageLeft} alt="" />
                    </div>
                    <div className="resum-item-info">
                        <p>Finance Сourse - New York (2018 - 2019)</p>
                        <h3>Corporate Finance</h3>
                        <p>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies 
                            lacus sed turpis. Pellentesque pulvinar pellentesque habitant morbi tristique.</p>
                    </div>
                </div>
                </div>
                <div className="homepage-resume-content-right">
                <Title title="EDUCATION" backgroundColor="#ffcc4a" color="#181818" />
                <div className="resum-right-item">
                    <div>
                        <img src={ResumeImageRight} alt="" />
                    </div>
                    <div className="resum-item-info">
                        <p>Finance Сourse - New York (2018 - 2019)</p>
                        <h3>Financial Projections</h3>
                        <p>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies 
                            lacus sed turpis. Pellentesque pulvinar pellentesque habitant morbi tristique.</p>
                    </div>
                </div>
                <div className="resum-right-item">
                    <div>
                        <img src={ResumeImageRight} alt="" />
                    </div>
                    <div className="resum-item-info">
                        <p>Finance Сourse - New York (2018 - 2019)</p>
                        <h3>Financial Projections</h3>
                        <p>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies 
                            lacus sed turpis. Pellentesque pulvinar pellentesque habitant morbi tristique.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>


        <div className="homepage2-number-counter">
            <div className="homepage2-satisfied-clients">
                <img src={SatisfiedIcon} alt="" />
                <div className="number-counter-info">
                    <h2>1,542+</h2>
                    <p>Satisfied Clients</p>
                </div>
            </div>
            <div className="homepage2-satisfied-clients">
                <img src={SatisfiedIcon} alt="" />
                <div className="number-counter-info">
                    <h2>182</h2>
                    <p>Expert Team</p>
                </div>
            </div>
            <div className="homepage2-satisfied-clients">
                <img src={ActiveIcon} alt="" />
                <div className="number-counter-info">
                    <h2>285</h2>
                    <p>Activate Products</p>
                </div>
            </div>
            <div className="homepage2-satisfied-clients">
                <img src={AwardsIcon} alt="" />
                <div className="number-counter-info">
                    <h2>28+</h2>
                    <p>Awards Winning</p>
                </div>
            </div>
        </div>


      <div style={{marginBottom:"150px"}}>
      <div className="testimonials-container">
                
                {testimonialCards.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        testimonialImg={testimonial.testimonialImg}
                        testimonialDescription={testimonial.testimonialDescription}
                        testimonialName={testimonial.testimonialName}
                        testimonialJob={testimonial.testimonialJob}
                    />
                ))}
        </div>
        <div className="testimonial-ok">
        <PrevButton
        icon={<img src={PrevIcon} alt="Prev" />}
        onClick={handleClick}
      />
          <NextButton
        icon={<img src={NextIcon} alt="Next" />}
        onClick={handleClick}
      />
        </div>

      </div>


      <div className="homepage2-trusted-content">
        <div className="trusted-content">
        <Title title="OUR TEAM" backgroundColor="#4eaf4e" color="#fff" />
        <h2>Trusted by some Biggest Names</h2>
        <MoreButton
            text="View Team Detail"
            backgroundColor="#ffcc4a"
            textColor="#181818"
            onClick={handleServicesClick}
        />
        </div>
      </div>

      <div className="homepage2-client">
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


<div style={{backgroundColor:"#f5f5f5"}}>
<div className="homepage2-pricing-content">
    <div className="homepage2-pricing-info">
    <Title title="CHOOSE YOUR PLAN" backgroundColor="#4eaf4e" color="#fff" />
    <h2>Save With Our Pricing Packages</h2>
    <p>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis.
         Pellentesque pulvinar pellentesque habitant morbi tristique.</p>
    <div className="homepage2-pricing-button-content">
    <button className="homepage2-pricing-button">
        <div className="homepage2-button-circle" ></div>
        Montly
    </button>
    <button className="homepage2-pricing-button">
        <div className="homepage2-button-circle"></div>
        Yearly
    </button>
    </div>
    </div>
    <div className="homepage2-service-card-content">
    {Homepage2ServicesCard.map((serviceCard, index) => (
          <PricingCard
            key={index}
            planName={serviceCard.planName}
            description={serviceCard.description}
            price={serviceCard.price}
            features={serviceCard.features}
            buttonText={serviceCard.buttonText}
          />
        ))}
    </div>
   </div>

</div>

<div className="team-contact-section">
  <div className="team-contact-left">
    <Title title="CONTACT" backgroundColor="#323232" color="#fff" />
    <h2>Ready To Talk?</h2>
    <p>
      Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. 
      Pellentesque pellentesque habitant morbi tristique.
    </p>
    <div className="team-contact-form">
      <input type="text" placeholder="your mail address" className="team-contact-input" />
      <button className="team-contact-button">Send Message</button>
    </div>
  </div>
  <div className="team-contact-right">
    <img src={TeamContactImage} alt="Contact Team" className="contact-image" />
  </div>
</div>

        </div>
    );
}



export default HomePage2;
