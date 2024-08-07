import React,{useEffect} from "react";
import style from "./maintenanceServices.module.scss"
import MaintenanceServicesList from "./MaintenanceServices.json"
import Image from "next/image";
import lineImage from "../../../../../public/assets/images/support/line.svg"
import AOS from 'aos';

export default function MaintenanceServices () {
    useEffect(() => {
           AOS.init();
       }, [])
  return (
    <div className={`flex direction-column maintenance_services_wrap ${style.maintenance_services_wrap}`}>
        <div className="container">
            <div className={`customs_app_title flex direction-column ${style.customs_app_title}`} data-aos="fade-right" data-aos-duration="1000">
                <h2>Our Services for Developing <span>AI Chatbots</span></h2>
                <p>For business growth, we create personalised chatbots that can learn, converse organically, and perform tasks automatically. It's simple to incorporate with any platform and give clients accurate responses.</p>
            </div>
            <div className={`${style.services_list}`}>
                <ul className="list-none flex flex-wrap">
                    {
                        MaintenanceServicesList.map(({title,description},index)=>{
                            return(
                                <li key={index} data-aos="flip-up" data-aos-duration="1000">
                                    <Image src={lineImage} alt={lineImage} width={78} height={5}/>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  );
};