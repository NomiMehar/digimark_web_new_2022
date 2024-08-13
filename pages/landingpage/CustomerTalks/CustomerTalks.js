import React, { useEffect, useRef, useState } from "react";
import style from "./CustomerTalks.module.scss";
import CustomerTalksData from "./CustomerTalksData.json";
import darkArrow from "../../../public/assets/images/homepage/who_we_are/arrow-right.svg";
import whiteArrow from "../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import playIcon from "../../../public/assets/images/homepage/banner/play.webp";
import pauseIcon from "../../../public/assets/images/homepage/banner/pause.webp";
import muteIcon from "../../../public/assets/images/homepage/banner/mute.svg";
import unmuteIcon from "../../../public/assets/images/homepage/banner/unmute.svg";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CustomerTalks(props) {
    const handleMouseEnter = () => {
        document.body.classList.add('hovered');
    };
    const handleMouseLeave = () => {
        document.body.classList.remove('hovered');
    };

    useEffect(() => {
        AOS.init();
    }, []);

    const [tabs, setTabs] = useState(0);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    const playPause = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const muteUnmute = () => {
        const video = videoRef.current;
        video.muted = !video.muted;
        setIsMuted(video.muted);
    };

    useEffect(() => {
        // Ensure video autoplay and mute settings on mount
        const video = videoRef.current;
        if (video) {
            video.muted = isMuted;
            video.play();
        }
    }, [isMuted]);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.muted = true; // Ensure the video is muted to comply with autoplay policies
            video.play();
        }
    }, [tabs]);

    return (
        <div className={`flex direction-column ${props.classProp} ${style.customer_talk}`}>
            <div className="container">
                <div className="main_section_title"
                     data-aos="fade-up"
                     data-aos-easing="ease-in-sine"
                     data-aos-duration="1000"
                >
                    {
                        props.customerTitle === true ? props.customerTitleText : <h2>
                            Customers <span>Talk<small>.</small></span>
                        </h2>
                    }
                </div>
                <div className={`flex ${style.customer_tabs}`}>
                    <div className={`flex direction-column ${style.tabs_list}`}
                         data-aos="fade-right"
                         data-aos-easing="ease-in-sine"
                         data-aos-duration="1000"
                    >
                        <ul className="flex direction-column list-none">
                            {
                                CustomerTalksData.map(({ tab_button }, index) => {
                                    return (
                                        <li key={`customer-${index}`}>
                                            <button
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                                onClick={() => setTabs(index)}
                                                className={` ${style.tab_btn} ${tabs === index ? `${style.active}` : ""}`}
                                            >
                                                {tab_button}
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={`flex ${style.tabs_content}`}
                         data-aos="fade-left"
                         data-aos-easing="ease-in-sine"
                         data-aos-duration="1000"
                    >
                        {
                            CustomerTalksData.map(({ customer_name, customer_video_Link, customer_description, project_detail_link, project_name, customer_country, flagImage, customer_tech }, index) => {
                                if (tabs === index) {
                                    return (
                                        <div className="flex" key={`tab-content-${index}`}>
                                            <div className={`${style.tabs_content_text}`}>
                                                <h3>{customer_name}</h3>
                                                <p>{customer_description}</p>
                                                <Link
                                                    onMouseEnter={handleMouseEnter}
                                                    onMouseLeave={handleMouseLeave}
                                                    className={style.detail_link} href={project_detail_link}>Project Details <Image src={darkArrow} alt="darkArrow" width={13} height={16} /></Link>
                                                <ul className={`list-none`}>
                                                    <li className="flex items-center"><span>Country:</span> <small>
                                                        {/* <Image src={flagImage} alt="flagImage" width={45} height={30} /> */}
                                                         {customer_country}</small></li>
                                                    <li className="flex items-center"><span>Core Tech:</span> <small>{customer_tech}</small></li>
                                                </ul>
                                                <Link
                                                    onMouseEnter={handleMouseEnter}
                                                    onMouseLeave={handleMouseLeave}
                                                    className="contact_btn" target="_blank" href="https://calendly.com/digimark-developers">Contact Us <Image src={whiteArrow} alt="whiteArrow" width={13} height={16} /></Link>
                                            </div>
                                            <div className={`${style.customer_video}`}>
                                                <section>
                                                    <video ref={videoRef} autoPlay loop muted>
                                                        <source src={customer_video_Link} type="video/mp4" />
                                                    </video>
                                                    <div className={style.custom_controls}>
                                                        <button onClick={playPause}>
                                                          <Image src={isPlaying ? pauseIcon : playIcon} alt="controls" width={25} height={25} />
                                                        </button>
                                                        <button onClick={muteUnmute}>
                                                          <Image src={isMuted ? muteIcon : unmuteIcon} alt="controls" width={25} height={25} />
                                                        </button>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
