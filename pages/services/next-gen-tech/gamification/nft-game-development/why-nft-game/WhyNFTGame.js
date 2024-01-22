import style from "./whyNftGame.module.scss"
import React from "react";
import avatarImage from "../../../../../../public/assets/images/services/nft-avatar.png"
import Image from "next/image";

export default function WhyNFTGame() {
    return(
        <>
            <div className={style.why_nft_game}>
                <div className="container flex items-center">
                    <Image src={avatarImage} alt="avatarImage"/>
                    <div className={style.why_nft_game_list}>
                        <h2>Why Digi<span>Mark</span> Developers!</h2>
                        <p>Our team of 150+ software engineers, artists and designers have immense experience in developing games for more than 7 years.</p>
                        <ul className="list-none flex flex-wrap">
                            <li>
                                <section>
                                    <span>Experience in NFT Token Development – End-to-end NFT development for a wide range of collectibles and digital content</span>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <span>We guarantee the timely delivery of your project. This is a fundamental element that makes us a trusted choice for global clients</span>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <span>A sizable team of certified specialists with successful projects under their belt</span>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <span>Guaranteed platform liquidity through calculated deployment protocols</span>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <span>Total transparency in designing, minting, and launching the Non-Fungible Tokens</span>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <span>Reduce your nft game development cost outsourcing the project, a product made by professionals.</span>
                                </section>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}