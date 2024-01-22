import Image from "next/image";
import nftTechStackList from "./nftTechStackList.json"
import style from "./nftTechStack.module.scss"
import Link from "next/link";
import React,{useEffect} from "react";
import AOS from 'aos';

export default function NftTechStack() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`flex direction-column ${style.nft_tech_wrapper}`}>
            <div className="container">
                <div className="flex flex-wrap">
                    <section className={`flex ${style.nft_tech_title}`}>
                        <div className="section_title" data-aos="fade-left"
                    data-aos-duration="2000">
                            <h2>Our NFT Token <br/>Development <span>Tech Stack</span></h2>
                        </div>
                        <p data-aos="fade-right"
                    data-aos-duration="2000">Our NFT development company creates reliable NFT tokens and exchange platforms swiftly. Our NFT experts work together in different technological aspects towards the sole purpose of developing robust NFT platforms.</p>
                    </section>
                    <Link href="/" className={`contact_btn ${style.contact_btn}`} data-aos="fade-left"
                    data-aos-duration="2000">GET FREE CONSULTATION <img src="/assets/images/homepage/lets_talk/arrow.svg" alt="arrow" /></Link>
                </div>
                <ul className="list-none flex flex-wrap">
                    {
                        nftTechStackList.map(({techTitle,techIcons}, index)=>{
                            return(
                                <li key={index}  data-aos="fade-up"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1000">
                                    <div className={`flex flex-wrap direction-column ${style.tech_boxes}`}>
                                        <h3>{techTitle}</h3>
                                        <section className="flex flex-wrap">
                                            {
                                                techIcons.map(({iconImage, iconTitle},index)=>{
                                                    return (
                                                        <span className="flex items-center direction-column" key={`icons-${index}`}>
                                                            <Image src={iconImage} alt={iconImage} width={50} height={50} />
                                                            {iconTitle}
                                                        </span>
                                                    )
                                                })
                                            }
                                        </section>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}