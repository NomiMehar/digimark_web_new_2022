import style from "./mobileApp.module.scss"
import React, {useEffect, useState} from "react";
import CustomAppData from "./CustomAppData.json";
import Link from "next/link";
import Image from "next/image";
import greenArrow from "../../../../../../public/assets/images/services/green-arrow.svg"
import AOS from 'aos';

export default function MobileApps() {
    const [tabs, setTabs] = useState(0);
    useEffect(() => {
        AOS.init();
    }, [])

    return(
        <div className={`flex direction-column ${style.mobile_custom_app}`}>
            <div className="container">
                <div
                    className="section_title flex direction-column white"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <h2>Top <span>Mobile App Development</span> Company That Build’s Custom Apps</h2>
                    <p>Providing disruptive and game-changing experiences to assist businesses in their digital transformation journey.</p>
                </div>
                <div className="flex direction-column">
                    <div
                        className={style.top_tab_bar}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <ul className="list-none flex">
                            {
                                CustomAppData.map(({tab_button},index)=>{
                                    return(
                                        <li key={`custom-${index}`}>
                                            <button
                                                onClick={() => setTabs(index)}
                                                className={`${ tabs === index ? `${style.active}` : ""}`}
                                            >
                                                {tab_button}
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {
                        CustomAppData.map(({tab_button,custom_description,learn_more_link,custom_list,techImagesList}, index) => {
                            if(tabs===index) {
                                return (
                                    <div className={`flex items-center ${style.content_box_flex}`}  key={`custom-${index}`}>
                                        <div
                                            className={style.content_box_wrap}
                                            data-aos="fade-right"
                                            data-aos-duration="1000"
                                        >
                                            <h3>{tab_button}</h3>
                                            <p>{custom_description}</p>
                                            <ul className="list-none">
                                                {
                                                    custom_list.map((custom_list,index)=>{
                                                        return(
                                                            <li key={index}><i className="fa fa-check"></i>{custom_list}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <section className="flex">
                                                <Link href="/pages" className="transparent-btn">Let Build with us <Image src={greenArrow} alt={greenArrow} width={13} height={16}/></Link>
                                                <Link href={learn_more_link} className="transparent-btn learnmore">Learn More <Image src={greenArrow} alt={greenArrow} width={13} height={16}/></Link>
                                            </section>
                                        </div>
                                        <div
                                            className={`${style.apps_list}`}
                                            data-aos="fade-left"
                                            data-aos-duration="1000"
                                        >
                                            <ul className={`list-none flex flex-wrap`}>
                                                {
                                                    techImagesList.map(({techImg,techName}, index)=>{
                                                        return(
                                                            <li key={index}>
                                                                <Image src={techImg} alt={techImg} width={66} height={66}/>
                                                                <span>{techName}</span>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}