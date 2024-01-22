import React, {useEffect} from "react";
import style from "./whyMaintenance.module.scss"
import MaintenanceImage from "../../../public/assets/images/support/maintenance.png"
import Image from "next/image";
import AOS from 'aos';

export default function WhyMaintenance () {
    useEffect(() => {
        AOS.init();
    },[]);
  return (
    <div className="flex direction-column">
        <div className="container flex direction-column">
            <div className={`section_title ${style.section_title}`} data-aos="flip-right"
                                        data-aos-duration="2000">
                <h2>Why Mobile Application <span>Maintenance?</span></h2>
                <p>In the modern times, many companies have made significant investment in mobile applications, and without proper maintenance such investment might be at risk. Mobile application maintenance may be needed due to many different reasons like</p>
            </div>
            <div className={`flex items-center ${style.why_maintenance_wrap}`}>
                <div className={`flex direction-column ${style.why_maintenance_content}`} data-aos="fade-right" data-aos-duration="2000">
                    <ul className="list-none">
                        <li>New Mobile OS version</li>
                        <li>UI/UX improvement required as per new trends</li>
                        <li>Security updates</li>
                        <li>New features introduced in the Phone manufactures</li>
                        <li>like finger print scanning, camera features changes, face detection.</li>
                    </ul>
                </div>
                <div className={`ml-auto ${style.why_maintenance_img}`} data-aos="fade-left" data-aos-duration="2000">
                    <Image src={MaintenanceImage} alt={MaintenanceImage} width={480} height={486}/>
                </div>
            </div>
        </div>
    </div>
  );
};