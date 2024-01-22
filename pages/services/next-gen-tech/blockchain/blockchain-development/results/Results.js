import React, {useEffect} from "react";
import style from "./results.module.scss"
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import resultList from "./resultList.json"
import AOS from 'aos';

export default function Results() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={style.results_wrapper}>
            <div className="container flex">
                <div className={`section_title white ${style.title}`} data-aos="fade-left"
                                        data-aos-duration="2000">
                    <small>We Build Trust</small>
                    <h2>We deliver <br/> <span>outstanding Results</span></h2>
                </div>
                <div className={`flex items-center ${style.results_content}`}>
                    <ul className="list-none flex flex-wrap">
                        {
                            resultList.map(({counter,counterTitle,counterSign},index)=>{
                                return(
                                    <li key={index}>
                                        <section data-aos="fade-up"
                                        data-aos-duration="2000">
                                            <span>
                                                <CountUp end={counter} duration={10}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start}>
                                                            <small ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                  </CountUp>
                                                {counterSign}
                                            </span>
                                            <h4>{counterTitle}</h4>
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