import style from "./IndustriesWeServe.module.scss";
import React, {useEffect, useState} from "react";
import industriesWeServeList from "./IndustriesWeServe.json"
import AOS from "aos";
import Image from "next/image";
export default function IndustriesWeServe(props) {
    const [tabs, setTabs] = useState(0);
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`flex flex-wrap direction-column ${style.industries_wrapper} ${style[props.classes]}`}>
            <div className="container">
                <div className={`section_title ${style.section_title}`} data-aos="fade-up" data-aos-duration="2000">
                    <h2><span>Industries</span> We Serve</h2>
                </div>
                <div className={style.ar_tech_stack_wrapper}>
                    <div
                        className={style.ar_tech_stack}
                        data-aos="flip-up"
                        data-aos-duration="1000"
                    >
                        <ul className="list-none flex">
                            {
                                industriesWeServeList.map(({tab_button},index)=>{
                                    return(
                                        <li key={`custom-${index}`} data-aos="fade-down" data-aos-duration="1000">
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
                    <div className={style.ar_tech_list}>
                        <ul className="list-none flex flex-wrap">
                            {
                                industriesWeServeList.map(({tab_title,tab_content,tabImg}, index) => {
                                    if(tabs===index) {
                                        return (
                                            <li className="flex items-center">
                                                <section key={index}>
                                                    <h3>{tab_title}</h3>
                                                    <p>{tab_content}</p>
                                                </section>
                                                <Image src={tabImg} width={468} height={267} alt="industries"/>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}