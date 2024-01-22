import style from "./callToAction.module.scss"
import {useEffect} from "react";
import AOS from 'aos';

export default function CallToAction () {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className={`flex flex-wrap direction-column ${style.call_to_action}`}
             data-aos="fade-up"
             data-aos-duration="2000">
            <div className="container flex">
                <div className={style.call_to_action_text}>
                    <h2>Interested in <span>working</span> with us?</h2>
                    <p>Let's build, launch & grow</p>
                </div>
            </div>
        </div>
    )
}