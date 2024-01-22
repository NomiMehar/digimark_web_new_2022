import React from "react";
import style from "./gameTechnologies.module.scss";
import {Autoplay, Pagination, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import gameImage1 from "../../../../../../public/assets/images/services/gameIcon1.png"
import gameImage2 from "../../../../../../public/assets/images/services/gameIcon2.png"

export default function GameTechnologies() {
  return (
    <div className={style.game_technologies}>
        <div className="container">
            <div className={`game_technologies_slider ${style.game_technologies_slider}`}>
                <div className={`section_title white ${style.section_title}`}>
                    <h2><span>Technologies</span> We are <br/>
                        Well Versed in</h2>
                    <Swiper
                        loop={false}
                        slidesPerView={2}
                        spaceBetween={0}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        speed={3000}
                        modules={[Autoplay, Pagination, Navigation]}
                        breakpoints={{
                            1200: {

                            },
                            0: {

                            },
                        }}
                    >
                        <SwiperSlide>
                            <Image src={gameImage1} alt="log"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={gameImage2} alt="log"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={gameImage1} alt="log"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}
