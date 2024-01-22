import React, {useEffect} from "react";
import style from "./defiBenefits.module.scss";
import AOS from 'aos';
import Image from "next/image";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";

export default function DefiBenefits (props) {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
      <div className={`${style.defi_benefits_wrapper}`}>
          <div className="container">
              <div className={style.defi_benefits}>
                  <div className={style.left_section}>
                      <ul className={`list-none flex flex-wrap ${style.benefits_boxes}`} data-aos="fade-left" data-aos-duration="2000">
                          <li><section>Global Access</section></li>
                          <li><section>Global Access</section></li>
                          <li><section>Global Access</section></li>
                          <li><section>Global Access</section></li>
                          <li><section>Global Access</section></li>
                          <li><section>Global Access</section></li>
                      </ul>
                  </div>
                  <div className={`section_title ${style.section_title}`} data-aos="fade-right" data-aos-duration="2000">
                      <h2>Benefits of <span>DeFi Development </span></h2>
                      <p>Get the perfect defi solutions for your financial revolution in the crypto industry from DigiMark Developers.</p>
                      <Link href="/" className={`contact_btn ${style.contact_btn}`}>Talk to our expert <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                  </div>
              </div>
              <div className={style.benefits} data-aos="fade-down" data-aos-duration="2000">
                  <ul className={`list-none flex flex-wrap ${style.benefits_boxes}`}>
                      <li><section>Global Access</section></li>
                      <li><section>Global Access</section></li>
                      <li><section>Global Access</section></li>
                      <li><section>Global Access</section></li>
                      <li><section>Global Access</section></li>
                  </ul>
              </div>
          </div>
      </div>
  );
}
