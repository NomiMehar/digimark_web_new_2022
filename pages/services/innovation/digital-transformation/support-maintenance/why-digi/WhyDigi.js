import style from "./whyDigi.module.scss";
import {useState} from "react";
import Image from "next/image";
import image from "../../../../../../public/assets/images/services/why-digi.png"

export default function WhyDigi() {
    return(
        <div className={style.why_digi}>
            <div className="container flex items-center">
                <figure>
                    <Image src={image} alt="image"/>
                </figure>
                <div className={style.why_digi_content}>
                    <div className={`section_title ${style.section_title}`}>
                        <h2>Why Choose <span>DigiMark</span> Software Support & Maintenance?</h2>
                    </div>
                    <p>Wish to implement new features in your project, or update legacy code with modern technologies, our Customer Care department is ready to help. Our application maintenance & support services have been created to improve and extend the lifetime of your solution.
                    Through our strategic service components, we offer effective solutions to streamline process timelines, enabling you to achieve greater efficiency and reduce cycle times.
                    </p>
                    <ul className="list-none list-style-arrow">
                        <li>Flexibility</li>
                        <li>Scalability</li>
                        <li>Effectiveness</li>
                        <li>Proactive monitoring</li>
                        <li>Reliability</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}