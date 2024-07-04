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
                <div className="section_title" data-aos="fade-up"
             data-aos-easing="ease-in-sine"
             data-aos-duration="1000">
                    <h2><span>Engagement Models</span> We Offer</h2>
                    <p>We aim to offer flexible, cost-effective development models to meet your tailored project requirements within a timeline.</p>
                </div>
                <div className={style.choose_services}>
                    <ul className="list-none flex flex-wrap">
                        {
                            HiringModalList?.map(({whyChooseIcon,whyChooseTitle,whyChooseDetail,duration}, index)=>{
                                return(
                                    <li
                                        className="flex direction-column items-center"
                                        key={`choose-${index}`}
                                        data-aos="fade-up"
                                        data-aos-duration={duration}
                                    >
                                        <figure><Image src={whyChooseIcon} alt={whyChooseIcon} width={88} height={84} /></figure>
                                        <h3>{whyChooseTitle}</h3>
                                        <ul>
                                        {
                                                    whyChooseDetail?.map((list, index) => {
                                                        return <li key={index}>{list}</li>
                                                    })
                                                }
                                        </ul>
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