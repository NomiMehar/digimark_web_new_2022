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
                        <h2>Why <span>DigiMark Developers</span></h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Commodo elementum dictum metus placerat euismod scelerisque vitae praesent nulla. Sit feugiat pellentesque vivamus pharetra at donec amet mattis quis. Duis amet amet id at amet. Nibh morbi nibh vel orci euismod ut amet. Feugiat vitae erat nibh semper. Condimentum sed ornare egestas pellentesque.</p>
                    <ul className="list-none list-style-arrow">
                        <li>Flexibility</li>
                        <li>Scalability</li>
                        <li>Effectiveness</li>
                        <li>Proactive monitoring</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit</li>
                        <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}