import style from "./industriesHealth.module.scss";
import Image from "next/image";
import React from "react";
import whiteArrow from "../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import healthImage1 from "../../../../public/assets/images/industries/health1.jpg";
import healthImage2 from "../../../../public/assets/images/industries/health2.jpg";
import healthImage3 from "../../../../public/assets/images/industries/health3.jpg";
import healthImage4 from "../../../../public/assets/images/industries/health4.jpg";
import Link from "next/link";

export default function IndustriesHealth() {
    return(
        <>
            <div className={style.industries_health}>
                <div className="container">
                    <div className={`section_title white ${style.section_title}`}>
                        <h2>Custom Healthcare Software Development <span>case studies</span></h2>
                    </div>
                    <div className={style.industries_health_list}>
                        <ul className="list-none flex flex-wrap">
                            <li><Image src={healthImage1} alt="healthImage"/></li>
                            <li><Image src={healthImage2} alt="healthImage"/></li>
                            <li><Image src={healthImage3} alt="healthImage"/></li>
                            <li><Image src={healthImage4} alt="healthImage"/></li>
                        </ul>
                    </div>
                    <div className="center">
                        <Link href="/industries/#caseStudies" className={`contact_btn`}>Explore more case studies <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}