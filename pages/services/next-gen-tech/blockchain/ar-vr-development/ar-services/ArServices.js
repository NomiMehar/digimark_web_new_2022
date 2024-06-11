import style from "./arServices.module.scss"
import Image from "next/image";
import React, {useEffect} from "react";
import AOS from 'aos';
export default function ArServices(props) {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className={`flex flex-wrap direction-column ${style.service_wrap}`}>
            <div className="container">
                <div className="section_title" data-aos="fade-up" data-aos-duration="2000">
                    <h2>{props.sectionTitle}</h2>
                    <p>{props.sectionDescription}</p>
                </div>
                <div className={`flex flex-wrap direction-column ${style.service_list}`}>
                    <ul className="list-none flex flex-wrap">
                        {
                            props.serviceList?.map(({serviceIcon,serviceTitle,serviceDetail}, index)=>{
                                return(
                                    <li key={index} data-aos="flip-right" data-aos-duration="2000">
                                        <section>
                                            <figure>
                                                <Image src={serviceIcon} width={32} height={32} alt="serviceIcon"/>
                                                <figcaption>
                                                    <h3>{serviceTitle}</h3>
                                                </figcaption>
                                            </figure>
                                            <p>{serviceDetail}</p>
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