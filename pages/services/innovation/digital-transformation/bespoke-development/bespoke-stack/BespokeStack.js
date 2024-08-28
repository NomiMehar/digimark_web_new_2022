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
                    <p>At our bespoke software company, we hire top talent and foster a culture of creativity and continuous improvement to make the culture way better. This allows us to utilize cutting-edge frameworks and technologies for web and mobile development, delivering results that go beyond your expectations. Make DIGIMARK your partner now and enjoy wonders.</p>
                </div>
                <div className={style.bespoke_stack_list}>
                    <ul className="list-none flex flex-wrap">
                        {
                            bespokeStackList.map(({title, icon},index)=>{
                                return(
                                    <li key={index} data-aos="fade-down" data-aos-duration="2000">
                                        <section><Image width={100} height={100} src={icon} alt="icon"/></section>
                                        <p>{title}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Link href="/contact-us/#contactForm" className={`contact_btn ${style.contact_btn}`}>Let’s discuss your project <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                </div>
            </div>
        </div>
    )
}