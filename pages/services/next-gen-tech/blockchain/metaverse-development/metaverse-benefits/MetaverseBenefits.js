import style from "./MetaverseBenefits.module.scss"
import perkImage from "../../../../../../public/assets/images/services/benefits-img.webp";
import futureImage from "../../../../../../public/assets/images/services/future_metaverse.svg";
import greenLine from "../../../../../../public/assets/images/services/green-line.svg";
import Image from "next/image";

export default function MetaverseBenefits (props) {
    return(
        <div className={`flex direction-column ${style.perks_wrapper} ${style[props.classes]}`} >
        <div className="container">
           {props.metaverse ?  <div className={`section_title flex direction-column ${style.section_title}`}  data-aos="fade-up" data-aos-duration="1000">
                <h2><span>Benefits</span> of Entering into metaverse</h2>
            </div>:  ""}
            <div className={`flex ${style.perks_rules}`} data-aos="fade-right" data-aos-duration="1000">
           {props.metaverse ?  <figure className={style.perks_image} data-aos="fade-left" data-aos-duration="1000">
                        <Image src={perkImage} alt={perkImage} width={642} height={694}/>
                        <div className={`${style.perks_services}`}>
                        <ul className="list-none flex direction-column">
                        {
                           props.data && props.data.slice(0,1).map(({perksDetail,perksTitle,perksNumber}, index)=>{
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
            </figure>:
             <figure className={style.perks_image} data-aos="fade-left" data-aos-duration="1000">
             <div className={style.greenLine}>
             <Image src={greenLine} alt={greenLine} width={642} height={694}/>
             </div>
             <Image src={futureImage} alt={futureImage} width={642} height={694}/>
             </figure>
            }
                <div className={`${style.perks_services}`}>
                   {props.metaverse ?  <ul className="list-none flex direction-column">
                        {
                            props.data && props.data.slice(1,props.data.length).map(({perksDetail,perksTitle,perksNumber}, index)=>{
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
                    </ul>:
                    <div>
                        <div className={`section_title flex direction-column ${style.section_title}`}  data-aos="fade-up" data-aos-duration="1000">
                            <h2>Our Process of building <span> Future with metaverse</span></h2>
                        </div>
                        <ul className="list-none flex direction-column">
                        {
                            props.data && props.data.map(({perksDetail,perksTitle,perksNumber}, index)=>{
                                return(
                                    <li className="flex items-start" key={`perks-${index}`}>
                                        <div className={style.parks_text}>
                                            <span>{perksTitle}<p>{perksNumber}</p></span>
                                            
                                            <section>
                                                <p>{perksDetail}</p>
                                            </section>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    </div>
                    }
                </div>
            </div>
        </div>
    </div>
    )
}