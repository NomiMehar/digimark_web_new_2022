import style from "./saasBenefits.module.scss";
import saasBenefitsList from "./saasBenefitsList.json"
import {useState} from "react";
import checkIcon from "../../../../../../public/assets/images/services/checkgreenIcon.svg"
import checkWhiteIcon from "../../../../../../public/assets/images/services/checkwhiteIcon.svg"
import Image from "next/image";

export default function SaasBenefits() {
    const [tabs, setTabs] = useState(0);
    return(
        <div className={style.sass_benefits}>
            <div className="container">
                <div className="section_title">
                    <h2><span>SaaS Benefits</span></h2>
                    <p>SAAS has numerous benefits for users & software providers. Enhance your SAAS & build a secure, high-performing SAAS Solution.</p>
                </div>
                <div className={style.sass_benefits_tabs}>
                    <ul className="list-none flex justify-between">
                        {
                            saasBenefitsList.map(({benefitIcon,benefitTitle},index)=>{
                                return(
                                    <li key={`button-${index}`}>
                                        <button onClick={() => setTabs(index)} className={`flex direction-column items-center ${ tabs === index ? `${style.active}` : ""}`}>
                                            <Image width={100} height={100} src={benefitIcon} alt="benefitIcon"/>
                                            <span>{benefitTitle}</span>
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {
                    saasBenefitsList.map(({benefitTitle,benefitDescription,mainImage,subMainImage},index)=>{
                        if(tabs===index) {
                            return(
                                <div className={`flex ${style.sass_benefits_content_wrap}`}>
                                    <div className={style.sass_benefits_content}>
                                        <h3>{benefitTitle}</h3>
                                        <p>{benefitDescription}</p>
                                    </div>
                                    <figure>
                                        <Image width={100} height={100} src={mainImage} alt="mainImage"/>
                                        <Image width={100} height={100} className={style.subImage} src={subMainImage} alt="subMainImage"/>
                                    </figure>
                                </div>
                            )
                        }
                    })
                }
                <div className={`${style.sass_benefits_boxes} flex justify-between`}>
                    <ul className="list-none">
                        <li>
                            <section>
                                <figure>
                                    <Image className={style.green_check} width={44} height={44} src={checkIcon} alt="checkIcon"/>
                                    <Image className={style.white_check} width={44} height={44} src={checkWhiteIcon} alt="checkIcon"/>
                                </figure>
                                <h4>70%</h4>
                                <p>of the business apps companies use today are SaaS-based</p>
                            </section>
                        </li>
                        <li>
                            <section>
                                <figure>
                                    <Image className={style.green_check} width={44} height={44} src={checkIcon} alt="checkIcon"/>
                                    <Image className={style.white_check} width={44} height={44} src={checkWhiteIcon} alt="checkIcon"/>
                                </figure>
                                <h4>7%</h4>
                                <p>maximum annual revenue churn rate
                                    among SaaS-powered companies</p>
                            </section>
                        </li>
                    </ul>
                    <ul className="list-none">
                        <li>
                            <section>
                                <figure>
                                    <Image className={style.green_check} width={44} height={44} src={checkIcon} alt="checkIcon"/>
                                    <Image className={style.white_check} width={44} height={44} src={checkWhiteIcon} alt="checkIcon"/>
                                </figure>
                                <h4>18%</h4>
                                <p>current annual growth rate of the
                                    SaaS solutions market</p>
                            </section>
                        </li>
                    </ul>
                    <ul className="list-none">
                        <li>
                            <section>
                                <figure>
                                    <Image className={style.green_check} width={44} height={44} src={checkIcon} alt="checkIcon"/>
                                    <Image className={style.white_check} width={44} height={44} src={checkWhiteIcon} alt="checkIcon"/>
                                </figure>
                                <h4>75%</h4>
                                <p>of companies cite accelerated business
                                    agility after migrating to SaaS</p>
                            </section>
                        </li>
                        <li>
                            <section>
                                <figure>
                                    <Image className={style.green_check} width={44} height={44} src={checkIcon} alt="checkIcon"/>
                                    <Image className={style.white_check} width={44} height={44} src={checkWhiteIcon} alt="checkIcon"/>
                                </figure>
                                <h4>15%</h4>
                                <p>maximum of their total budget that
                                    enterprises spend on SaaS products</p>
                            </section>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}