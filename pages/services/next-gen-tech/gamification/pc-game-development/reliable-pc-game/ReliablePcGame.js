import style from "./reliablePcGame.module.scss"
import Image from "next/image";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import React from "react";
import Link from "next/link";

export default function ReliablePcGame(props) {
    return(
        <>
            <div className={`${style.reliable_pc_game} ${style[props.classes]}`}>
                <div className={`container flex justify-between items-center ${style.flex}`}>
                    <img src={props.imgSrc} alt="img"/>
                    <section>
                        {
                            props.dynamicTitle ? <h2>{props.title}</h2>: <h2>Looking for a <span>reliable PC
                            game development Company</span></h2>
                        }
                        {
                            props.description ? <p>{props.description}</p> : <p>Talk to our team and discover how we can be a comprehensive end-to-end solution that meets your budget and deadline requirements.</p>
                        }
                        <Link href="#" className={`contact_btn ${style.contact_btn}`}>Let’s Connect <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                    </section>
                </div>
            </div>
        </>
    )
}