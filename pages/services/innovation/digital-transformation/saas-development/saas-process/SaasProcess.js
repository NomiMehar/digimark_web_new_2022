import style from "./saasProcess.module.scss";
import saasProcessList from "./SaasProcessLists.json"
import React from "react";
import Image from "next/image";

export default function SaasProcess() {
    return(
        <div className={style.sass_process_wrapper}>
            <div className="container">
                <div className="section_title">
                    <h2>SaaS Applications <br/>Development <span>Process</span></h2>
                </div>
                <div className={style.process_sass_scroll}>
                    <div className={`flex ${style.sass_process}`}>
                        {
                            saasProcessList.map(({listImage,listImageText,lists},index)=>{
                                return(
                                    <section key={index}>
                                        <figure>
                                            <img src={listImage} alt="listImage"/>
                                            <span>{listImageText}</span>
                                        </figure>
                                        <ul className="list-none">
                                            {
                                                lists.map((lists,index)=>{
                                                    return(
                                                        <li key={`list-${index}`}>
                                                            {lists}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </section>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}