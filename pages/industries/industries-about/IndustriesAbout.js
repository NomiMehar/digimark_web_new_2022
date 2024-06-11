import style from "./industriesAbout.module.scss";
import Image from "next/image";
import whiteArrow from "../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";
import React from "react";

export default function IndustriesAbout() {
    return(
        <div className={style.industries_about}>
            <div className="container flex justify-between">
                <section>
                    <h2>Every <span>Industry</span> Is Unique</h2>
                    <span>we provide <span>custom software solutions</span> to meet the unique demands of your industry.</span>
                </section>
                <section>
                    <p>We excel at cutting-edge solutions and personalized software services to meet the distinct requirements of various industries.</p>
                    <Link href="#contactForm" className={`contact_btn ${style.contact_btn}`}>Talk to our expert <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                </section>
            </div>
        </div>
    )
}