import style from "./whyNftGame.module.scss"
import React from "react";
import avatarImage from "../../../../../../public/assets/images/services/nft-avatar.webp"
import Image from "next/image";

export default function WhyNFTGame() {
    return(
        <>
            <div className={style.why_nft_game}>
                <div className="container flex items-center">
                    <Image src={avatarImage} alt="avatarImage"/>
                    <div className={style.why_nft_game_list}>
                        <h2>Why Digi<span>Mark</span> Developers!</h2>
                        <p>We have more than 150 developers, artists, and designers who have amazing experience in developing games effectively.</p>
                        <ul className="list-none flex flex-wrap">
                            <li>
                                <section>
                                    <span>Vast experience in the NFT token development, end-to-end NFT development of several range collectibles and digital content</span>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <span>Timely delivery is guaranteed for your project. We are the trusted choice of clients globally.</span>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <span>Connect with certified professionals with successful projects and great experience in the industry.</span>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <span>We provide guaranteed platform liquidity by calculating deployment protocols.</span>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <span>We ensure transparency in minting, designing, and launching the NFT tokens.</span>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <span>We help minimize the NFT Game Development cost that is paid during outsourcing projects. The product is made by the experts.</span>
                                </section>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}