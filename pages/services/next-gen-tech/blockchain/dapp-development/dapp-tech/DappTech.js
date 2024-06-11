import style from "./dapptech.module.scss"
import dappTechList from "./dappTechList.json"
import dappTechUtilizeList from "./dappTechUtilizeList.json"
import Image from "next/image";
import DiscussCallAction from "../discuss-call-action/DiscussCallAction";
import React, {useEffect} from "react";
import AOS from 'aos';

export default function DappTech() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={style.dapp_tech_wrapper}>
            <DiscussCallAction/>
            <div className="container">
                <div className="section_title" data-aos="fade-up" data-aos-duration="2000">
                    <h2>DApp Development <span>Platforms</span> & <span>Technologies</span> We Work With</h2>
                </div>
                <div className={style.dapp_tech_list}>
                    <ul className="list-none flex flex-wrap">
                        {
                            dappTechList.map(({dappIcon,dappTitle},index)=>{
                                return(
                                    <li key={index} data-aos="flip-left" data-aos-duration="2000">
                                        <Image width={41} height={79} src={dappIcon} alt="dappIcon"/>
                                        <h4>{dappTitle}</h4>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={`flex items-center ${style.dapp_tech_utilize}`}>
                    <h3 data-aos="fade-left" data-aos-duration="2000">DApp Development Tools We Utilize</h3>
                    <ul className="list-none flex flex-wrap">
                        {
                            dappTechUtilizeList.map(({dappIcon,dappTitle},index)=>{
                                return(
                                    <li key={index} data-aos="fade-right" data-aos-duration="2000">
                                        <section>
                                            <Image width={41} height={79} src={dappIcon} alt="dappIcon"/>
                                            <h4>{dappTitle}</h4>
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