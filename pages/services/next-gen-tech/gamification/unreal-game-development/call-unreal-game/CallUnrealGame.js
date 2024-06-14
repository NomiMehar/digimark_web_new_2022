import style from "./callUnrealGame.module.scss"
import Image from "next/image";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";
import React from "react";

export default function CallUnrealGame(props) {
    return(
        <>
            <div className={`${style[props.extraClass]} ${style.call_unreal_game}`}>
                <div className="container">
                    <section>
                        {props.title}
                        <Link href="/contact-us/#contactForm" className={`contact_btn`}>Contact us <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                    </section>
                </div>
            </div>
        </>
    )
}