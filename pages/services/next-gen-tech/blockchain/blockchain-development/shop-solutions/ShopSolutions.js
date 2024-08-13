import React, {useEffect} from "react";
import style from "./shopSolutions.module.scss"
import shopImage from "../../../../../../public/assets/images/services/shop-solution-image.webp"
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
                    <p>Being one of the best Blockchain Software Development Companies, we have the expertise to create and manage advanced decentralized solutions.</p>
                </div>
                <div className={`flex items-center ${style.shop_solutions_content}`}>
                    <section data-aos="fade-left"
                                        data-aos-duration="2000">
                        <p>At DigiMark, we're all about developing the <span>Best Blockchain App</span> solutions for businesses worldwide. With years of experience, our team of <span>full-stack developers</span> and <span>designers</span> are experts in EVM, Substrate, Cosmos, Solidity, and Hyperledger.</p>
                        <p>We personalize solutions for <span>individual clients,</span> upholding impeccable quality standards in every aspect of our work. We are proud to achieve exceptional outcomes that drive global business success across the world. If you're ready to see your <span>blockchain dreams</span> come true, we're here to make it a reality.</p>
                    </section>
                    <Image data-aos="fade-right"
                                        data-aos-duration="2000" src={shopImage} alt="shopImage"/>
                </div>
            </div>
        </div>
    )
}