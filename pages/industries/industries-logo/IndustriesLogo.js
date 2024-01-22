import style from "./industriesLogo.module.scss";
import React from "react";
import Image from "next/image";
import industriesLogoList from "./industriesLogoList.json"
import playBtn from "../../../public/assets/images/services/playBtn.svg"

export default function IndustriesLogo() {
    return(
        <div className={style.industries_logo}>
            <div className="container">
                <div className="section_title"><h2>Our <span>Partners & Customers</span></h2></div>
                <div className={style.industries_logo_wrap}>
                    <ul className="list-none flex flex-wrap">
                        {
                            industriesLogoList.map(({logoImage},index)=>{
                                return(
                                    <li>
                                        <Image width={352} height={195} src={logoImage} alt="logoImage"/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={style.industries_video}>
                    <video autoPlay loop muted>
                        <source src="/assets/images/services/process.mp4" type="video/mp4" />
                    </video>
                    <section>
                        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="85" viewBox="0 0 90 85" fill="none">
                            <path d="M39.9502 0V19.2614C28.9184 19.2614 19.9749 28.204 19.9749 39.2358V44.9432H39.9502V84.8934H0V39.9502C0 17.8874 17.8861 0 39.9502 0Z" fill="white"/>
                            <path d="M89.8862 0V19.2614C78.8544 19.2614 69.9118 28.204 69.9118 39.2358V44.9432H89.8862V84.8934H49.936V39.9502C49.936 17.8874 67.8221 0 89.8862 0Z" fill="white"/>
                        </svg>
                        <h2>Customers can expect a flexible <br/>and cooperative team while <br/>working with DigiMark Developers</h2>
                        <div className="flex justify-between items-center">
                            <button><Image src={playBtn} alt="playBtn"/> Watch Video</button>
                            <h3>Muhammad Arslan <span>Senior Front-end Developer</span></h3>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}