import style from "./dappUseCase.module.scss"
import dappUseCaseList from "./dappUseCaseList.json"
import React, {useEffect} from "react";
import AOS from 'aos';
import Image from "next/image";

export default function DappUseCase() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={style.dapp_usecase_wrapper}>
            <div className="container">
                <div className="section_title white" data-aos="fade-up" data-aos-duration="2000">
                    <h2>Decentralized application <span>use cases</span></h2>
                </div>
                <div className={style.dapp_usecase_list}>
                    <ul className="list-none flex flex-wrap">
                        {
                            dappUseCaseList.map(({title, icon},index)=>{
                                return(
                                    <li key={index} data-aos="fade-down" data-aos-duration="2000">
                                        <img src={icon} alt="icon"/>
                                        <h3>{title}</h3>
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