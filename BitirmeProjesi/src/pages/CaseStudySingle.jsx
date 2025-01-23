import React from "react";
import TopPanel from "../components/TopPanel";
import HeaderPanel from "../components/HeaderPanel";
import "../assets/styles/CaseStudySinglePage.css";
import Title from "../components/Title";
import SelectedBackground from "../assets/images/casestudysingle-selected-bg.png";
import StoryboardImage from "../assets/images/storyboard-image.png";
import MorecaseImage1 from "../assets/images/morecase-img1.png";
import MorecaseImage2 from "../assets/images/morecase-img2.png";
import MorecaseImage3 from "../assets/images/morecase-img3.png";


function CaseStudySingle(){
    return (
        <div>
        <TopPanel/>
        <HeaderPanel/>

        <div className="case-study-single-banner-section">
          <div className="case-study-single-banner-background">
            <div className="case-study-single-banner-content">
              <Title title="CASE STUDIES SINGLE" backgroundColor="#FFCC4A" color="#181818" />
              <h2 className="case-study-single-banner-heading">
                Taxes & Efficiency
              </h2>
            </div>
          </div>
        </div>

        <div className="case-study-container">
  <div className="case-study-image">
    <img src={SelectedBackground} alt="Case Study Background" />
  </div>
  <div className="case-study-details">
    <div className="case-study-metadata">
      <div className="metadata-item">
        <h2>Case Name</h2>
        <p>Taxes & Efficiency</p>
      </div>
      <div className="metadata-item">
        <h2>Category</h2>
        <p>Business</p>
      </div>
      <div className="metadata-item">
        <h2>Date</h2>
        <p>27th September 2022</p>
      </div>
    </div>
    <div className="case-study-button">
      <button>Live Preview</button>
    </div>
  </div>
  <div className="case-study-overview">
    <h2>Project Overview</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
    </p>
    <ul>
      <li>It brings the right people together with all the right information and tools to get work done</li>
      <li>We provide operational efficiency, data security, and flexible scale</li>
      <li>Your best work, together in one package that works seamlessly from your computer</li>
      <li>Delivers the tools you need to save time Improve field performance always</li>
    </ul>
  </div>
</div>


<div class="studyboard-container">
  <h2 class="studyboard-section-title">Storyboard</h2>
  <p class="studyboard-section-description">
    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate
    one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service
    for state of the art customer service. Objectively innovate empowered manufactured products whereas 
    parallel platforms. Holistically predominate extensible testing procedures for reliable supply chains.
  </p>
  <p class="studyboard-section-description">
    Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize 
    quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate 
    installed base portals after maintainable products completely pursue scalable customer service.
  </p>
  <div class="studyboard-image-container">
    <img src={StoryboardImage} alt="Storyboard Image" />
  </div>
  <h2 class="studyboard-section-title">Project result</h2>
  <p class="studyboard-section-description">
    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to 
    corporate strategy foster collaborative thinking to further the overall value proposition. Organically 
    grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
  </p>
  <p class="studyboard-section-description">
    Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, 
    going forward, a new normal that has evolved from generation X is on the runway heading towards a 
    streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
  </p>
</div>

<div className="newsletter">
  <div className="newsletter-section">
    <div className="newsletter-left">
      <h2>Subscribe Our Newsletter</h2>
      <p>Build stronger Customer Relationships with <span>Consultalk</span></p>
    </div>
    <div className="newsletter-right">
      <input type="text" placeholder="your mail address" />
      <button>Subscribe</button>
    </div>
  </div>
</div>


<div class="more-case-studies">
  <h2>More Case Studies</h2>
  <div class="more-case-studies-images">
    <img src={MorecaseImage1} alt="Case Study 1" />
    <img src={MorecaseImage2} alt="Case Study 2" />
    <img src={MorecaseImage3} alt="Case Study 3" />
  </div>
  <button class="more-case-studies-button">Browse All Case Studies</button>
</div>




        </div>
      );
}
export default CaseStudySingle;