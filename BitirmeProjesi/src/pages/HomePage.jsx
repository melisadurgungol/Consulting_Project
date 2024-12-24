import React from "react";
import "../assets/styles/HomePage.css";
import TopBar from "../components/TopBar";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";


function HomePage() {

  const handleClick = () => {
    alert("Buton Tıklandı!");
};

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
        
    </div>
  );
}

export default HomePage;
