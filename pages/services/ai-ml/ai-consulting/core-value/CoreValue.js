import React, {useEffect} from "react";
import style from "./CoreValue.module.scss"
import coreValueList from "./coreValueList.json";
import AOS from 'aos';

export default function CoreValue () {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className={`flex direction-column ${style.core_value_wrapper}`}>
            <div className="container">
                <div className={`flex direction-column ${style.core_value}`}>
                    <ul className={`list-none flex flex-wrap`}>
                        <li
                            className={style.core_section_title}
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            <h2>Our <span>AI Approach</span></h2>
                            <p>Integrate specialised technology with corporate goals to penetrate the largest mobile app market globally.</p>
                        </li>
                        {
                            coreValueList.map(({no,coreTitle,coreDescription},index)=>{
                                return(
                                    <li
                                        key={`core-${index}`}
                                        data-aos="fade-up"
                                        data-aos-duration="2000"
                                    >
                                        <section>
                                            <span>{no}</span>
                                            <h3>{coreTitle}</h3>
                                            <p>{coreDescription}</p>
                                        </section>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};