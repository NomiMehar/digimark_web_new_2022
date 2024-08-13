import style from "./aboutNftGame.module.scss"
import Image from "next/image";
import aboutImage from "../../../../../../public/assets/images/services/nft-game-about.webp"
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";
import React from "react";

export default function AboutNFTGame() {
    return(
        <>
            <div className={style.about_nft_game}>
                <div className="container flex items-center">
                    <Image src={aboutImage} alt="img"/>
                    <section>
                        <h2><span>NFT</span> Game Development</h2>
                        <p>There has been an immense demand for NFT Game Development Services as many people are always looking for something exciting. DigiMark Developers would be your best choice as it’s one of the leading NFT game development companies and developing a reliable and protected NFT-based gaming place along with breakthrough tools and technologies. DigiMark Developers go through the complete market research for a perfect gaming strategy. Partner with us now and get the best development experience.</p>
                        <Link href="/contact-us/#contactForm" className={`contact_btn ${style.contact_btn}`}>Get a quote now <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                    </section>
                </div>
            </div>
        </>
    )
}