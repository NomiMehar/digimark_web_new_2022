import React, {useEffect} from "react";
import style from "./shopSolutions.module.scss"
import shopImage from "../../../../../../public/assets/images/services/shop-solution-image.png"
import Image from "next/image";
import AOS from 'aos';

export default function ShopSolutions() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={style.shop_solutions_wrapper}>
            <div className="container">
                <div className="section_title" data-aos="flip-up"
                                        data-aos-duration="2000">
                    <h2>Blockchain Application <br/>
                        Development On <span>shop-Solutions</span></h2>
                    <p>We are a renowned blockchain development company with extensive knowledge and expertise in building and managing decentralized solutions.</p>
                </div>
                <div className={`flex items-center ${style.shop_solutions_content}`}>
                    <section data-aos="fade-left"
                                        data-aos-duration="2000">
                        <p>We are one of the best <span>blockchain development companies</span> holding a team of dedicated full-stack developers and designers with years of experience developing enterprise-grade software solutions for clients worldwide.</p>
                        <p>We design and craft <span>custom blockchain solutions</span> using <span>EVM, Substrate, Cosmos, Solidity, or Hyperledger</span>. Developing business logic for running blockchain nodes, our specialists understand how to build a decentralized platform for <span>bridges, NFTs, metaverse, DEX, dApps, and tokens</span>. Our chief principles adhere to the best quality, and we have offered various blockchain-based solutions to many businesses globally in different countries.</p>
                    </section>
                    <Image data-aos="fade-right"
                                        data-aos-duration="2000" src={shopImage} alt="shopImage"/>
                </div>
            </div>
        </div>
    )
}