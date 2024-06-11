import React, {useEffect} from "react";
import languagesList from "./languagesList.json";
import frameWorks from "./frameWorks.json";
import otherList from "./otherList.json";
import designPattern from "./designPattern.json";
import style from "./Technologies.module.scss";
import Image from "next/image";
import AOS from 'aos';

export default function Technologies() {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <div className={`flex direction-column ${style.technology_wrapper}`}>
        <div className="container">
            <div className="section_title flex direction-column white" data-aos="fade-up" data-aos-duration="1000">
                <h2><span>Technologies</span> we Use</h2>
            </div>
            <div className={`flex ${style.technology_list}`}>
                <ul className="list-none" data-aos="fade-right" data-aos-duration="1000">
                    <h3>Languages</h3>
                    {
                        languagesList?.map(({langTitle,langIcon}, index)=>{
                            return (
                                <li className="flex items-center" key={`lang-${index}`}>
                                    <Image src={langIcon} alt={langIcon} width={60} height={60}/>
                                    <h4>{langTitle}</h4>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className="list-none" data-aos="fade-right" data-aos-duration="1000">
                    <h3>Frameworks</h3>
                    {
                        frameWorks.map(({langTitle,langIcon}, index)=>{
                            return (
                                <li className="flex items-center" key={`lang-${index}`}>
                                    <Image src={langIcon} alt={langIcon} width={60} height={60}/>
                                    <h4>{langTitle}</h4>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className="list-none" data-aos="fade-left" data-aos-duration="1000">
                    <h3>Other</h3>
                    {
                        otherList.map(({langTitle,langIcon}, index)=>{
                            return (
                                <li className="flex items-center" key={`lang-${index}`}>
                                    <Image src={langIcon} alt={langIcon} width={60} height={60}/>
                                    <h4>{langTitle}</h4>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className="list-none" data-aos="fade-left" data-aos-duration="1000">
                    <h3>Design Pattern</h3>
                    {
                        designPattern.map(({langTitle,langIcon}, index)=>{
                            return (
                                <li className="flex items-center" key={`lang-${index}`}>
                                    <h4>{langTitle}</h4>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  );
}
