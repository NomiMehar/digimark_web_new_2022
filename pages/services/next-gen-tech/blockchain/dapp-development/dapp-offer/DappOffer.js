import style from "./dappOffer.module.scss"
import dappBenefitsList from "./dappOfferList.json"
import React, {useEffect} from "react";
import AOS from 'aos';
import Image from "next/image";

export default function DappOffer() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={style.offer_wrapper}>
            <div className="container">
                <div className="section_title white" data-aos="fade-up" data-aos-duration="2000">
                    <h2><span>What We Offer</span></h2>
                    <p>DigiMark Developers brings to the table a range of dapp development options, from building a dapp from scratch to consultancy and support.</p>
                </div>
                <div className={style.offer_list}>
                    <ul className="list-none flex flex-wrap">
                        {
                            dappBenefitsList.map(({title, img, description},index)=>{
                                return(
                                    <li key={index} data-aos="flip-left" data-aos-duration="2000">
                                        <section>
                                            <Image width={100} height={100} src={img} alt="img"/>
                                            <Image width={100} height={100} className={style.dapp_img} src={img} alt="img"/>
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
        </div>
    )
}