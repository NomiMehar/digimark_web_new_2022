import style from "./technologyStack.module.scss";
import React, {useEffect, useState} from "react";
import technologyStackList from "./technologyStack.json"
import AOS from "aos";

export default function TechnologyStack(props) {
    const [tabs, setTabs] = useState(0);
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`flex flex-wrap direction-column ${style.technology_stack_wrapper}`}>
            <div className="container">
                <div className="section_title white" data-aos="fade-up" data-aos-duration="2000">
                    <h2>{props.sectionTitle}</h2>
                    <p style={{width: "100%"}}>{props.sectionDescription}</p>
                </div>
                <div className={style.ar_tech_stack_wrapper}>
                    <div
                        className={style.ar_tech_stack}
                        data-aos="flip-up"
                        data-aos-duration="1000"
                    >
                        <ul className="list-none flex">
                            {
                                technologyStackList.map(({tab_button,tab_button_icon},index)=>{
                                    return(
                                        <li key={`custom-${index}`} data-aos="fade-down" data-aos-duration="1000">
                                            <button
                                                onClick={() => setTabs(index)}
                                                className={`${ tabs === index ? `${style.active}` : ""}`}
                                            >
                                                <img src={tab_button_icon} alt=""/>{tab_button}
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={style.ar_tech_list}>
                        <ul className="list-none flex flex-wrap">
                            {
                                technologyStackList.map(({listWrap}, index) => {
                                    if(tabs===index) {
                                        return (
                                            <>
                                                {
                                                    listWrap.map((listWrap, index)=>{
                                                        return(
                                                            <li>
                                                                <section>
                                                                    {listWrap}
                                                                </section>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}