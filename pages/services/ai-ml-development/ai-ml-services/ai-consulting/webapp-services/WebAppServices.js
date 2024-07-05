import React, {useEffect} from "react";
import {useState} from "react";
import style from "./WebAppServices.module.scss"
import webAppServicesList from "./WebAppServicesList.json"
import AOS from 'aos';
import Image from "next/image";
import Link from "next/link";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";

export default function WebAppServices() {
    const [tabs, setTabs] = useState(0);
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={style.web_app}>
            <div className="container">
                <div className={`section_title ${style.section_title}`} data-aos="fade-up" data-aos-duration="2000">
                    <h2>We Implement AI Across <br /> <span>Various Industries</span></h2>
                    <p>We continuously optimize business processes through the strategic implementation of AI, leading to increased efficiency and cost reduction.</p>
                </div>
            </div>
            <div className={style.webapp_background}>
                <div className="container">
                <div className="flex">
                    <div className={style.webapp_process_list} data-aos="fade-left"
                                        data-aos-duration="2000">
                        <ul className="list-none">
                            {
                                webAppServicesList.map(({process_name},index)=>{
                                    return(
                                        <li key={`customer-${index}`}>
                                            <button
                                                onClick={() => setTabs(index)}
                                                className={` ${style.tab_btn} ${ tabs === index ? `${style.active}` : ""}`}
                                            >
                                                {process_name}
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={style.webapp_process_content} data-aos="fade-right"
                                        data-aos-duration="2000">
                        {
                            webAppServicesList.map(({process_name, process_description,process_list}, index) => {
                                if(tabs===index) {
                                    return (
                                        <div className="flex direction-column" key={`tab-content-${index}`}>
                                            <h4>{process_name}</h4>
                                            <p>{process_description}</p>
                                            <ul className="list-none">
                                                {
                                                    process_list.map((process_list)=>{
                                                        return(
                                                            <li>{process_list}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <Link href="/contact-us/#contactForm" className={`contact_btn ${style.contact_btn}`}>Let’s discuss your project <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                </div>
            </div>            
        </div>
    )
}