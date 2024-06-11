import React, {useEffect} from "react";
import style from "./blockchainPortfolio.module.scss"
import blockchainPortfolioList from "./blockchainPortfolioList.json"
import {Autoplay, Navigation, Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Image from "next/image";
import AOS from 'aos';


export default function BlockchainPortfolio() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={style.blockchain_portfolio_wrap}>
            <div className="container">
                <div className={`section_title white ${style.title}`} data-aos="fade-left"
                                        data-aos-duration="2000">
                    <h2>Our blockchain development <span>Portfolio</span></h2>
                    <p>Support your aim for your product and business with decentralized, transparent technology and professionals who can help you meet your targets.</p>
                </div>
                <div className={`blockchain_portfolio ${style.blockchain_portfolio}`} data-aos="fade-up"
                                        data-aos-duration="2000">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        centeredSlides={false}
                        pagination={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        speed={3000}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        breakpoints={{
                            1200: {
                                slidesPerView: 1,
                            },
                            900: {
                                slidesPerView: 1,
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
                            blockchainPortfolioList.map(({blockProcessImage,blockProcessTitle,blockProcessDescription,location,teamSize,tech},index)=>{
                                return(
                                    <SwiperSlide key={index}>
                                        <div className={`flex items-center ${style.portfolio_wrap}`}>
                                            <img className={style.procimg} src={blockProcessImage} alt="blockProcessImage"/>
                                            <section>
                                                <h3>{blockProcessTitle}</h3>
                                                <p>{blockProcessDescription}</p>
                                                <ul className="list-none">
                                                    <li>
                                                        <strong>Location</strong>
                                                        <p>{location}</p>
                                                    </li>
                                                    <li>
                                                        <strong>Team Size</strong>
                                                        <p>{teamSize} <span>{tech}</span></p>
                                                    </li>
                                                </ul>
                                            </section>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <Link href="/" className={style.slide_btn}>See the story <Image src={whiteArrow} alt={whiteArrow} width={25} height={14} /></Link>
                </div>
            </div>
        </div>
    )
}