import React from "react";
import style from "./getQuote.module.scss";
import Link from "next/link";
import whiteArrow from "../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Image from "next/image";

export default function GetQuote (props) {
  return (
      <div className={`${style[props.classProp]} ${style.get_quote}`}
      >
          <div className="container">
              <div className={style.get_quote_content}>
                  <h2>Let’s Create Big Stories <span>Together</span></h2>
                  <p>Mobile is in our nerves. We don’t just build apps, we create brand. Choosing us will be your best decision.</p>
                  <Link href="/contact-us#contactForm" className={`contact_btn ${style.contact_btn}`}>GET A QUOTE <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
              </div>
          </div>
      </div>
  );
}
