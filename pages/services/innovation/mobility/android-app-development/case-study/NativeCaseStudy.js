import style from "./caseStudy.module.scss"
import Link from "next/link";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Image from "next/image";
import React, {useState} from "react";
import nativeCaseStudy from "./nativeCaseStudy.json"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import {Pagination, Navigation, Thumbs, FreeMode} from "swiper";

export default function NativeCaseStudy() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return(
        <div className={`flex direction-column native_case_study ${style.native_case_study}`}>
            <div className="container flex">
                <div className={`native_img_slide ${style.native_img_slide}`}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        pagination={{ clickable: true }}
                        thumbs={{ swiper: thumbsSwiper }}
                        navigation={true}
                        modules={[FreeMode,Pagination, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {
                            nativeCaseStudy.map(({sliderImage},index)=>{
                                return(
                                    <SwiperSlide key={index}>
                                        <img src={sliderImage} alt={sliderImage}/>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <div className={`${style.native_case_text}`}>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        slidesPerView={1}
                        spaceBetween={0}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {
                            nativeCaseStudy.map(({Title,Pera}, index)=>{
                                return(
                                    <SwiperSlide key={index}>
                                        <section>
                                            <small>Case Study</small>
                                            <h2>{Title}</h2>
                                            <p>{Pera}</p>
                                            <Link href="/pages" className={`contact_btn ${style.contact_btn}`}>Read Our Case Study <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                                        </section>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}