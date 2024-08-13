import style from "./whyAR.module.scss"
import mainImage from "../../../../../../public/assets/images/services/why-ar.webp"
import Image from "next/image";
import React, {useEffect} from "react";
import AOS from 'aos';

export default function WhyAR() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`flex flex-wrap ${style.why_ar_wrapper}`}>
            <div className="container">
                <div className="section_title" data-aos="fade-up" data-aos-duration="2000">
                    <h2>Why Is <span>AR, VR & MR</span> <br/>Important For Business?</h2>
                </div>
                <div className={`flex flex-wrap ${style.why_ar_wrap}`}>
                    <figure data-aos="fade-left" data-aos-duration="2000">
                        <Image src={mainImage} alt="mainImage"/>
                    </figure>
                    <div className={style.why_ar_content} data-aos="fade-right" data-aos-duration="2000">
                        <p>AR, VR, and MR are trending technologies with unmatched features that can bring significant benefits to various industries. By enabling businesses to experience the digital and virtual world in the real world, they can improve productivity, enhance customer engagement, and open up new opportunities for growth.</p>
                        <ul className="list-none">
                            <li><span>Enhance business efficiency</span></li>
                            <li><span>Enhance sales and generate revenue</span></li>
                            <li><span>Great chance to be mobile & enter the digital market</span></li>
                            <li><span>Increase Customer Engagement</span></li>
                            <li><span>Connect Consumers in Real-time</span></li>
                            <li><span>Prime opportunity stay competitive</span></li>
                            <li><span>Improve brand Value</span></li>
                            <li><span>Enhance Customer Experienced</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}