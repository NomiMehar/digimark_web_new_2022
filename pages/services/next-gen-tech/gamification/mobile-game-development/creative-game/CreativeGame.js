import React from "react";
import style from "./creativeGame.module.scss";
import creativeGameList from "./creativeGameList.json";
import {Autoplay, Pagination, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function CreativeGame() {
  return (
    <div className={style.creative_game}>
        <div className="container">
            <div className={`section_title ${style.section_title}`}>
                <h2>Our <span>Creative Game</span> Projects</h2>
                <p>We create interactive and fun games across numerous genres like action, adventure, fun, and much more. DigiMark Developers streamline your game idea and turn it into reality by paying heed to next-gen mobile gaming applications.</p>
            </div>
        </div>
        <div className={`creative_game_slider ${style.creative_game_slider}`}>
            <Swiper
                loop={false}
                slidesPerView={1}
                spaceBetween={0}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                speed={3000}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {
                    creativeGameList.map(({mainImage,titleNumber,title,description,list},index)=>{
                        return(
                            <SwiperSlide key={index}>
                                <div className={style.creative_game_text}>
                                    <Image width={1920} height={1280} src={mainImage} alt="log"/>
                                    <section>
                                        <h2><span>{titleNumber}</span> {title}</h2>
                                        <p>{description}</p>
                                        <ul className="list-none">
                                            {
                                                list.map(({icon,minTitle,detailText},index)=>{
                                                    return(
                                                        <li key={`i-${index}`}><Image width={20} height={20} src={icon} alt="icon"/><strong>{minTitle}</strong> <span>{detailText}</span></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </section>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    </div>
  )
}
