import style from "./BespokeProccess.module.scss"
import bespokeProccessList from "./BespokeProccessList.json"
import React, {useEffect} from "react";
import AOS from 'aos';
import Image from "next/image";

export default function BespokeProccess() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={style.bespoke_proccess_wrapper}>
            <div className="container">
                <div className={`section_title white ${style.title}`} data-aos="fade-up" data-aos-duration="2000">
                    <h2><span>Our Bespoke Development</span > Processes</h2>
                </div>
                <div className={style.bespoke_proccess_list}>
                    <ul className="list-none flex flex-wrap">
                        {
                            bespokeProccessList.map(({title, icon},index)=>{
                                return(
                                    <li key={index} data-aos="fade-down" data-aos-duration="2000">
                                        <img src={icon} alt="icon"/>
                                        <p>{title}</p>
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