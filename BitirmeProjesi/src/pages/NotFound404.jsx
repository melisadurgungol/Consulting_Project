import React from "react";
import TopBar from "../components/TopBar";
import PageHeader from "../components/PageHeader";

function NotFound404(){
    return (
        <div>
        <TopBar/>
        <PageHeader/>
        <p>burası 404 sayfası hiçbir route ile eşleşmez ise buraya düşer anladımm </p>
        </div>
      );
}
export default NotFound404;