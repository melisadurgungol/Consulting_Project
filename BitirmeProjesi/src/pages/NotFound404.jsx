import React from "react";
import TopPanel from "../components/TopPanel";
import HeaderPanel from "../components/HeaderPanel";

function NotFound404(){
    return (
        <div>
        <TopPanel/>
        <HeaderPanel/>
        <p>burası 404 sayfası hiçbir route ile eşleşmez ise buraya düşer anladımm </p>
        </div>
      );
}
export default NotFound404;