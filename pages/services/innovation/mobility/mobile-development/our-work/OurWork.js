import style from "./ourWork.module.scss"
import ourWorkLists from './OurWorkLists.json'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import {useEffect} from "react";
import AOS from 'aos';

export default function OurWork(props) {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`flex direction-column ${props.smartClass} ${style[props.smartClass]} ${style[props.classes]} ${style.work_slide_wrap}`}>
            <div className="container">
                <div className={`section_title flex direction-column ${props.classes === "nft_works" ? "nft_marketplace_works" : "white" }`}
                     data-aos="fade-up"
                     data-aos-duration="1000"
                >
                    <h2><span>Some of our works</span></h2>
                    <p>{props.description}</p>
                </div>
                <div className={`work_slide ${style.work_slide}`}>
                    <Swiper
                        slidesPerView={props.perView}
                        spaceBetween={30}
                        centeredSlides={props.centeredSlides}
                        loop={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        speed={3000}
                        modules={[Autoplay]}
                        breakpoints={{
                            1200: {
                                slidesPerView: props.perView,
                            },
                            600: {
                                slidesPerView: 1,
                            },
                            0: {
                                slidesPerView: 1,
                            },
                        }}
                        className="mySwiper"
                    >
                        {
                            props.ourWorkList?.map(({projectImage,projectTitle,productName,projectNo},index)=>{
                                return(
                                    <SwiperSlide key={index}>
                                        <div className={style.project_list}>
                                            <img src={projectImage} alt={projectImage}/>
                                            <section>
                                                <small>{projectNo}</small>
                                                <h3>{projectTitle}</h3>
                                                <span>{productName}</span>
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

