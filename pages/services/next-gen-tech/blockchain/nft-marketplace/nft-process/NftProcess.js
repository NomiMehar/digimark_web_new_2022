import style from "./nftProcess.module.scss"
import React,{useEffect} from "react";
import Image from "next/image";
import NftProcessData from './NftProcessData.json'
import AOS from 'aos';

export default function NftProcess() {
  useEffect(() => {
    AOS.init();
}, [])
    return(
        <div className={`flex flex-wrap ${style.nft_process}`}>
            <div className="container">
                <div className={`section_title white ${style.section_title_margin}`} data-aos="fade-up"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1000">
                    <h2>Our NFT development processes</h2>
                </div>
                <div className={`flex direction-column w-100 ${style.process_data}`}>
          <ul className="list-none flex w-100 justify-center" data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-sine">
            {NftProcessData.map(({ img, title }, index) => {
              return (
                  <li key={index} className="text-center" data-aos="flip-left"
                  data-aos-duration="2000">
                    <div className={style.image_back}>
                    <div className={style.image_wrapper}>
                    <Image src={img} alt="engagement_images" className="prsogfill" width={80} height={80}/>
                    </div>
                    </div>
                    <h3>{title}</h3>
                  </li>
              );
            })}
          </ul>
        </div>
            </div>
        </div>
    )
}