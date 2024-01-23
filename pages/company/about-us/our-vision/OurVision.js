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
                        <p>Our vision is to empower businesses of all sizes with sustainable growth and transformation through our digital software solutions. By embracing the latest innovations, we lead the technology frontier, crafting customized solutions that cater to our clients' digital needs.</p>
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
                        <p>DigiMark's mission is to boost success with innovative digital transformation solutions to help businesses overcome complex business challenges. Let us be your credible technology leader on your digital transformation journey!</p>
                    </div>
                </div>
            </div>
        </>
    );
};