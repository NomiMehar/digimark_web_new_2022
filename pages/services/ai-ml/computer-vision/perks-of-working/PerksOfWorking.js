import React, {useEffect} from "react";
import style from "./perksOfWorking.module.scss";
import Image from "next/image";
import AOS from 'aos';
import data from "./perksOfWorkingList.json";
export default function PerksOfWorking() {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <div className={`flex direction-column ${style.perks_wrapper}`}>
        <div className="container">
            <div className={`section_title white flex direction-column ${style.section_title}`}  data-aos="fade-up" data-aos-duration="1000">
            <h2>Custom Computer <span>Vision Solutions</span> Can Support
            Your Business in Many Ways</h2>
            <p>Natural language processing can be used to support your business in many ways. Some of the benefits of NLP include:</p>
            </div>
            <div className={`flex items-center ${style.perks_rules}`} data-aos="fade-right" data-aos-duration="1000">
                <div className={`${style.perks_services}`}>
                    <ul className="list-none flex direction-column">
                        {
                            data.map(({perksImage,perksDetail,perksTitle}, index)=>{
                                return(
                                    <li className="flex items-start" key={`perks-${index}`}>
                                        <div className={style.parks_text}>
                                        <Image src={perksImage} width="45" height="45" alt="perksImage"/>
                                            <section>
                                                <h3>{perksTitle}</h3>
                                                <p>{perksDetail}</p>
                                            </section>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}
