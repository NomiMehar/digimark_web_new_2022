import style from "./arIndustries.module.scss";
import React, {useEffect} from "react";
import AOS from 'aos';
import arIndustriesList from "./arIndustries.json"
import Image from "next/image";

export default function ArIndustries(props) {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`flex flex-wrap direction-column ${style.ar_industries_wrap}`}>
            <div className="container">
                <div className="section_title" data-aos="fade-up" data-aos-duration="2000">
                    <h2><span>AR/VR & MR</span> for various industries</h2>
                </div>
                <div className={style.industries_list}>
                    <ul className="list-none flex flex-wrap">
                        {
                            arIndustriesList.map(({arImage,arTitle,arTitleList},index)=>{
                                return(
                                    <li key={`main-list-${index}`} data-aos="flip-right" data-aos-duration="2000">
                                        <figure>
                                            <Image src={arImage} width={252} height={252} alt="arImage"/>
                                            <h3>{arTitle}</h3>
                                        </figure>
                                        <section>
                                            <ul className="list-none mini-list">
                                                {
                                                    arTitleList.map((arTitleList,index)=>{
                                                        return(
                                                            <li key={`list-${index}`}>{arTitleList}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <h4>{arTitle}</h4>
                                        </section>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}