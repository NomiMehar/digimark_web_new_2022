import style from "./whyChoose.module.scss"
import {Pagination, Navigation, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import nativeWhyChooseList from "./nativeWhyChooseList.json"
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function SliderVersion() {
    return(
        <>
            <div className={`slider_version ${style.slider_version}`}>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    centeredSlides={false}
                    pagination={{
                        type: "fraction",
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={3000}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    breakpoints={{
                        1200: {
                            slidesPerView: 3,
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
                    {
                        nativeWhyChooseList.map(({whyChooseIcon,whyChooseTitle,whyChooseDetail}, index)=>{
                            return(
                                <SwiperSlide key={`choose-${index}`}>
                                    <section className={`flex direction-column items-start`}>
                                        <figure><Image src={whyChooseIcon} alt={whyChooseIcon} width={77} height={65} /></figure>
                                        <h3>{whyChooseTitle}</h3>
                                        <p>{whyChooseDetail}</p>
                                    </section>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    )
}