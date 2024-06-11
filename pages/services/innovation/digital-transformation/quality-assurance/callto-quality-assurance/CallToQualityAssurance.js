import style from "./callToQualityAssurance.module.scss"
import Image from "next/image";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";
import React from "react";

export default function CallToQualityAssurance(props) {
    return(
        <>
            <div className={`${style[props.classes]} ${style.call_quality_assurance}`}>
                <div className="container">
                    <div className={style.call_quality}>
                        <section>
                            <h2>{props.title}</h2>
                            {props.description}
                            <Link href="#" className={`contact_btn ${style.contact_btn}`}>Let’s get started <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}