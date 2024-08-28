import React, { useState } from 'react'
import eventGalleryList from "./EventGalleryList.json"
import style from "./eventGallery.module.scss"
import Image from "next/image";

export default function EventGallery () {
    const imagePerRow = 4;
    const [next, setNext] = useState(imagePerRow);
    const handleMoreImage = () => {
        setNext(next + imagePerRow);
    };
    return (
        <>
            <div className={`flex flex-wrap justify-center ${style.gallery_wrapper}`}>
                <div className="container">
                    <div className="section_title"
                         data-aos="fade-up"
                         data-aos-duration="1000"
                    ><h2><span>Events</span> @ DigiMark Developers</h2></div>
                    <div className={style.gallery_list_wrapper}>
                        <ul className="list-none flex flex-wrap">
                            {eventGalleryList?.slice(0, next)?.map(({galleryImage,galleryTitle,galleryDescription}, index) => {
                                return (
                                    <li key={index}
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                    >
                                        <figure>
                                            <Image width={100} height={100} src={galleryImage} alt="gallery"/>
                                            <figcaption>
                                                <h3>{galleryTitle}</h3>
                                                <p>{galleryDescription}</p>
                                            </figcaption>
                                        </figure>
                                    </li>
                                );
                            })}
                        </ul>
                        {/*{next < eventGalleryList?.length && (*/}
                        {/*    <button*/}
                        {/*        onClick={handleMoreImage}*/}
                        {/*    >*/}
                        {/*        Load more*/}
                        {/*    </button>*/}
                        {/*)}*/}
                    </div>
                </div>
            </div>
        </>
    );
};