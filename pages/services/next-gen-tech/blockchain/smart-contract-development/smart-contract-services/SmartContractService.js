import React, {useEffect} from "react";
import benefitsOfWorkingList from "./SmartContractServiceList.json";
import style from "./SmartContractService.module.scss";
import AOS from 'aos';

export default function SmartContractService(props) {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <div className={`flex direction-column ${style.perks_wrapper} ${style[props.classes]}`}>
        <div className="container">
            <div className={`section_title flex direction-column ${style.section_title}`}  data-aos="fade-up" data-aos-duration="1000">
                <h2><span>{props.appName}</span> Services</h2>
                <p>DigiMark is an experienced team of blockchain developers who build protocols, dApps and provide services for the development of smart contracts.</p>
            </div>
            <div className={`flex items-center ${style.perks_rules}`} data-aos="fade-right" data-aos-duration="1000">
                <div className={`${style.perks_services}`}>
                    <ul className="list-none flex direction-column">
                        {
                            benefitsOfWorkingList.map(({perksDetail,perksTitle,perksNumber}, index)=>{
                                return(
                                    <li className="flex items-start" key={`perks-${index}`}>
                                        <div className={style.parks_text}>
                                            <span>{perksNumber}</span>
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
