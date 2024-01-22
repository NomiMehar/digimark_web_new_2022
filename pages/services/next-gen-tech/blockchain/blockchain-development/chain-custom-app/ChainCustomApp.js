import React, {useEffect} from "react";
import style from "./chainCustomApp.module.scss"
import chainCustomAppList from "./chainCustomAppList.json"
import AOS from 'aos';

export default function ChainCustomApp() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`defi_improve ${style.chain_custom_wrapper}`}>
            <div className="container">
                <div className={`section_title white ${style.title}`} data-aos="fade-left"
                                        data-aos-duration="2000">
                    <h2>Top <span>Blockchain Development</span> Company That Build’s Custom Apps</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Et feugiat pretium ultricies purus ut nunc a. Proin neque amet sed dolor. Non integer arcu sit imperdiet vitae id purus. Nunc leo est ornare donec. Convallis non praesent tristique habitant duis bibendum. In fermentum nibh ultrices pharetra.</p>
                </div>
                <div className={style.chain_custom_app}>
                    <ul className="list-none flex flex-wrap">
                        {
                            chainCustomAppList.map(({title,description},index)=>{
                                return(
                                    <li key={index}>
                                        <section data-aos="fade-up"
                                        data-aos-duration="2000">
                                            <h3>{title}</h3>
                                            <p>{description}</p>
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