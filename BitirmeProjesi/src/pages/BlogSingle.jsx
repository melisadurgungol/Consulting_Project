import React from "react";
import TopPanel from "../components/TopPanel";
import HeaderPanel from "../components/HeaderPanel";
import "../assets/styles/BlogSinglePage.css";
import Title from "../components/Title";
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


        </div>
    )
}

export default BlogSingle;