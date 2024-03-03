import style from "./creativePcGame.module.scss"
import creativePcGameList from "./creativePcGameList.json"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function CreativePcGame() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        centerMode: true,
        slidesToShow: 4.4,
        slidesToScroll: 1,
        prevArrow: <span><Image src="/assets/images/services/angle-arrow.svg" width={10} height={15} alt=""/></span>,
        nextArrow: <span><Image src="/assets/images/services/angle-arrow.svg" width={10} height={15} alt=""/></span>,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return(
        <>
            <div className={style.creative_pc_game}>
                <div className="container">
                    <div className="section_title">
                        <h2>Our <span>Creative PC Game</span> Projects</h2>
                        <p>Our work speaks about us. Reach out to our experts and learn about our successful captivating gaming experiences that have helped a large audience.</p>
                    </div>
                </div>
                <div className={`creative_pc_slider ${style.creative_pc_slider}`}>
                    <Slider {...settings}>
                        {
                            creativePcGameList.map(({slideImage,slideTitle,description},index)=>{
                                return(
                                    <div className={style.creative_pc_slide} key={index}>
                                        <Image src={slideImage} width={643} height={405} alt="img"/>
                                        <section>
                                            <h3>{slideTitle}</h3>
                                            <p>{description}</p>
                                        </section>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}