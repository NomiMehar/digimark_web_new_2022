import style from "./saasIndustriesServe.module.scss";
import saasIndustriesList from "./SaasIndustriesServeLists.json"
import React from "react";
import Image from "next/image";

export default function SaasIndustriesServe() {
    return(
        <div className={style.sass_industries_wrapper}>
            <div className="container flex items-center">
                <div className={style.section_title}>
                    <h2>Industries We <span>Serve</span></h2>
                    <p>We are committed to delivering highly competent applications that drive exceptional results by fixing your customers' issues. With a team of skilled experts, we specialize in finding scalable solutions for all of your business needs.</p>
                </div>
                <div className={style.content_list}>
                    <ul className="list-none flex flex-wrap">
                        {
                            saasIndustriesList.map(({listImage,listImageText},index)=>{
                                return(
                                    <li key={index}>
                                        <figure>
                                            <img src={listImage} alt="listImage"/>
                                            <span>{listImageText}</span>
                                        </figure>
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