import style from "./workQualityAssurance.module.scss"
import workQualityAssuranceList from "./workQualityAssuranceList.json"
import {Autoplay, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";

export default function WorkQualityAssurance() {
    return(
        <>
            <div className={style.work_quality_assurance}>
                <div className="container">
                    <div className={`${style.section_title}`}>
                        <h2>Featured <span>Work</span></h2>
                    </div>
                    <div className={`work_quality ${style.work_quality}`}>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            centeredSlides={false}
                            pagination={false}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                            breakpoints={{
                                1200: {
                                    slidesPerView: 3,
                                },
                                900: {
                                    slidesPerView: 2,
                                },
                                0: {
                                    slidesPerView: 1,
                                }
                            }}
                        >
                            {
                                workQualityAssuranceList.map(({slideImage,title},index)=>{
                                    return(
                                        <SwiperSlide key={index}>
                                            <section>
                                                <figure>
                                                    <Image width={456} height={439} src={slideImage} alt="slideImage"/>
                                                    <figcaption>
                                                        <Link href="/">
                                                            {title}
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                                <path d="M6.03156 28.5426L23.1265 11.4476L23.104 26.2901C23.1042 27.1386 23.441 27.9519 24.0407 28.5517C24.6407 29.1517 25.4541 29.4885 26.3022 29.4884C27.1507 29.4886 27.9641 29.1515 28.5639 28.5517C29.1637 27.9519 29.5007 27.1386 29.5005 26.2901L29.5006 3.76722C29.4915 3.3479 29.3995 2.93465 29.2303 2.55098C28.9071 1.77738 28.2921 1.16232 27.5185 0.839221C27.1348 0.669935 26.7216 0.578006 26.3023 0.56894L3.77924 0.56885C3.35875 0.567108 2.94208 0.64864 2.5533 0.808765C2.16446 0.968889 1.81121 1.20442 1.51387 1.50176C1.21654 1.79909 0.981003 2.15234 0.820909 2.54115C0.660784 2.92993 0.579219 3.34664 0.580961 3.76713C0.57925 4.18759 0.660783 4.60427 0.820877 4.99308C0.981032 5.38189 1.21653 5.73517 1.51387 6.03251C1.8112 6.32984 2.16446 6.56531 2.55326 6.72547C2.94207 6.88556 3.35875 6.9671 3.77924 6.96541L18.6219 6.94298L1.52693 24.0379C0.929591 24.6353 0.593966 25.4454 0.593996 26.2902C0.593995 27.135 0.92956 27.9452 1.52693 28.5426C2.12428 29.1399 2.93445 29.4755 3.77925 29.4755C4.62401 29.4755 5.43421 29.1399 6.03156 28.5426Z" fill="white"/>
                                                            </svg>
                                                        </Link>
                                                    </figcaption>
                                                </figure>
                                            </section>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}