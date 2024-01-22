import style from "./saasServices.module.scss";
import saasServiceList from "./SaasServicesList.json";
import Link from "next/link";
import Image from "next/image";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import React from "react";

export default function SaasServices() {
    return(
        <div className={style.sass_service_wrapper}>
            <div className="container flex">
                <div className={`${style.section_title} section_title white`}>
                    <h2>Our <span>Services</span></h2>
                    <p>Our <span>SaaS software development</span> company offers development for new apps and re-architecting current apps for the SaaS environment. We ensure that when the SaaS product is out, we will continue to develop new project features and maintain the entire SaaS application. Some of our SaaS product development company services include:</p>
                    <Link href="#" className={`contact_btn ${style.contact_btn}`}>Let’s discuss your project <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                </div>
                <div className={style.services_list}>
                    <ul className="list-none flex flex-wrap">
                        {
                            saasServiceList.map(({listIcon,listTitle},index)=>{
                                return(
                                    <li key={index}>
                                        <section>
                                            <img src={listIcon} alt="listIcon"/>
                                            <h3>{listTitle}</h3>
                                        </section>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}