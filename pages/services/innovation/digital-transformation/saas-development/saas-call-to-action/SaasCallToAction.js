import style from "./saasCallToAction.module.scss";
import Link from "next/link";
import Image from "next/image";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import React from "react";

export default function SaasCallToAction() {
    return(
        <div className={style.sass_call_wrapper}>
            <div className="container flex">
                <div className={`${style.sass_call_action} flex`}>
                    <h2>Boost your competitiveness by taking advantage of the most current software-defined opportunities</h2>
                    <Link href="#" className={`contact_btn ${style.contact_btn}`}>Contact us <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                </div>
            </div>
        </div>
    )
}