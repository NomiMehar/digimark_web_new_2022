import React, {useEffect} from "react";
import style from "./perksOfWorking.module.scss";
import Image from "next/image";
import perkImage from "../../../../../../public/assets/images/services/perks.jpg";
import AOS from 'aos';

export default function PerksOfWorking(props) {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <div className={`flex direction-column ${style.perks_wrapper} ${style[props.classes]} ${style[props.exclass]}`}>
        <div className="container">
            <div className={`section_title flex direction-column ${style.section_title}`}  data-aos="fade-up" data-aos-duration="1000">
                {props.workingBenfits ? <h2>The <span>{props.appName} </span> Of Working With Us</h2> : <h2>Perks of Working with Professional <span>{props.appName} App Development</span> Agency</h2>}
                {props.desc ? <p>{props.para}</p> : "unlocked benefits for your business"}
            </div>
            <div className={`flex ${style.section_title_wrap}`}  data-aos="fade-up" data-aos-duration="1000">
                {props.newTitle}
                {props.newDescription}
            </div>
            <div className={`flex items-center ${style.perks_rules}`} data-aos="fade-right" data-aos-duration="1000">
                <div className={`${style.perks_services}`}>
                    <ul className="list-none flex direction-column">
                        {
                            props.data && props.data.map(({perksImage,perksDetail,perksTitle,perksNumber}, index)=>{
                                return(
                                    <li className="flex items-start" key={`perks-${index}`}>
                                        <div className={style.parks_text}>
                                            {
                                                props.activeImage === true ? <Image src={perksImage} width="45" height="45" alt="perksImage"/> : <span>{perksNumber}</span>
                                            }
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
                {props.imageProp === true ?
                    <figure className={style.perks_image} data-aos="fade-left" data-aos-duration="1000">
                        <Image src={perkImage} alt={perkImage} width={642} height={694}/>
                    </figure> : ""
                }
            </div>
        </div>
    </div>
  );
}
