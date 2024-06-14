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
                    <h2>Why Choose Digi<span>Mark</span> Developers as <br/><span>Your Blockchain Development Company?</span></h2>
                    <p>Choose DigiMark Developers for the best Blockchain Game Development Services to enjoy an amazing gaming experience. Our team of skilled employees is dedicated to delivering results and innovative solutions that make your gaming project better. We have always been transparent and prefer quality services. Make us your first choice.</p>
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
                    <Link href="/contact-us/#contactForm" className={`contact_btn ${style.contact_btn}`}>Let’s discuss your project <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                </div>
            </div>
        </div>
    )
}