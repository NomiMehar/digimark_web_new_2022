import React, {useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import SwiperCore, { Mousewheel, Pagination, Autoplay, EffectCube } from "swiper";
SwiperCore.use([Mousewheel, Pagination, Autoplay, EffectCube]);
import WhoWeAreData from "./WhoWeAreData.json";
import style from "./WhoWeAre.module.scss";
import AOS from "aos";
import Image from "next/image";

function WhoWeAre() {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <div className={`flex direction-column ${style.who_we_are}`}>
      <div className={`container ${style.container}`}>
        <div className="main_section_title"
             data-aos="fade-up"
             data-aos-easing="ease-in-sine">
          <h2>
            Who <span>we are</span>
          </h2>
        </div>
        <div className={`our_slider ${style.our_slider}`}
             data-aos="fade-up"
             data-aos-easing="ease-in-sine"
             data-aos-offset="200">
          <Swiper
              effect={"cube"}
              grabCursor={true}
              loop={true}
              cubeEffect={{
                  shadow: false,
                  slideShadows: false,
                  shadowOffset: 20,
                  shadowScale: 0.94,
              }}
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={0}
            mousewheel={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
              speed={3000}
            pagination={{
              clickable: true,
            }}
              breakpoints={{
                  1200: {
                      direction: "vertical"
                  },
                  0: {
                      direction: "horizontal"
                  },
              }}
          >
            {WhoWeAreData.map(({ darkTitle, lightTitle, para, img }, index) => {
              return (
                <SwiperSlide
                    key={index}>
                  <div
                    className={`flex items-center ${style.slider_grid}`}
                  >
                    <div
                        className={style.slider_content}
                    >
                      <h2>
                        {darkTitle}<span>{lightTitle}</span>
                      </h2>
                      <p className="font-white">{para}</p>
                    </div>
                    <div className={style.side_img}>
                      <Image width={100} height={100} src={img} alt="slider_Img" />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
