import React from "react";
import "../assets/styles/About.css";

function About({ sectionTitle, heading, description,text, image1,image2,image3, stats,styles={}}) {
  return (
    <div className="about-container" style={styles.aboutContainerStyle}>
      <div className="about-left" style={styles.aboutLeftStyle}>
        <div className="about-section-title" style={styles.aboutSectionTitleStyle}>{sectionTitle}</div>
        <h2 className="about-heading" style={styles.aboutHeadingStyle}>{heading}</h2>
        <p className="about-description" style={styles.aboutDescriptionStyle}>{description}</p>
        <p className="about-text" style={styles.aboutTextStyle}>{text}</p>
        <div className="about-stats" style={styles.aboutStatsStyle} >
        {stats.map((stat, index) => (
            <div key={index} className="about-stat-item" style={styles.aboutLeftStatItemStyle}>
              <img 
                src={stat.icon} 
                alt={stat.label} 
                className="about-stat-icon" 
                style={styles.aboutStatIconStyle}
              />
              <div>
                <div className="about-stat-value" style={styles.aboutStatValueStyle}>{stat.value}</div>
                <div className="about-stat-label" style={styles.aboutStatLabelStyle}>{stat.label}</div>
              </div>
            </div>
            
          ))}
          
        </div>
      </div>
      <div className="about-right" style={styles.aboutRight}>
        <img 
          src={image1} 
          alt="About Section" 
          className="about-image"
          style={styles.aboutImage1} 
        />
        <img 
          src={image2} 
          alt="About Section" 
          className="about-image" 
          style={styles.aboutImage2}
        />
        <div className="about-stat-item" style={{backgroundColor:"black"}}>
            <div className="about-market-experience" style={styles.aboutMarketExperience}></div>
            <img 
              src={image3}
              alt="Market Experiences" 
              className="about-stat-icon" 
              style={styles.aboutImage3}
            />
            
            
          </div>
      </div>
    </div>
  );
}

export default About;
