import style from "./metaverse-expertise.module.scss";
import MetaverseData from "./MetaverseExperienceData.json";
import React, {useEffect} from "react";
import AOS from 'aos';

export default function MetaverseExperience() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`w-100 items-center ${style.metaverse_list}`}>
            <ul className={`list-none flex`} data-aos="flip-up" data-aos-duration="2000">
                {MetaverseData.map(({ ExpertiseTitle, ExpertiseContent }, index) => {
                    return (
                        <li className="flex items-center justify-center direction-column" key={`business-${index}`}>
                            <span className="flex items-center justify-center">{ExpertiseTitle}</span>
                            <p>{ExpertiseContent}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}