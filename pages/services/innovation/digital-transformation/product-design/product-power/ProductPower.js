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
            In <span>today's digital world,</span> customers demand exceptional and high-quality products. With over <span>250,000</span> new product launches annually, businesses must strive to create <span>valuable products</span> that align with their strategic goals.</p>
            <p>
            Your brand's products are a <span>tangible representation</span> of your brand. A product that <span>boasts exceptional design,</span> innovative solutions, and user-friendly experiences fulfills your <span>brand promise</span> to your customers.
            </p>
            </div>
        </div>
        <DeveloperStandout/>
        </div>
        </div>
    </div>
  )
}
