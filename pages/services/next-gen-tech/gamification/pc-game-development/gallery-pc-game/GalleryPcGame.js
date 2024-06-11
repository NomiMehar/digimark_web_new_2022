import style from "./galleryPcGame.module.scss"
import galleryImageList from "./galleryImageList.json"
import Image from "next/image";
import {Autoplay, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

export default function GalleryPcGame() {
    return(
        <>
            <div className={style.gallery_pc_game}>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    speed={3000}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    // breakpoints={{
                    //     1200: {
                    //         slidesPerView: 4,
                    //     },
                    //     900: {
                    //         slidesPerView: 2,
                    //     },
                    //     600: {
                    //         slidesPerView: 2,
                    //     },
                    //     0: {
                    //         slidesPerView: 1,
                    //     },
                    // }}
                    className="mySwiper"
                >
                    {
                        galleryImageList.map(({image},index)=>{
                            return(
                                <SwiperSlide key={index}>
                                    <Image src={image} width={523} height={623} alt="image"/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    )
}