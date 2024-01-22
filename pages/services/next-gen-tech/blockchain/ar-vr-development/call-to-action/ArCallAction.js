import style from "./arCallAction.module.scss";
import Link from "next/link";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Image from "next/image";
import React, {useEffect} from "react";
import AOS from 'aos';
export default function ArCallAction(props) {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`flex flex-wrap direction-column ${style[props.classes]} ${style.ar_calltoaction}`}>
            <div className="container" data-aos="fade-up" data-aos-duration="2000">
                {props.callTile}
                {props.callDescription}
                <Link href="#" className="contact_btn">{props.callButtonText} <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
            </div>
        </div>
    )
}