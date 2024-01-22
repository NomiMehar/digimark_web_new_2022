import style from "./OurClients.module.scss"
import Image from "next/image"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import ourClient from './OurClient.json'
export default function OurClients() {
    return (
        <div className={`flex direction-column ${style.our_clients}`}>
                <div className="container">
                    <div
                        className={`section_title white ${style.title}`}
                    >
                        <Image className={style.figma} src='/assets/images/services/figma.svg' width={100} height={100} alt='figma'/>
                        <div className={style.title_wrapper}>
                        <h2><Image className={style.user} src='/assets/images/services/user_circle.svg' width={100} height={100} alt='user_circle'/> Digi<span>Mark</span> Developers</h2>
                        </div>
                    </div>
                   <div className={`client_slider ${style.client_slider}`}>
                       <h4>Our clients love us</h4>
                   <Swiper navigation={true}
                        modules={[Navigation,Pagination]}  pagination={{
                            clickable: true,
                        }} className="mySwiper">
                            {ourClient.map(({quotes,review,client,clientName,clientCompany,clientLogo},index)=>{
                                return(
                        <SwiperSlide>
                        <div className={style.client_review} key={index}>
                            <ul className="list-none">
                                <li><Image className={style.quotes} src={quotes} width={100} height={100} alt='quotes'/></li>
                                <li><p>{review}</p></li>
                                <li>
                                    <div className={style.name}>
                                    <Image className={style.client} src={client} width={100} height={100} alt='client'/>
                                    <div>
                                        <h5>{clientName}</h5>
                                        <p>{clientCompany}</p>
                                    </div>
                                    </div>
                                </li>
                            </ul>
                            <div className={style.client_logo}>
                            <Image className={style.logo} src={clientLogo} width={100} height={100} alt='client_logo'/>
                            </div>
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