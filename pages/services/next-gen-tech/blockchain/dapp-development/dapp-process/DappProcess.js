import style from "./dappProcess.module.scss"
import dappProcessList from "./dappProcessList.json"
import React, {useEffect} from "react";
import AOS from 'aos';
export default function DappProcess() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={style.dapp_process_wrap}>
            <div className="container">
                <div className="section_title" data-aos="fade-up" data-aos-duration="2000"><h2><span>DApp Development</span> Processes</h2></div>
                <ul className="list-none flex flex-wrap">
                    {
                        dappProcessList.map(({title,description},index)=>{
                            return(
                                <li key={index} data-aos="flip-left" data-aos-duration="2000">
                                    <section>
                                        <h3>{title}</h3>
                                        <p>{description}</p>
                                    </section>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}