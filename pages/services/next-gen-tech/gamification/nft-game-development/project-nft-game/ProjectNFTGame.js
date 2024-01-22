import style from "./projectNftGame.module.scss"
import React from "react";
import {Autoplay, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import projectNftList from "./projectNftList.json"

export default function ProjectNFTGame(props) {
    return(
        <>
            <div className={` ${style[props.extraClass]} ${style.project_nft_game}`}>
                <div className="container">
                    <div className="section_title">
                        <h2>Our <span>Creative NFT Game</span> Projects</h2>
                        <p>We have created many immersive and interactive games across various genres like adventure, action, board, arcing, shooting, real money games, etc.</p>
                    </div>
                    <div className={`project_nft_slide ${style.project_nft_slide}`}>
                        <Swiper
                            slidesPerView={props.perView}
                            spaceBetween={30}
                            centeredSlides={false}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            speed={3000}
                            navigation={true}
                            modules={[Autoplay, Navigation, Pagination]}
                            breakpoints={{
                                1200: {
                                    slidesPerView: props.perView,
                                },
                                900: {
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
                                projectNftList.map(({bgImage,projectTitle,projectDescription},index)=>{
                                    return(
                                        <SwiperSlide key={index}>
                                            <figure style={{ backgroundImage: `url(${bgImage})` }}>
                                                <figcaption>
                                                    <h3>{projectTitle}</h3>
                                                    <p>{projectDescription}</p>
                                                </figcaption>
                                            </figure>
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