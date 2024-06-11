import style from "./ProductProcess.module.scss"
import React, { useRef, useState, useEffect } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import productProcessList from './ProductProcessList.json'
import AOS from 'aos';
import Image from "next/image";

export default function ProductProcess() {
    useEffect(() => {
        AOS.init();
    }, [])
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            const array = ['01 Design Research', '02 Concept Design', '03 Product Design', '04 Design Visualisation', '05 Production Support']
            console.log("index check: ", index)
            return '<span class="' + className + '">' + (array[index]) + "</span>";
        },
    };
    return (
        <div className={`flex direction-column ${style.product_process}`}>
            <div className={style.top_section}>
                <div className="container">
                    <div
                        className={`section_title white ${style.title}`}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <h2>Our <span>Product Design Process</span></h2>
                    </div>
                </div>
            </div>
            <div className={`slider_swiper ${style.slider}`}>
                <div className="container">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        pagination={pagination}
                        modules={[Pagination]}
                        className={style.swiper}
                    >
                        {productProcessList.map(({ title, desc, img }, index) => {
                            return (
                                <SwiperSlide>
                                    <div className={style.slider_box} key={index}>
                                        <h4>{title}</h4>
                                        <p>{desc}</p>
                                        <Image src={img} alt={img} width={100} height={100} />
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}