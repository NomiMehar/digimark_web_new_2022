import React, {useEffect} from "react";
import style from "./join.module.scss"
import Image from "next/image";
import joinImage from "../../public/assets/images/company/join.png"
import whiteArrow from "../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";
import AOS from 'aos';

export default function Join () {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className={`flex direction-column ${style.join_wrap}`}>
            <div className="container flex items-center">
                <div
                    className={style.join_text_wrap}
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    <h2>Join the <span>DigiMark Developers</span> Team!</h2>
                    <p>Innovate with the latest and greatest technologies & get to work on some of the coolest projects you can imagine.</p>
                    <Link href="/" className={`contact_btn`}>Apply Now <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                </div>
                <Image
                    className={style.join_image}
                    src={joinImage}
                    alt={joinImage}
                    width={580}
                    height={542}
                    data-aos="fade-left"
                    data-aos-duration="2000"
                />
            </div>
        </div>
    );
}
