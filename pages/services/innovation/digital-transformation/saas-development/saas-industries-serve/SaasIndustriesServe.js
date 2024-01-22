import style from "./saasIndustriesServe.module.scss";
import saasIndustriesList from "./SaasIndustriesServeLists.json"
import React from "react";

export default function SaasIndustriesServe() {
    return(
        <div className={style.sass_industries_wrapper}>
            <div className="container flex items-center">
                <div className={style.section_title}>
                    <h2>Industries We <span>Serve</span></h2>
                    <p>We cater to a wide range of industries by leveraging our wide domain expertise. Thus, helping us to deliver perfect solutions that match specific business requirements.</p>
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