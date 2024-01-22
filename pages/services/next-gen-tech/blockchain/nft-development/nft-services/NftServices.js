import React,{ useEffect } from "react";
import Image from "next/image";
import ntfServicesList from "./nftServicesList.json"
import style from "./nftServices.module.scss"
import AOS from 'aos';

export default function NftServices() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`flex direction-column ${style.nft_services_wrapper}`}>
            <div className="container">
                <div className="section_title" data-aos="fade-up"
             data-aos-easing="ease-in-sine"
             data-aos-duration="1000">
                    <h2><span>NFT Development</span> Services</h2>
                </div>
                <ul className="list-none flex flex-wrap">
                    {
                        ntfServicesList.map(({boxTitle,boxImage}, index)=>{
                            return(
                                <li key={index} data-aos="fade-up"
                                data-aos-duration="2000">
                                    <section>
                                        <Image src={boxImage} alt={boxImage} width={50} height={50} />
                                        <h3>{boxTitle}</h3>
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