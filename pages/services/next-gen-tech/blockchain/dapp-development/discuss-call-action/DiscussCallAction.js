import React, {useEffect} from "react";
import style from "./discussCallAction.module.scss";
import discussImage from "../../../../../../public/assets/images/services/discuss-action-img.jpg"
import AOS from 'aos';
import Image from "next/image";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";

export default function DiscussCallAction (props) {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className={`${style.discuss_action} ${style[props.classes]}`}
             data-aos="fade-up"
             data-aos-duration="1000"
        >
            <div className="container">
                <div className={`flex items-center ${style.discuss_action_content}`}>
                    <figure>
                        <Image width={362} height={211} src={discussImage} alt="discussImage"/>
                    </figure>
                    <section>
                        <h2>Discuss a project</h2>
                        <p>Tell us about your future blockchain dapp project, and we will contact you within one business day.</p>
                        <Link href="/" className={`contact_btn ${style.contact_btn}`}>Get Expert Advice <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                    </section>
                </div>
            </div>
        </div>
    );
}
