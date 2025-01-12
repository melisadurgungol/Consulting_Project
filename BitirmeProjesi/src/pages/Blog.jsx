import React from "react";
import TopPanel from "../components/TopPanel";
import HeaderPanel from "../components/HeaderPanel";
import "../assets/styles/BlogPage.css";
import Title from "../components/Title";

function Blog(){
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


        </div>
        
      );
}

export default Blog;