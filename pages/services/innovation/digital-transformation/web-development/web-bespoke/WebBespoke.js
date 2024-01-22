import style from "./WebBespoke.module.scss";
import Link from "next/link";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Image from "next/image";
import React, {useEffect} from "react";
import AOS from 'aos';
export default function WebBespoke(props) {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`flex flex-wrap direction-column ${style.web_bespoke}`}>
            <div className="container" data-aos="fade-up" data-aos-duration="2000">
            <div className={style.bespoke_inner}>
                <h2>Enhance your business with a <Link href="#">Bespoke <br/> Web Application</Link></h2>
                <Link href="#" className="contact_btn">Contact Us <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
            </div>
            </div>
        </div>
    )
}