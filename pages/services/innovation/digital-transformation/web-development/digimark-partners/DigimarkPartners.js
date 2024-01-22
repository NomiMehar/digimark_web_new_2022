import React from "react";
import style from "./DigimarkPartners.module.scss";
import Image from "next/image";
import partnersData from './PartnersData.json';
import reviewsData from './ReviewsData.json';
export default function DigimarkPartners() {
  return (
    <div className={style.digimark_partners}>
        <div className="container flex justify-between">
        <div className={style.technologies} data-aos="fade-right"
           data-aos-duration="2000">
            <h4>Why Partner With <br/> Digi<span>Mark</span> Developers?</h4>
            <p>With over 18+ years of experience, Fingent is focused on engineering high-quality, robust, and budget-friendly web applications for clients globally. Our team of professionals is well expertise in a wide range of technologies to serve all modern business needs.</p>
            <ul className={`list-none flex flex-wrap`}>
        {partnersData.map(({ img }, index) => {
            return (
                <li key={`business-${index}`} data-aos="fade-up"
                data-aos-duration="2000">
                    <Image src={img} width={100} height={100} alt="enterpriseimg" />
                </li>
            );
        })}
    </ul>
        </div>
        <div className={style.reviews}>
        <ul className={`list-none flex flex-wrap`}>
        {reviewsData.map(({ img,title,desc }, index) => {
            return (
                <li key={`business-${index}`} data-aos="fade-up"
                data-aos-duration="2000">
                   <div className={style.box}>
                   <Image src={img} width={100} height={100} alt="enterpriseimg" />
                    <h4>{title}</h4>
                    <p>{desc}</p>
                   </div>
                </li>
            );
        })}
    </ul>
        </div>
        </div>
</div>
  )
}
