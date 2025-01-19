import React from "react";
import TopPanel from "../components/TopPanel";
import HeaderPanel from "../components/HeaderPanel";
import "../assets/styles/BlogSinglePage.css";
import Title from "../components/Title";
import BlogSingleInstagramIcon from "../assets/images/instagram-icon.png";
import BlogSingleFacebookIcon from "../assets/images/facebook-icon.png";
import BlogSingleTwitterIcon from "../assets/images/twitter-icon.png";
import BusinessConsultingImage from "../assets/images/blogsingle-business-consulting-img.png";
import DanDan from "../assets/images/dandan.png";
import BlogSingleNayraMelson from "../assets/images/blogsingle-nayra-melson.png";



function BlogSingle(){
    return(
        <div>
        <TopPanel/>
        <HeaderPanel/>


        <div className="blog-single-banner-section">
          <div className="blog-single-banner-background">
            <div className="blog-single-banner-content">
              <Title title="September 1, 2022" backgroundColor="#FFCC4A" color="#181818" />
              <h2 className="blog-single-banner-heading">
              Essential Guidelines To Grow Your Corporate Business With Us
              </h2>
            </div>
          </div>
        </div>

        <div class="blogsingle-content">
  <div class="blogsingle-consulting">
    <div class="blogsingle-consulting-text">
      <h2>Best Business Consulting Services</h2>
      <p>
        Bring to the table win-win survival strategies to ensure proactive domination. 
        At the end of the day, going forward, a new normal that has evolved from generation 
        X is on the runway heading towards a streamlined cloud solution. User-generated content 
        in real-time will have multiple touchpoints for offshoring. Capitalize on low-hanging fruit to 
        identify a ballpark value-added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.
      </p>
    </div>
    <div class="blogsingle-consulting-image">
      <img src={BusinessConsultingImage} alt="Business Consulting Image" />
    </div>
  </div>
  <div class="blogsingle-digital-assets">
    <h2>The Digital Assets For All</h2>
    <p>
      Appropriately empower dynamic leadership skills after business portals. Globally my carminate interactive supply chains with distinctive quality 
      vectors global sources services. Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements.
    </p>
    <ul class="blogsingle-assets-list">
      <li>Dynamically target high-payoff intellectual capital for customized</li>
      <li>Interactively procrastinate high-payoff content</li>
      <li>Credibly reintermediate backend ideas for cross-platform models</li>
    </ul>
  </div>
  <div class="blogsingle-quote">
    <img src={DanDan} alt="Quote Background" />
    <p>
      “The job market of the future will consist of those jobs that robots cannot perform. Our blue-collar work is pattern recognition, 
      making sense of what you see. Gardeners will still have jobs because every garden is different.”
    </p>
  </div>
  <div class="blogsingle-wireframes">
    <h2>Make real-time wireframes services</h2>
    <p>
      Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
      Dramatically visualize customer-directed convergence without revolutionary ROI.
    </p>
    <ul class="blogsingle-wireframe-list">
      <li>It brings the right people together with all the right information and tools to get work done</li>
      <li>We provide operational efficiency, data security, and flexible scale</li>
      <li>Your best work, together in one package that works seamlessly from your computer</li>
      <li>Delivers the tools you need to save time and improve field performance always</li>
    </ul>
  </div>
  <div class="blogsingle-profile">
    <div class="blogsingle-profile-image">
      <img src={BlogSingleNayraMelson} alt="Nayra Melson" />
    </div>
    <div class="blogsingle-profile-info">
      <h2>Nayra Melson</h2>
      <h3>Senior Manager</h3>
      <p>
        Leads the global expansion of the designerz brand and oversees investment in solutions and innovation. 
        Renowned coder and an authority on matters of industrial experience & interface.
      </p>
      <div class="blogsingle-social">
        <a href="https://instagram.com" target="_blank">
          <img src={BlogSingleInstagramIcon} alt="Instagram" class="blogsingle-social-icon" />
        </a>
        <a href="https://facebook.com" target="_blank">
          <img src={BlogSingleFacebookIcon} alt="Facebook" class="blogsingle-social-icon" />
        </a>
        <a href="https://twitter.com" target="_blank">
          <img src={BlogSingleTwitterIcon} alt="Twitter" class="blogsingle-social-icon" />
        </a>
      </div>
    </div>
  </div>
</div>



        </div>
    )
}

export default BlogSingle;