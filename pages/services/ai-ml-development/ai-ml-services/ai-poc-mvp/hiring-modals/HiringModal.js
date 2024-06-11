import React,{ useEffect } from "react";
import Image from "next/image";
import HiringModalList from "./HiringModalList.json"
import style from "./HiringModal.module.scss"
import AOS from 'aos';

export default function HiringModal() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`flex direction-column ${style.nft_services_wrapper}`}>
            <div className="container">
                <div className="section_title white" style={{textAlign:"left", width:"100%"}} data-aos="fade-up"
             data-aos-easing="ease-in-sine"
             data-aos-duration="1000">
                    <h2>AI PoC and <span>AI MVP Services</span></h2>
                    <p style={{marginLeft:"0",maxWidth:"80%"}}>Step into the future of innovation with our bespoke AI solutions. From preliminary exploration to full-scale implementation, we're committed to your successful AI transformation journey.</p>
                </div>
                <div className={style.choose_services}>
                    <ul className="list-none flex flex-wrap">
                        {
                            HiringModalList?.map(({whyChooseIcon,whyChooseTitle,whyChooseDesc,duration}, index)=>{
                                return(
                                    <li
                                        className="flex direction-column items-center"
                                        key={`choose-${index}`}
                                        data-aos="fade-up"
                                        data-aos-duration={duration}
                                    >
                                        <figure><Image src={whyChooseIcon} alt={whyChooseIcon} width={88} height={84} /></figure>
                                        <h3>{whyChooseTitle}</h3>
                                        <p>{whyChooseDesc}</p>
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