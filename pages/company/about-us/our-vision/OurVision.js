import React, {useEffect} from "react";
import style from "./OurVision.module.scss"
import storyImage from "../../../../public/assets/images/company/vision-img.png"
import missionImage from "../../../../public/assets/images/company/mission-img.svg"
import Image from "next/image";
import AOS from 'aos';

export default function OurVision () {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className={`flex direction-column ${style.vision_wrapper}`}>
                <div className="container flex items-center">
                    <div
                        className={style.vision_text}
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <h2>Our Vision</h2>
                        <p>We have a strong belief that inclusion of mobile technology and digitalisation of processes for any individual or a business will help them to ease their life so that they can be more focused on their Core Business functions.</p>
                    </div>
                    <figure
                        data-aos="zoom-in"
                        data-aos-duration="2000"
                    >
                        <Image src={storyImage} alt={storyImage} />
                    </figure>
                </div>
            </div>
            <div className={`flex direction-column ${style.vision_wrapper_simple}`}>
                <div className="container flex items-center">
                    <figure
                        data-aos="zoom-in"
                        data-aos-duration="2000"
                    >
                        <Image src={missionImage} alt={missionImage} />
                    </figure>
                    <div
                        className={style.vision_text}
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <h2>Our Mission</h2>
                        <p>We at RipenApps always focus on App Design & Dev Principles that guarantees to Engage Users, Optimize Experience, and Drive Conversions. We not only intend to build mobile application but generate more values.</p>
                    </div>
                </div>
            </div>
        </>
    );
};