import style from "./journey.module.scss"
import Image from "next/image";
import aboutCloud from "../../../../../../public/assets/images/services/journey_image.png"
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";
import React from "react";

export default function Journey() {
    return(
        <div className={style.journey_cloud_wrapper}>
            <div className="container">
                <div className={`flex items-center ${style.journey_about_cloud}`}>
                    <section>
                        <h2>Start Your DevOps Journey <br/> with Us</h2>
                        <p>Providing a pool of Cloud & DevOps services, to develop top-notch software solutions for businesses that perfectly fit your needs.</p>
                        <Link href="#" className={`contact_btn ${style.contact_btn}`}>Let’s get started <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                    </section>
                    <Image src={aboutCloud} alt="aboutCloud"/>
                </div>
            </div>
        </div>
    )
}