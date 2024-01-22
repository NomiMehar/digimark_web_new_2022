import style from "./aboutNftGame.module.scss"
import Image from "next/image";
import aboutImage from "../../../../../../public/assets/images/services/nft-game-about.png"
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
                        <p>Gamesdapp exclusive NFT Game Development Company provides NFT Gaming Development Solutions and Services that help you to launch an NFT Gaming Platform involving a customized blockchain network. We provide the agile development process in the NFT Gaming Platform Development that invites millions of players to invest in collectibles, art, and other virtual goods. For an entrepreneur, who wants to build an NFT gaming platform at an affordable cost, We offer a 100 % White label NFT Gaming Solution that can earn in-game rewards and purchase and sell additional gaming aids.</p>
                        <Link href="#" className={`contact_btn ${style.contact_btn}`}>Get a quote now <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                    </section>
                </div>
            </div>
        </>
    )
}