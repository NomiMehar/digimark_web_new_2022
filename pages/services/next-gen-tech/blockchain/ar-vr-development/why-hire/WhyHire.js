import style from "./whyHire.module.scss";
import React, {useEffect} from "react";
import AOS from 'aos';

export default function WhyHire(props) {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`flex flex-wrap direction-column ${style.why_hire_wrap}`}>
            <div className="container">
                <h2 data-aos="fade-up" data-aos-duration="2000">Why <span>Hire DigiMark Developers</span> as Your <br/>AR/VR & MR Company?</h2>
                <div className="flex">
                    <div className={style.left_section} data-aos="fade-left" data-aos-duration="2000">
                        <p>DigiMark Developers has experience in developing technically complex VR/AR & MR solutions from scratch, our specialists have a proven record in providing analytics and designing architecture. We dispatch highly immersive and innovative applications that extend reality. We strive to adhere to SOLID principles, make applications flexible and consisting of independent modules, divide applications into states and use the Finite State Machines model.</p>
                        <p>“The rapid development of immersive technologies (AR/VR) makes it possible to constantly improve the user experience in ecosystems and applications that can potentially become part of the Metaverse. AR and VR are the defining and inspiring technologies in the implementation of the Metaverse concept, which until recently was perceived as science fiction.”</p>
                    </div>
                    <div className={style.right_section} data-aos="fade-right" data-aos-duration="2000">
                        <ul className={`list-none ${style.list_wrap}`}>
                            <li>Experienced in working with all common VR/MR devices</li>
                            <li>Skilled in creating high resolution VR graphics</li>
                            <li>Combine high-precision graphics with user-friendly
                                software</li>
                            <li>Developed solutions for non-standard devices</li>
                            <li>Keep up with new technologies and tools</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}