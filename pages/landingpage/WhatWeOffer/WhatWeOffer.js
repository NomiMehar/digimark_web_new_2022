import React, {useEffect, useState} from "react";
import style from "./WhatWeOffer.module.scss";
import WhatWeOfferData from "./WhatWeOfferData.json";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WhatWeOffer() {
  let [addActive, setAddActive] = useState(false);
  const hoverOn = (e) => {
    setAddActive({
      index: parseInt(e.currentTarget.dataset.id),
      show: true
    });
  };
  const hoverOff = (e) => {
    setAddActive({
      index: parseInt(e.currentTarget.dataset.id),
      show: false
    });
  };

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className={`flex direction-column ${style.we_offer}`}>
      <div className="container">
        <div className="main_section_title white_title"
             data-aos="fade-up"
             data-aos-easing="ease-in-sine"
             data-aos-duration="1000"
        >
          <h2>
            What Do <span>We Offer?</span>
          </h2>
        </div>
        <div className={style.offer_cards}
             data-aos="zoom-in-right"
             data-aos-easing="ease-in-sine"
             data-aos-duration="2000"
        >
          {WhatWeOfferData.map(({ img, title, para}, index) => {
            return (
              <div
                  className={`${style.card} ${addActive.index === index && addActive.show ? `${style.active}` : index === 0 && !addActive.show ? `${style.active}` : ""}`}
                  onMouseEnter={hoverOn}
                  onMouseLeave={hoverOff}
                  key={index}
                  data-id={index}
              >
                <Image src={img} alt="offer_images" width={37} height={41} />
                <h2>{title}</h2>
                <p>{para}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
