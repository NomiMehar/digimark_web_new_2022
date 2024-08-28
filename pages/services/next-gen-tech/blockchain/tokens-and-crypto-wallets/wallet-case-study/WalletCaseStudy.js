import React, {useEffect} from "react";
import style from "./walletCaseStudy.module.scss";
import AOS from 'aos';
import {Autoplay, Pagination, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function WalletCaseStudy (props) {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
      <div className={`wallet_case_wrapper ${props.class} ${style[props.class]} ${style.wallet_case_wrapper}`}
           data-aos="fade-up"
           data-aos-duration="1000"
      >
          <div className="container">
              <div className={`section_title ${style.title}`} style={{width: "100%"}}>
                  {props.title}
              </div>
              <div className={style.wallet_case_content_wrap}>
                  <Swiper
                      slidesPerView={1}
                      spaceBetween={0}
                      centeredSlides={false}
                      pagination={{
                          clickable: true,
                      }}
                      autoplay={{
                          delay: 5000,
                          disableOnInteraction: false,
                      }}
                      speed={3000}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="mySwiper"
                  >
                      {
                         props.WalletCaseStudyList?.map(({caseImage, caseLogo, caseTitle, caseDes, caseButtonLink},index)=>{
                              return(
                                  <SwiperSlide>
                                      <div className={`flex  ${style.wallet_case_content}`} key={index}>
                                          <figure>
                                              <Image width={100} height={100} src={caseImage} alt="caseImage"/>
                                          </figure>
                                          <section>
                                              {
                                                props.ourWork === true ? <div className={`section_title ${style.section_title}`} data-aos="fade-up" data-aos-duration="2000">
                                                <h2>Our <span>Recent Work</span></h2>
                                                <p>Build. Launch. Grow</p>
                                            </div> : <Image src={caseLogo} alt="caseLogo" width={140} height={50} /> 
                                              }
                                              <h3>{caseTitle}</h3>
                                              <p>{caseDes}</p>
                                              {
                                                props.ourWork === true ? <></> : <Link href={caseButtonLink}>Learn more</Link> 
                                              }
                                              
                                          </section>
                                      </div>
                                  </SwiperSlide>
                              )
                          })
                      }
                  </Swiper>
              </div>
          </div>
      </div>
  );
}
