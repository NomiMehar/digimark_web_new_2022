import style from "./portfolioProducts.module.scss"
import Image from "next/image";
import portImage1 from "../../../../../../public/assets/images/services/port-image1.webp";
import Link from "next/link";
import {Autoplay, Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";

export default function PortfolioProducts(props) {
    return(
        <>
            <div className={`portfolio_products ${style[props.classes]} ${style.portfolio_products}`}>
                <div className="section_title">
                    <h2><span>Portfolio of products</span></h2>
                </div>
                <Swiper
                    slidesPerView={1.5}
                    spaceBetween={90}
                    autoplay={{
                        delay: 13000,
                        disableOnInteraction: false,
                    }}
                    speed={5000}
                    pagination={true}
                    centeredSlides={true}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    loop={false}
                    className="mySwiper"
                    breakpoints={{
                        1200: {
                            slidesPerView: 1.5,
                            spaceBetween: 90,
                        },
                        600: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className={`flex justify-between ${style.portfolio_products_wrap}`}>
                            <section>
                                <h2>Building EV charging platform to revolutionize the way we power</h2>
                                <p>…clean and quiet on-site power to substitute or supplement the use of diesel generators for a variety of remote power needs…</p>
                                <Link href="/">Read more</Link>
                            </section>
                            <Image src={portImage1} alt="image"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`flex justify-between ${style.portfolio_products_wrap}`}>
                            <section>
                                <h2>Building EV charging platform to revolutionize the way we power</h2>
                                <p>…clean and quiet on-site power to substitute or supplement the use of diesel generators for a variety of remote power needs…</p>
                                <Link href="/">Read more</Link>
                            </section>
                            <Image src={portImage1} alt="image"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`flex justify-between ${style.portfolio_products_wrap}`}>
                            <section>
                                <h2>Building EV charging platform to revolutionize the way we power</h2>
                                <p>…clean and quiet on-site power to substitute or supplement the use of diesel generators for a variety of remote power needs…</p>
                                <Link href="/">Read more</Link>
                            </section>
                            <Image src={portImage1} alt="image"/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}