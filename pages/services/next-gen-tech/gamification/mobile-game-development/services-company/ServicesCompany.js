import React from "react";
import style from "./servicesCompany.module.scss";
import Image from "next/image";

export default function ServicesCompany(props) {
  return (
    <div className={`${style[props.classes]} ${style.services_company}`}>
        <div className="container">
            <div className={`section_title ${style.section_title}`}>
                {props.companyTitle}
                {props.companyDescription}
            </div>
            <div className={style.services_company_text}>
                <ul className="list-none flex flex-wrap">
                    {
                        props.servicesCompanyList?.map(({img,title},index)=>{
                            return(
                                <li key={index}>
                                    <figure>
                                        <Image width={100} height={100} src={img} alt="image1"/>
                                        <figcaption>
                                            {title}
                                        </figcaption>
                                    </figure>
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
