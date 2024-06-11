import style from "./events.module.scss"
import ModalImage from "react-modal-image";
import eventList from "./eventList.json"
import {useEffect} from "react";
import AOS from 'aos';

export default function Events () {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className={style.events_wrapper}>
            <div className="container">
                <div className="section_title white"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <h2><span>Events</span> @ DigiMark Developers</h2>
                </div>
                <div className={style.events_list}>
                    <span></span>
                    <ul className="list-none flex flex-wrap">
                        {
                            eventList.map(({eventImage,eventTitle}, index)=>{
                                return(
                                    <li key={`events-${index}`}
                                        data-aos="fade-right"
                                        data-aos-duration="1000">
                                        <ModalImage
                                            small={eventImage}
                                            large={eventImage}
                                            alt={eventTitle}
                                        />
                                        <h3>{eventTitle}</h3>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}