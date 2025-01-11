import React from "react";
import TopPanel from "../components/TopPanel";
import PageHeader from "../components/PageHeader";
import Banner from "../components/Banner";
import blogBanner from "../assets/images/blog-banner.png"

function Blog(){
    return (
        <div>
        <TopPanel/>
        <PageHeader/>
        <Banner
          title="BLOG"
          subtitle="Latest Blogs & News"
          image={blogBanner}
          height="487px"
          contentwidth="553px"
          contentleft="360px"
          contentheight="199px"
          bannertitlewidth="80px"
          contenttop="143px"
        />
        </div>
        
      );
}

export default Blog;