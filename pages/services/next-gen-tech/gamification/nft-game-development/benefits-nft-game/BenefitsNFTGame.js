import style from "./benefitsNftGame.module.scss"
import beneNFTGame from "./beneNFTGame.json"
import Image from "next/image";
import aboutImage from "../../../../../../public/assets/images/services/bene_nft_img.webp"
import sectionShapeImage from "../../../../../../public/assets/images/services/section_shape_bg.webp"
import Link from "next/link";
import React from "react";

export default function BenefitsNFTGame() {
    return(
        <>
            <div className={style.benefits_nft_game}>
                <div className="container">
                    <div className="section_title">
                        <h2><span>Benefits</span> of NFT Game <br/>Development</h2>
                    </div>
                    <div className={style.benefits_nft_text}>
                        <Image src={aboutImage} alt="img"/>
                        <div className={style.benefits_nft}>
                            <ul className="list-none flex flex-wrap">
                                {
                                    beneNFTGame.map(({imageIcon,iconText},index)=>{
                                        return(
                                            <>
                                                <li key={index}>
                                                    <section>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="43" viewBox="0 0 44 43" fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.0301 30.0556C29.8841 30.3413 28.6852 30.493 27.4507 30.493C19.3065 30.493 12.7043 23.8907 12.7043 15.7465C12.7043 14.7887 12.7956 13.8522 12.97 12.9452C14.1159 12.6595 15.3149 12.5078 16.5493 12.5078C24.6936 12.5078 31.2958 19.11 31.2958 27.2543C31.2958 28.2121 31.2045 29.1486 31.0301 30.0556ZM32.0999 29.7451C32.2288 28.9338 32.2958 28.1019 32.2958 27.2543C32.2958 18.5578 25.2459 11.5078 16.5493 11.5078C15.4077 11.5078 14.2944 11.6293 13.2218 11.8601C14.9272 5.60143 20.6516 1 27.4507 1C35.595 1 42.1972 7.60222 42.1972 15.7465C42.1972 22.2663 37.9661 27.7978 32.0999 29.7451ZM31.8808 30.8612C38.4206 28.9476 43.1972 22.9049 43.1972 15.7465C43.1972 7.04994 36.1473 0 27.4507 0C19.9953 0 13.75 5.18133 12.1193 12.1395C5.5795 14.0532 0.802856 20.0959 0.802856 27.2543C0.802856 35.9508 7.8528 43.0008 16.5493 43.0008C24.0048 43.0008 30.2501 37.8194 31.8808 30.8612ZM30.7783 31.1407C29.7056 31.3715 28.5924 31.493 27.4507 31.493C18.7542 31.493 11.7043 24.443 11.7043 15.7465C11.7043 14.8989 11.7712 14.067 11.9002 13.2557C6.03398 15.2029 1.80286 20.7345 1.80286 27.2543C1.80286 35.3985 8.40508 42.0008 16.5493 42.0008C23.3485 42.0008 29.0729 37.3993 30.7783 31.1407Z" fill="#1D4354"/>
                                                        </svg>
                                                        <Image width={100} height={100} src={imageIcon} alt="imageIcon"/>
                                                        <span>{iconText}</span>
                                                    </section>
                                                </li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <Image src={sectionShapeImage} alt="sectionShape"/>
            </div>
        </>
    )
}