import React from "react";
import style from "./LeadingEnterprises.module.scss";
import Image from "next/image";
import leadingEnterprisesData from './LeadingEnterprisesData.json';
export default function LeadingEnterprises(props) {
  return (
    <div className={`w-100 items-center ${style[props.extraClass]} ${style.leading_enterprises}`}>
        <div className="container">
            <div className="flex flex-wrap items-center">
                <div className={style.title} data-aos="fade-right"
                   data-aos-duration="2000">
                    <h4>Leading Enterprises<br/> <span>Who Trust Us</span></h4>
                </div>
                <ul className={`list-none flex`}>
                    {leadingEnterprisesData.map(({ img }, index) => {
                        return (
                            <li className="flex items-center justify-center direction-column" key={`business-${index}`} data-aos="fade-left"
                            data-aos-duration="2000">
                                <Image src={img} width={100} height={100} alt="enterpriseimg" />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}
