import React, {useEffect} from "react";
import style from './BespokeSoftware.module.scss'
import bespokeSoftwareList from './BespokeSoftwareList.json'
import bespokeImgList from './BespokeImgList.json'
import Image from 'next/image'
import AOS from "aos";

export default function BespokeSoftware() {
  useEffect(() => {
    AOS.init();
}, [])
  return (
    <>
    <div className={style.bespoke_software}>
    <div className={`container ${style.container}`}>
    <h2 data-aos="fade-right"
             data-aos-duration="2000"><span>Bespoke </span> Software <br/> Development</h2>
    <div className={style.ribbon_apple}>
    <Image className={style.ribbon} src='/assets/images/services/ribbon.svg' width={100} height={100} alt='ribbon' />
    <Image className={style.apple} src='/assets/images/services/apple.svg' width={100} height={100} alt='apple' />
    </div>
    <ul className="list-none flex">
    {
        bespokeSoftwareList.map(({description},index)=>{
            return(
                <li key={index} data-aos="flip-up"
                data-aos-duration="2000">
               <p>{description}</p>
            </li>
            )
        })
    }
    </ul>
    <div className={style.bespoke_img}>
    <ul className="list-none flex">
    {bespokeImgList.map(({bespokeImg},index)=>{
                 return(
                    <li key={index} data-aos="fade-top"
                    data-aos-duration="2000">
                    <Image src={bespokeImg} width={100} height={100} alt='bespokeImg' />
                 </li>
                )
               })}
    </ul>
    </div>
    </div>
    </div>
    </>
  )
}
