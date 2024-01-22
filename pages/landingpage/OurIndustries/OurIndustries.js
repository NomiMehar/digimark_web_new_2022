import React, {useState} from "react";
import style from "./OurIndustries.module.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode, Autoplay, Thumbs, EffectFade} from "swiper";
import Link from "next/link";
import leftArrow from "../../../public/assets/images/homepage/our-industries/left_arrow.svg";
import Image from "next/image";
import OurIndustriesData from "./OurIndustriesData.json";

export default function OurIndustries() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const handleMouseEnter = () => {
        document.body.classList.add('hovered');
    };
    const handleMouseLeave = () => {
        document.body.classList.remove('hovered');
    };
  return (
    <div className={`flex direction-column customer_talk ${style.customer_talk}`}>
          <div className={`main_section_title white_title ${style.white_title}`}>
              <h2>
                  Our Industries
              </h2>
          </div>
          <div className={`industries_slider_wrap ${style.industries_slider_wrap}`}>
              <Swiper
                  loop={true}
                  slidesPerView={1}
                  spaceBetween={0}
                  thumbs={{ swiper: thumbsSwiper }}
                  autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                  }}
                  speed={3500}
                  navigation={true}
                  modules={[Autoplay, FreeMode, EffectFade, Thumbs]}
                  className={style.industries_slider_image}
              >
                  {OurIndustriesData.map(({ industriesImage }, index) => {
                      return (
                          <SwiperSlide key={`industries-${index}`}>
                              <Image className={style.industries_image} src={industriesImage} width={1920} height={1080} alt="industriesImage"/>
                          </SwiperSlide>
                      );
                  })}
              </Swiper>

              <div className={`w-100 ${style.industries_slider}`}>
                  <Swiper
                      loop={true}
                      freeMode={true}
                      slidesPerView={4}
                      spaceBetween={0}
                      modules={[Thumbs, FreeMode]}
                      watchSlidesProgress={true}
                      onSwiper={setThumbsSwiper}
                      breakpoints={{
                          1200: {
                              slidesPerView: 4,
                          },
                          900: {
                              slidesPerView: 3,
                          },
                          600: {
                              slidesPerView: 2,
                          },
                          0: {
                              slidesPerView: 1,
                          },
                      }}
                  >
                      {OurIndustriesData.map(({ industriesTitle, industriesDescription, industriesLink }, index) => {
                          return (
                              <SwiperSlide key={`industries-${index}`}>
                                  <div className={`slider_content_wrap ${style.slider_content_wrap}`}>
                                      <section>
                                          <h3>{industriesTitle}</h3>
                                          <p>{industriesDescription}</p>
                                          <Link
                                              onMouseEnter={handleMouseEnter}
                                              onMouseLeave={handleMouseLeave}
                                              className="flex items-center" href={industriesLink}>Learn More <Image src={leftArrow} alt="arrow"/></Link>
                                      </section>
                                  </div>
                              </SwiperSlide>
                          );
                      })}
                  </Swiper>
              </div>
          </div>
    </div>
  );
}
