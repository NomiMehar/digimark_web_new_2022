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
                <div className="section_title white" data-aos="fade-up"
             data-aos-easing="ease-in-sine"
             data-aos-duration="1000">
                    <h2>Our <span>Engagement Model</span></h2>
                    <p>Unlock your true potential, leverage the best of technology, and create applications based on a modern algorithm with our experts.</p>
                </div>
                <div className={style.choose_services}>
                    <ul className="list-none flex flex-wrap">
                        {
                            HiringModalList?.map(({whyChooseTitle,whyChooseDetail,duration}, index)=>{
                                return(
                                    <li
                                        className="flex direction-column items-center"
                                        key={`choose-${index}`}
                                        data-aos="fade-up"
                                        data-aos-duration={duration}
                                    >
                                        <h3>{whyChooseTitle}</h3>
                                        <p>{whyChooseDetail}</p>
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