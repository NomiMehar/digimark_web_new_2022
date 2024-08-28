import React, {useEffect} from "react";
import style from "./Technologies.module.scss";
import programLanguagesList from "./programLanguagesList.json"
import thirdpartyLanguagesList from "./thirdpartyLanguagesList.json"
import AOS from 'aos';
import Image from "next/image";

export default function NativeVersion(props) {
    useEffect(() => {
        AOS.init();
    },[]);
    return(
        <div className={`flex native_version ${style[props.extraClass]} ${style.native_version}`}>
            <div className="container flex items-center">
                <div className={`flex direction-column ${style.native_heading_version}`} data-aos="fade-right" data-aos-duration="1000">
                    <small>OUR TECH STACK</small>
                    <h2>Tools & <span>Technologies</span> That We Use For React Native Development Services</h2>
                </div>
                <div className={`flex direction-column ml-auto ${style.lang_wrapper}`}>
                    <h2 data-aos="fade-up" data-aos-duration="1000">Programming Languages</h2>
                    <section>
                        <h4 data-aos="fade-left" data-aos-duration="1000">FRONT END</h4>
                        <ul className="list-none flex">
                            {
                                programLanguagesList.map(({langTitle,langIcon},index)=>{
                                    return(
                                        <li key={index} data-aos="flip-left" data-aos-duration="1000">
                                            <Image width={100} height={100} src={langIcon} alt={langIcon}/>
                                            <h5>{langTitle}</h5>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </section>
                    <section>
                        <h4 data-aos="fade-left" data-aos-duration="1000">Third-Party Integration</h4>
                        <ul className="list-none flex">
                            {
                                thirdpartyLanguagesList.map(({langTitle,langIcon},index)=>{
                                    return(
                                        <li key={index} data-aos="flip-left" data-aos-duration="1000">
                                            <Image width={100} height={100} src={langIcon} alt={langIcon}/>
                                            <h5>{langTitle}</h5>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}