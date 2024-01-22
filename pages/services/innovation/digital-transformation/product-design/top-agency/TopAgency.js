import React from "react";
import style from "./TopAgency.module.scss";

export default function TopAgency() {
  return (
    <div className="container">
    <div className={`flex items-center ${style.top_agency}`}>
        <h4><span>DESIGN</span> TOP <br/> RATED AGENCY</h4>
        <p>We create <span>refined digital experiences</span> that help achieve your <span>business goals.</span></p>
    </div>
    </div>
  )
}
