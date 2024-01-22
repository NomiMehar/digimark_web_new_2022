import React, {useEffect} from "react";
import style from "./QuickFacts.module.scss"
import foundedImage from "../../../../public/assets/images/company/quick-found.svg"
import Image from "next/image";
import quickFactList from "./quickFactList.json";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import AOS from 'aos';

export default function QuickFacts () {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className={`flex direction-column ${style.quick_facts_wrapper}`}>
            <div className="container">
                <div className="section_title"><h2><span>Quick facts</span> for you to know us</h2></div>
                <div className={`flex direction-column ${style.quick_list}`}>
                    <ul className={`list-none flex ${style.first_loop}`}>
                        {
                            quickFactList.slice(0,4).map(({data_aos,quickIcon,quickTitle,quickCount,quickCountSign},index)=>{
                                return(
                                    <li
                                        key={`quick-${index}`}
                                        data-aos={data_aos}
                                        data-aos-duration="1000"
                                    >
                                        <section>
                                            <Image src={quickIcon} alt={quickIcon} height={68} width={68}/>
                                            <span>
                                                <CountUp end={quickCount} duration={10}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start}>
                                                            <small ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                                {quickCountSign}
                                            </span>
                                            <p>{quickTitle}</p>
                                        </section>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className={`list-none flex ${style.main_loop}`}>
                        <li

                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            <section>
                                <Image src={foundedImage} alt={foundedImage} height={68} width={68}/>
                                <span><small>2017</small></span>
                                <p>Founded in the Year</p>
                            </section>
                        </li>
                    </ul>
                    <ul className={`list-none flex ${style.last_loop}`}>
                        {
                            quickFactList.slice(4,8).map(({data_aos,quickIcon,quickTitle,quickCount,quickCountSign},index)=>{
                                return(
                                    <li
                                        key={`quick-${index}`}
                                        data-aos={data_aos}
                                        data-aos-duration="1000"
                                    >
                                        <section>
                                            <Image src={quickIcon} alt={quickIcon} height={68} width={68}/>
                                            <span>
                                                <CountUp end={quickCount} duration={10}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start}>
                                                            <small ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                                {quickCountSign}
                                            </span>
                                            <p>{quickTitle}</p>
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