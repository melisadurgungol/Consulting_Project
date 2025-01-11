import React from "react";
import TopPanel from "../components/TopPanel";
import PageHeader from "../components/PageHeader";

function NotFound404(){
    return (
        <div>
        <TopPanel/>
        <PageHeader/>
        <p>burası 404 sayfası hiçbir route ile eşleşmez ise buraya düşer anladımm </p>
        </div>
      );
}
export default NotFound404;