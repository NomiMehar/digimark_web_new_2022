import style from "./productDelegate.module.scss"
import Image from "next/image";
import Image1 from "../../../../../../public/assets/images/services/delegat-img.webp"
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";
import React from "react";

export default function ProductDelegate() {
    return(
        <>
            <div className={style.product_delegat}>
                <div className={style.product_delegat_text}>
                    <section>
                        <h2><span>Delegate your project</span> to a team of <br/>experts.</h2>
                        <Link href="/contact-us/#contactForm" className={`contact_btn`}>Book a Call <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                    </section>
                </div>
                <Image src={Image1} alt="Image1"/>
            </div>
        </>
    )
}