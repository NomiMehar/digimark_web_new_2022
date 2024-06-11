import React from "react";
import style from "./servicesProvided.module.scss";
import Image from "next/image";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";

export default function ServicesProvided(props) {
  return (
    <div className={`${style[props.classes]} ${style.services_provided}`}>
        <div className="container">
            <div className={`section_title ${style.section_title}`}>
                {props.sectionTitle}
            </div>
            <div className={style.services_provided_text}>
                <ul className="list-none flex flex-wrap">
                    {
                        props.servicesProvidedList?.map(({img,title,desc},index)=>{
                            return(
                                <li key={index}>
                                    <section>
                                        <figure><Image width={100} height={100} src={img} alt="image1"/></figure>
                                        <section>
                                            <h3>{title}</h3>
                                            <p>{desc}</p>
                                        </section>
                                    </section>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className={style.center}>
                    <Link href="#" className={`contact_btn`}>Schedule An App Expert Session <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}
