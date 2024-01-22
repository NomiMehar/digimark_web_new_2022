import style from "./unityRecentProject.module.scss"
import unityRecentProjectList from "./unityRecentProjectList.json"
import Image from "next/image";
import {Autoplay, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React from "react";

export default function UnityRecentProject() {
    return(
        <>
            <div className={style.unity_recent_project}>
                <div className="section_title">
                    <h2><span>Our Recent Projects</span></h2>
                    <p>We’ve designed and developed tons of exciting titles that make <br/> gameplay fun for everyone.</p>
                </div>
                <div className={`unity_recent_slide ${style.unity_recent_slide}`}>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={14}
                        centeredSlides={false}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        speed={3000}
                        navigation={false}
                        modules={[Autoplay, Navigation, Pagination]}
                        breakpoints={{
                            1300: {
                                slidesPerView: 5,
                            },
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
                                slidesPerView: 2,
                            },
                        }}
                        className="mySwiper"
                    >
                        {
                            unityRecentProjectList.map(({recentImage},index)=>{
                                return(
                                    <SwiperSlide key={index}>
                                        <Image width={340} height={425} src={recentImage} alt="recentImage"/>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )
}