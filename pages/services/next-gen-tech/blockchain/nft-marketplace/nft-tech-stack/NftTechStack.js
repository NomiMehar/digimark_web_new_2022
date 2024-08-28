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
                            <h2>Our NFT Marketplace <br/>Development <span>Tech Stack</span></h2>
                        </div>
                        <p data-aos="fade-right"
                    data-aos-duration="2000">Our tech stack for NFT marketplace development is a powerful combination of cutting-edge tools and technologies that enable us to create robust, scalable, and secure platforms for buying, selling, and trading digital assets.</p>
                    </section>
                    <Link href="/" className={`contact_btn ${style.contact_btn}`} data-aos="fade-left"
                    data-aos-duration="2000">GET FREE CONSULTATION <Image width={100} height={100} src="/assets/images/homepage/lets_talk/arrow.svg" alt="arrow" /></Link>
                </div>
                <ul className="list-none flex flex-wrap">
                    {
                        nftTechStackList.slice(0,1).map(({techTitle,techIcons}, index)=>{
                            return(
                                <li key={index} className={style.list_section} data-aos="fade-up"
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
                   <li className={style.grid_list}>
                   <ul className="list-none m-0">
                   <li className={style.grid_section}>
                   {
                        nftTechStackList.slice(1,4).map(({techTitle,techIcons}, index)=>{
                            return(
                                <li key={index}>
                                    <div className={`flex flex-wrap direction-column ${style.tech_boxes}`}>
                                        <h3>{techTitle}</h3>
                                        <section className="flex flex-wrap justify-between">
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
                   </li>
                   </ul>
                   </li>
                </ul>
            </div>
        </div>
    )
}