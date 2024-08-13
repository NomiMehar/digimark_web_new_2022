import style from "./processNftGame.module.scss"
import React from "react";
import processImage from "../../../../../../public/assets/images/services/processImage.webp"
import Image from "next/image";

export default function ProcessNFTGame() {
    return(
        <>
            <div className={style.process_nft_game}>
                <div className="container">
                    <div className="section_title white">
                        <h2><span>Process</span> of NFT <br/>
                            Game Development</h2>
                        <p>You are just simple four steps away to kick start your dream project with us:</p>
                    </div>
                    <Image src={processImage} alt="processImage"/>
                </div>
            </div>
        </>
    )
}