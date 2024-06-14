import React, {useEffect} from "react";
import style from "./BlockchainEnterprise.module.scss";
import Link from "next/link";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Image from "next/image";
import AOS from 'aos';

export default function BlockchainEnterprise (props) {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
      <div className={`enterprises ${style.enterprises} ${style[props.classes]}`}
           data-aos="fade-up"
           data-aos-duration="1000"
      >
          <div className="container">
              <div className={style.enterprises_content}>
                 {props.metaverse ?
                 <div className={style.enterprises_title}>
                 <p>Explore the ocean of possibilities behind Metaphysics Metaverse Development is the solution!</p>
                 </div>:
                 <div className={style.enterprises_title}>
                 <p>Save costs and transaction time by</p>
                  <h2>ADVANCING YOUR BLOCKCHAIN ENTERPRISE TECHNOLOGY</h2>
                 </div>
                 }
                  <Link href="/contact-us/#contactForm" className={`contact_btn ${style.contact_btn}`}>GET A QUOTE <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
              </div>
          </div>
      </div>
  );
}
