import style from "./womenPerks.module.scss"
import WomenPerksList from "./WomenPerksList.json"
import {Autoplay, EffectFade, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";

export default function WomenPerks () {
    return(
        <div className={`flex flex-wrap direction-column ${style.women_perks_wrap}`}>
            <div className="container">
                <div className="section_title">
                    <h2><span>Perks & Benefits</span> for Women</h2>
                </div>
                <div className="flex">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={60}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        // speed={5000}
                        effect={"fade"}
                        pagination={true}
                        modules={[Autoplay, EffectFade, Pagination]}
                        loop={false}
                        className="mySwiper women-swiper"
                    >
                        {
                            WomenPerksList.map(({perksImage,perksTitle,perksDescription},index)=>{
                                return(
                                    <SwiperSlide key={index}>
                                        <div className={`flex items-end ${style.women_perks_content}`}>
                                            <figure>
                                                <Image width={100} height={100} src={perksImage} alt={perksImage}/>
                                            </figure>
                                            <section>
                                                <h3>{perksTitle}</h3>
                                                <p>{perksDescription}</p>
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
    )
}