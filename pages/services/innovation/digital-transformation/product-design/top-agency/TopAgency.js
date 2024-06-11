import React from "react";
import style from "./TopAgency.module.scss";

export default function TopAgency() {
  return (
    <div className="container">
    <div className={`flex items-center ${style.top_agency}`}>
        <h4><span>DESIGN</span> TOP <br/> RATED AGENCY</h4>
        <p>We craft <span>refined digital solutions</span> to help you <span>accomplish your business</span> objectives.</p>
    </div>
    </div>
  )
}
