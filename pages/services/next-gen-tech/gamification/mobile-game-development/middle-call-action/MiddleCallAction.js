import React from "react";
import style from "./middleCallAction.module.scss";
import Image from "next/image";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";

export default function MiddleCallAction(props) {
  return (
    <div className={style.middle_call_action}>
        <div className="container flex">
            <section>
                {props.sectionTitle}
                {props.sectionDescription}
                <Link href="#" className={`contact_btn ${style.transparent}`}>Let’s Connect <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
            </section>
            <Image src={props.middleActionImage} alt="image"/>
        </div>
    </div>
  )
}
