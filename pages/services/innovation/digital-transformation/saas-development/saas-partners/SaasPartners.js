import style from "./saasPartners.module.scss";
import React, {useState} from "react";
import saasPartnersList from "./saasPartnersList.json";
import Image from "next/image";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";

export default function SaasPartners() {
    const [tabs, setTabs] = useState(0);
    return(
        <div className={style.sass_partners}>
            <div className="container">
                <div className={style.section_title}>
                    <h2>Why Choose Digi<span>Mark</span> Developers as <br/><span>Your SaaS Development Partner?</span></h2>
                    <p>DigiMark, one of the world's leading SaaS application development companies, skillfully builds highly competent applications that drive unexpected results. Our pool of talented experts allows us to find scalable solutions with greater ease.</p>
                </div>
                <div className={`${style.saas_partners_tabs} flex`}>
                    <div className={style.sass_partners_list}>
                        <ul className="list-none flex direction-column">
                            {
                                saasPartnersList.map(({partnerTitle},index)=>{
                                    return(
                                        <li key={`button-${index}`}>
                                            <button onClick={() => setTabs(index)} className={`flex direction-column justify-center ${ tabs === index ? `${style.active}` : ""}`}>
                                                {partnerTitle}
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={style.sass_partners_content_wrap}>
                        {
                            saasPartnersList.map(({partnerTitle,partnerDescription,mainImage},index)=>{
                                if(tabs===index) {
                                    return(
                                        <div key={`text-${index}`} className={`flex direction-column ${style.sass_partners_content}`} style={{ backgroundImage: "url(" + mainImage + ")"}}>
                                            <h3>{partnerTitle}</h3>
                                            <p>{partnerDescription}</p>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link href="#" className={`contact_btn ${style.contact_btn}`}>Let’s discuss your project <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                </div>
            </div>
        </div>
    )
}