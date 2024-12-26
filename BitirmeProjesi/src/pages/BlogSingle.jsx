import React from "react";
import TopBar from "../components/TopBar";
import PageHeader from "../components/PageHeader";
import Banner from "../components/Banner";
import blogSingleBanner from "../assets/images/blogsingle-banner.png"
function BlogSingle(){
    return(
        <div>
        <TopBar/>
        <PageHeader/>
        <Banner
          title="BLOG"
          subtitle="Latest Blogs & News"
          image={blogSingleBanner}
          height="744px"
          contentwidth="553px"
          contentleft="360px"
          contentheight="199px"
          bannertitlewidth="80px"
          contenttop="143px"
        />
        </div>
    )
}

export default BlogSingle;