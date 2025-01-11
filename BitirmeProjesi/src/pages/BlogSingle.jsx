import React from "react";
import TopPanel from "../components/TopPanel";
import PageHeader from "../components/PageHeader";
import Banner from "../components/Banner";
import blogSingleBanner from "../assets/images/blogsingle-banner.png"
function BlogSingle(){
    return(
        <div>
        <TopPanel/>
        <PageHeader/>
        <Banner
          title="September 1, 2022"
          subtitle="Essential Guidelines To Grow Your Corporate Business With Us"
          image={blogSingleBanner}
          height="744px"
          contentwidth="838px"
          contentleft="120px"
          contentheight="257px"
          bannertitlewidth="216px"
          contenttop="239px"
         
        />
        </div>
    )
}

export default BlogSingle;