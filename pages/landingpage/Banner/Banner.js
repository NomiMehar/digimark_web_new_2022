import React from "react";
import style from "./Banner.module.scss";
import Typewriter from 'typewriter-effect';

export default function Banner() {
    const handleMouseEnter = () => {
        document.body.classList.add('hovered');
    };
    const handleMouseLeave = () => {
        document.body.classList.remove('hovered');
    };
  return (
    <div className={`flex direction-column justify-center ${style.banner_wrapper}`}>
      <video className={style.banner_video} autoPlay loop muted poster="/assets/images/homepage/banner/banner-poster.webp">
        <source src="/assets/images/homepage/banner/intro.mp4" type="video/mp4" />
      </video>
      <div className="flex direction-column container">
        <section className={style.banner_content}>
          <h1 className="font-white">
              Bridging the Gap Between
            <span className="font-extra-bold font-green">
                 <Typewriter
                     options={{
                         strings: ['Business & Technology', 'Business & Digital Solutions'],
                         autoStart: true,
                         loop: true,
                     }}
                 />
            </span>
              with Our Innovative Solutions!
          </h1>
          <p className="font-white">
          We create <span>Digital Solutions</span> that meet business objectives and ensure impactful transformation towards a better future.          </p>
          {/* <button
              className={style.playBtn}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
          >
            <i className="fa fa-play"></i>
          </button> */}
        </section>
      </div>
    </div>
  );
}
