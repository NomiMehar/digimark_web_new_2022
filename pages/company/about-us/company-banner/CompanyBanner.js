import React from "react";
import style from "../../../services/innovation/mobility/android-app-development/android-app-banner/MobilityBanner.module.scss";
import Image from "next/image";
import backArrow from "../../../../public/assets/images/services/back.svg";
import monoGram from "../../../../public/assets/images/company/logo_monogram.svg";
import monoGramText from "../../../../public/assets/images/company/text_black.svg";
import companyBanner from "../../../../public/assets/images/company/company_banner.png";
import careersImage from "../../../../public/assets/images/company/join.jpg";
import companyStyle from "./CompanyBanner.module.scss"
import Link from "next/link";

export default function CompanyBanner (props) {
    return (
        <div className={`flex direction-column ${props.careersImage === true ? `${companyStyle.careers_wrapper}` : ""} ${companyStyle[props.classProp]} ${companyStyle[props.extraClass]} ${companyStyle.company_banner}`}>
            <div className="container">
                <ul className={`list-none flex items-center ${companyStyle.breadcrumbs} ${style.breadcrumbs}`}>
                    <li>{props.dynamicBread === true ? <span>{props.breadText}</span>:<span>Company</span> }</li>
                    <li><small>{props.pageTitle}</small></li>
                </ul>
                <div className={`flex items-start ${companyStyle.banner_content}`}>
                    <div className={`${companyStyle.company_text}`}>
                        {
                            props.bg_title === true ? <small>{props.bg_text}</small> : ""
                        }
                        <span>{props.subTitle}</span>
                        <h1>{props.bannerTitle}</h1>
                        {props.bannerDescription}
                    </div>
                    {
                        props.careersImage === true ?
                        <Image className={companyStyle.banner_careers} src={careersImage} alt={careersImage} />:
                        <div className={`animated_logo ${companyStyle.animated_logo}`}>
                            <figure>
                                <Image src={monoGramText} alt={monoGramText} height={383} width={383} />
                                <figcaption>
                                    {
                                        props.dynamicImage === true ? <a target="_blank" href={props.productLink}><Image src={props.dynamicImageUrl} alt="image" height={221} width={221} /></a> : <Image src={monoGram} alt={monoGram} height={83} width={83} />
                                    }
                                </figcaption>
                            </figure>
                        </div>
                    }
                </div>
            </div>
            {
                props.bannerImage === false ? "" : <Image src={companyBanner} alt={companyBanner} />
            }
            {
                props.boxes === true ?
            <div className={companyStyle.boxes}>
                <ul className="list-none flex">
                    <li>
                        <section>
                            <h3>10K +</h3>
                            <span>Delivered Projects</span>
                        </section>
                    </li>
                    <li>
                        <section>
                            <h3>300 +</h3>
                            <span>Healthcare Engineer</span>
                        </section>
                    </li>
                </ul>
            </div> : ""
            }
        </div>
    );
};