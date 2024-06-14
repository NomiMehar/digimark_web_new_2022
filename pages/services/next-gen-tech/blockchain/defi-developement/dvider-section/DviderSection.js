import React, {useEffect} from "react";
import style from "./dviderSection.module.scss";
import Link from "next/link";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Image from "next/image";
import AOS from 'aos';

export default function DviderSection (props) {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
      <div className={`${style.divider_wrapper} ${style[props.classes]}`}
           data-aos="fade-up"
           data-aos-duration="1000"
      >
          <div className="container">
              <div className={`flex items-center ${style.divider_content}`}>
                 <div className={style.divider_title}>
                    {props.dividerTitle}
                    {props.dividerDescription}
                 </div>
                  <Link href="/contact-us/#contactForm" className={`contact_btn ${style.contact_btn}`}>{props.dividerButton} <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
              </div>
          </div>
      </div>
  );
}
