import React, {useEffect} from "react";
import style from "./BespokeRecentWork.module.scss";
import AOS from 'aos';
import {Autoplay, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import bespokeRecentWorkList from './BespokeRecentWorkList.json'
import "swiper/css";
import "swiper/css/navigation";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";

export default function BespokeRecentWork (props) {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
      <div className={`wallet_case_wrapper bespoke_recent ${style[props.class]} ${style.bespoke_recent_wrapper}`}
      >
          <div className="container">
              <div className={`section_title ${style.title}`} data-aos="fade-up"
           data-aos-duration="2000">
                 <h2>Our <span>Recent Work</span></h2>
              </div>
              <div className={`flex ${style.flex}`}>
              <div className={`section_title ${style.story}`} data-aos="fade-right"
           data-aos-duration="2000">
                 <h2>We can build your story</h2>
                 <p>For years we've joined forces with great companies, entrepreneurs, and daredevils from all over.</p>
                 <button className="contact_btn">View Our Work <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></button> 

              </div>
              <div className={style.bespoke_recent_wrap} data-aos="fade-left"
           data-aos-duration="2000">
                  <Swiper
                      slidesPerView={2}
                      spaceBetween={0}
                      centeredSlides={false}
                      autoplay={{
                          delay: 5000,
                          disableOnInteraction: false,
                      }}
                      speed={3000}
                      navigation={true}
                      modules={[Autoplay, Navigation]}
                      breakpoints={{
                          1200: {
                              slidesPerView: 2,
                          },
                          900: {
                              slidesPerView: 2,
                          },
                          600: {
                              slidesPerView: 2,
                          },
                          0: {
                              slidesPerView: 1,
                          },
                      }}
                      className="mySwiper"
                  >
                      {bespokeRecentWorkList.map(({caseImage, caseLogo, caseTitle, caseDes, caseButtonLink},index)=>{
                              return(
                                  <SwiperSlide>
                                      <div className={`flex  ${style.bespoke_recent_content}`} key={index}>
                                          <section className="flex flex-wrap">
                                              <h3>{caseTitle}</h3>
                                              <p>{caseDes}</p>
                                              <button className="contact_btn">Read the Story <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></button> 
                                          </section>
                                          <figure>
                                              <img src={caseImage} alt="caseImage"/>
                                          </figure>
                                      </div>
                                  </SwiperSlide>
                              )
                          })
                      }
                  </Swiper>
              </div>
              </div>
          </div>
      </div>
  );
}
