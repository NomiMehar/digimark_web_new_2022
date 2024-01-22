import React from "react";
import DeveloperStandout from "../developer-standout/DeveloperStandout";
import style from "./ProductPower.module.scss";
export default function ProductPower() {
  return (
    <div className="container">
        <div className={style.product_power}>
        <div className={style.product_inner}>
        <div className={`flex items-center ${style.product_padding}`}>
            <h4>The Power of <br/>
            <span>Product Design</span></h4>
            <div className={style.description}>
            <p>
            Today’s customers expect nothing less than great products. According to <span>Forbes</span>, over <span>250,000</span> new products are launched globally every year. With this level of competition in <span>Digital world</span>, businesses need to ensure they can create products that has lasting value and strategic to their business goals.</p>
            <p>
            Your products are the physical manifestation of your brand, and a well designed product that combines <span>iconic forms, innovative solutions</span> and <span>engaging user experiences</span> will deliver what your brand promises to your customers.
            </p>
            </div>
        </div>
        <DeveloperStandout/>
        </div>
        </div>
    </div>
  )
}
