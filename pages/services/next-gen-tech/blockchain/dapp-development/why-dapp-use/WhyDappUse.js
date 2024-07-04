import style from "./whyDappUse.module.scss"
import whyDappUseList from "./whyDappUseList.json"
import whyDappImage from "../../../../../../public/assets/images/services/why-dapp-image.jpg"
import Image from "next/image";
import React, {useEffect} from "react";
import AOS from 'aos';
export default function WhyDappUse() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={style.why_dapp_wrapper}>
            <div className="container">
                <div className="section_title" data-aos="fade-up" data-aos-duration="2000">
                    <h2><span>Why use</span> us for <br/>DApp Development</h2>
                </div>
                <div className={style.dapp_use_list}>
                    <ul className="list-none flex flex-wrap">
                        {
                            whyDappUseList.map(({title},index)=>{
                                return(
                                    <li key={index} data-aos="fade-down" data-aos-duration="2000">
                                        <section className="flex items-center">
                                            <h3>{title}</h3>
                                        </section>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <Image data-aos="fade-up" data-aos-duration="2000" src={whyDappImage} alt="whyDappImage"/>
            </div>
        </div>
    )
}