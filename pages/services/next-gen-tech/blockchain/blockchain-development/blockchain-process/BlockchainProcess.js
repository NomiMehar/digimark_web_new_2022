import React, {useEffect} from "react";
import {useState} from "react";
import style from "./blockchainProcess.module.scss"
import blockchainProcessList from "./blockchainProcessList.json"
import AOS from 'aos';
import Image from "next/image";

export default function BlockchainProcess() {
    const [tabs, setTabs] = useState(0);
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={style.blockchain_process_wrap}>
            <div className="container">
                <div className="section_title" data-aos="fade-up"
                                        data-aos-duration="2000">
                    <h2><span>Process</span> of blockchain development</h2>
                    <p>We collaborate closely to grasp business needs as we are committed to providing top-notch outcomes & crafting personalized blockchain solutions.</p>
                </div>
                <div className="flex">
                    <div className={style.blockchain_process_list} data-aos="fade-left"
                                        data-aos-duration="2000">
                        <ul className="list-none">
                            {
                                blockchainProcessList.map(({process_name},index)=>{
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
                    <div className={style.blockchain_process_content} data-aos="fade-right"
                                        data-aos-duration="2000">
                        {
                            blockchainProcessList.map(({processImg, process_description}, index) => {
                                if(tabs===index) {
                                    return (
                                        <div className="flex direction-column" key={`tab-content-${index}`}>
                                            <img src={processImg} alt="processImg"/>
                                            <p>{process_description}</p>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}