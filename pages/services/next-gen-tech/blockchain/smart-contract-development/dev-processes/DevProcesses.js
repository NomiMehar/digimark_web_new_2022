import style from "./devProcesses.module.scss";
import devProcessList from "./devProcessList.json"
import {useState} from "react";
import React, {useEffect} from "react";
import AOS from 'aos';

export default function DevProcesses() {
    useEffect(() => {
        AOS.init();
    }, [])
    const [tabs, setTabs] = useState(0);
    return(
        <div className={`flex flex-wrap direction-column ${style.devprocesses_wrap}`}>
            <div className="container">
                <div className="white section_title"  data-aos="fade-up"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="2000">
                    <h2>Our Smart Contract <br/>
                        development processes</h2>
                </div>
                <div className={`flex ${style.devprocess_list}`}>
                    <ul className="flex direction-column list-none">
                        {
                            devProcessList.map(({processTitle},index)=>{
                                return(
                                    <li key={`customer-${index}`}  data-aos="fade-left"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="1000">
                                        <button
                                            onClick={() => setTabs(index)}
                                            className={` ${style.tab_btn} ${ tabs === index ? `${style.active}` : ""}`}
                                        >
                                            {processTitle}
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {
                        devProcessList.map(({processDescription}, index) => {
                            if(tabs===index) {
                                return (
                                    <p key={index}  data-aos="fade-right"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="2000">{processDescription}</p>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}