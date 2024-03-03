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
                    <p>Revolutionize business with high-performing <span>SAAS solutions</span> tailored to your needs. Being a top SAAS Dev Company in the USA, we specialize in developing apps and redesigning existing apps with the help of our qualified and experienced developers who will draw you a roadmap effectively. Take the next big step in your business</p>
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