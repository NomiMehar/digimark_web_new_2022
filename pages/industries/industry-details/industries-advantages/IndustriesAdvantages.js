import style from "./industriesAdvantages.module.scss";
import Image from "next/image";
import React from "react";
import whiteArrow from "../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";

export default function IndustriesAdvantages() {
    return(
        <>
            <div className={style.industries_advantages}>
                <div className="container">
                    <div className={style.industries_call}>
                        <h3>Thinking about outsourcing medical software development? <span>Our team will have you covered</span></h3>
                        <Link href="/contact-us" className={`contact_btn`}>Contact us <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                    </div>
                    <div className="section_title">
                        <h2><span>Advantages</span> of Healthcare software</h2>
                    </div>
                    <ul className="list-none flex flex-wrap">
                        <li><span>Optimal health outcomes</span></li>
                        <li><span>Better patient <br /> engagement & loyalty</span></li>
                        <li><span>Reduced cost of care</span></li>
                        <li><span>Streamlined business <br /> processes</span></li>
                        <li><span>Enhanced security</span></li>
                        <li><span>Data-driven decisions</span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}