import React from "react";
import TopPanel from "../components/TopPanel";
import HeaderPanel from "../components/HeaderPanel";
import "../assets/styles/BlogPage.css";
import Title from "../components/Title";
import MoreButton from "../components/MoreButton";
import BlogLeftImage from "../assets/images/home-blog-content-left-img.png";
import BlogRightImage from "../assets/images/home-blog-content-right-img.png";
import BlogLeftImage1 from "../assets/images/blog-left-img-1.png";
import BlogRightImage1 from "../assets/images/blog-right-img-1.png";
import BlogLeftImage2 from "../assets/images/blog-left-img-2.png";
import BlogRightImage2 from "../assets/images/blog-right-img-2.png";
import JohnCarter from "../assets/images/john-carter.png";
import NayraMelson from "../assets/images/nayra-melson.png";
import TeamContactImage from "../assets/images/teampage-contact-image.png";

function Blog(){

  const handleClick = () => {
    alert("Buton Tıklandı!");
};
 


    return (
        <div>
        <TopPanel/>
        <HeaderPanel/>
        

        <div className="blog-banner-section">
          <div className="blog-banner-background">
            <div className="blog-banner-content">
              <Title title="BLOG" backgroundColor="#FFCC4A" color="#181818" />
              <h2 className="blog-banner-heading">
              Latest Blogs & News
              </h2>
            </div>
          </div>
        </div>

        <div>
    <div className="blog-home-blog-section">
    <div className="home-blog-header">
  <div className="home-header-left">
    <Title title="BLOG" backgroundColor="#4CAF50" color="#ffffff" />
    <h2>Take a look at our latest articles & resources</h2>
  </div>
  <div className="home-header-right">
    <MoreButton
      text="More News"
      backgroundColor="#ffcc4a"
      textColor="#181818"
      onClick={handleClick}
    />
  </div>
</div>


    <div className="home-blog-content">
      <div className="home-blog-card">
        <img src={BlogLeftImage} alt="" className="home-blog-card-image"/>
        <h2 className="home-blog-card-title">Consulting Fees Study 2019 (And How To Raise Your Rates)</h2>
        <p className="home-blog-card-description">Leverage agile frameworks to provide a robust synopsis for high level overviews. 
          Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
          <div className="line"></div>
        <div className="home-blog-card-author">
        <img src={JohnCarter} alt="" className="home-author-image"/>
        <p className="home-author-name">John Carter&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;September 1, 2022 </p>
        <MoreButton
          text="Read More"
          backgroundColor="#181818"
          textColor="#fff"
          onClick={handleClick}

        />
        </div>
        <div className="line"></div>
      </div>
      <div className="home-blog-card">
        <img src={BlogRightImage} alt="" className="home-blog-card-image"/>
        <h2 className="home-blog-card-title">What is growth hacking and how to apply it to your startup</h2>
        <p className="home-blog-card-description">Leverage agile frameworks to provide a robust synopsis for high level overviews. 
          Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
          <div className="line"></div>
        <div className="home-blog-card-author">
        <img src={NayraMelson} alt="" className="home-author-image"/>
        <p className="home-author-name">Nayra Melson&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;September 1, 2022  </p>
        <MoreButton 
          text="Read More"
          backgroundColor="#fff"
          textColor="#181818"
          onClick={handleClick}
          border="1px solid #c1c1c1"
        />
        </div>
        <div className="line"></div>
      </div>
      <div className="home-blog-card">
        <img src={BlogLeftImage1} alt="" className="home-blog-card-image"/>
        <h2 className="home-blog-card-title">Five Steps to Implement Motivation in Management</h2>
        <p className="home-blog-card-description">Leverage agile frameworks to provide a robust synopsis for high level overviews. 
          Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
          <div className="line"></div>
        <div className="home-blog-card-author">
        <img src={JohnCarter} alt="" className="home-author-image"/>
        <p className="home-author-name">John Carter&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;September 1, 2022  </p>
        <MoreButton 
          text="Read More"
          backgroundColor="#fff"
          textColor="#181818"
          onClick={handleClick}
          border="1px solid #c1c1c1"
        />
        </div>
        <div className="line"></div>
      </div>
      <div className="home-blog-card">
        <img src={BlogRightImage1} alt="" className="home-blog-card-image"/>
        <h2 className="home-blog-card-title">Team Identifiers, Benefits, and How to Build One that Works</h2>
        <p className="home-blog-card-description">Leverage agile frameworks to provide a robust synopsis for high level overviews. 
          Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
          <div className="line"></div>
        <div className="home-blog-card-author">
        <img src={NayraMelson} alt="" className="home-author-image"/>
        <p className="home-author-name">Nayra Melson&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;September 1, 2022  </p>
        <MoreButton 
          text="Read More"
          backgroundColor="#fff"
          textColor="#181818"
          onClick={handleClick}
          border="1px solid #c1c1c1"
        />
        </div>
        <div className="line"></div>
      </div>
      <div className="home-blog-card">
        <img src={BlogLeftImage2} alt="" className="home-blog-card-image"/>
        <h2 className="home-blog-card-title">Professional Development Goals: Steps and Examples</h2>
        <p className="home-blog-card-description">Leverage agile frameworks to provide a robust synopsis for high level overviews. 
          Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
          <div className="line"></div>
        <div className="home-blog-card-author">
        <img src={JohnCarter} alt="" className="home-author-image"/>
        <p className="home-author-name">John Carter&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;September 1, 2022  </p>
        <MoreButton 
          text="Read More"
          backgroundColor="#fff"
          textColor="#181818"
          onClick={handleClick}
          border="1px solid #c1c1c1"
        />
        </div>
        <div className="line"></div>
      </div>
      <div className="home-blog-card">
        <img src={BlogRightImage2} alt="" className="home-blog-card-image"/>
        <h2 className="home-blog-card-title">A Guide on What to Bring on the First Day of Work
</h2>
        <p className="home-blog-card-description">Leverage agile frameworks to provide a robust synopsis for high level overviews. 
          Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
          <div className="line"></div>
        <div className="home-blog-card-author">
        <img src={NayraMelson} alt="" className="home-author-image"/>
        <p className="home-author-name">Nayra Melson&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;September 1, 2022  </p>
        <MoreButton 
          text="Read More"
          backgroundColor="#fff"
          textColor="#181818"
          onClick={handleClick}
          border="1px solid #c1c1c1"
        />
        </div>
        <div className="line"></div>
      </div>
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

export default Blog;