import style from "./Challenge.module.scss"
import mainImage from "../../../../../../public/assets/images/services/challenge.png"
import Image from "next/image";
import React, {useEffect} from "react";
import AOS from 'aos';

export default function Challenge() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`flex flex-wrap ${style.challenge_wrapper}`}>
            <div className="container">
                <div className={`flex flex-wrap ${style.challenge_wrap}`}>
                    <figure data-aos="fade-left" data-aos-duration="2000">
                        <Image src={mainImage} alt="mainImage"/>
                    </figure>
                    <div className={style.challenge_content} data-aos="fade-right" data-aos-duration="2000">
                    <div className={style.section_title} data-aos="fade-up" data-aos-duration="2000">
                    <h2>Challenges we solve</h2>
                </div>
                        <ul className="list-none">
                            <li>
                                <span>Maximize customer satisfaction</span>
                                <p>Employ personalized recommendations based on customer behavior, history,
                                and preferences</p>
                            </li>
                            <li>
                                <span>Mitigate risks and minimize losses</span>
                                <p>Eliminate fraudulent activity through real-time detection and flagging of
                                suspicious actions</p>
                            </li>
                            <li>
                                <span>Enhance operational efficiency</span>
                                <p>Address supply chain issues through accurate demand forecasting and optimized
                                inventory management, utilizing historical data and market trends</p>
                            </li>
                            <li>
                                <span>Strengthen business image</span>
                                <p>Monitor and improve your brand perception through analysis of data from social media,
                                customer reviews, and other sources</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}