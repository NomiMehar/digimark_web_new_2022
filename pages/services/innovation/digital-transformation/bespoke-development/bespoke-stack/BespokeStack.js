import style from "./BespokeStack.module.scss"
import bespokeStackList from "./BespokeStackList.json"
import React, {useEffect} from "react";
import AOS from 'aos';
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";
import Image from "next/image";
export default function BespokeStack() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={style.bespoke_stack_wrapper}>
            <div className="container">
                <div className={`section_title white ${style.title}`} data-aos="fade-up" data-aos-duration="2000">
                    <h2>OUR <span>TECH STACK</span></h2>
                    <p>Our bespoke software company recruits the best minds on the market and places them in an environment encouraging creativity and constant improvement. As a result, we can wield state-of-the-art frameworks and technologies for web and mobile development. Using those tools, our software development experts will exceed your expectations.</p>
                </div>
                <div className={style.bespoke_stack_list}>
                    <ul className="list-none flex flex-wrap">
                        {
                            bespokeStackList.map(({title, icon},index)=>{
                                return(
                                    <li key={index} data-aos="fade-down" data-aos-duration="2000">
                                        <section><img src={icon} alt="icon"/></section>
                                        <p>{title}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Link href="#" className={`contact_btn ${style.contact_btn}`}>Let’s discuss your project <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                </div>
            </div>
        </div>
    )
}