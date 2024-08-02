import React,{useEffect} from "react";
import style from "./maintenanceServices.module.scss"
import MaintenanceServicesList from "./MaintenanceServices.json"
import Image from "next/image";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";
import lineImage from "../../../../../../public/assets/images/support/line.svg"
import AOS from 'aos';

export default function MaintenanceServices () {
    useEffect(() => {
           AOS.init();
       }, [])
  return (
    <div className={`flex direction-column maintenance_services_wrap ${style.maintenance_services_wrap}`}>
        <div className="container flex">
            <div className={`customs_app_title flex direction-column ${style.customs_app_title}`} data-aos="fade-right" data-aos-duration="1000">
                <h2>Benefits Of Customised <span>Generative AI</span> in the Real World</h2>
                <p>Learn about the practical advantages of customised generative AI solutions: increased productivity, reduced expenses, better judgement, and creative potential that can propel your company forward.</p>
                <Link href="/contact-us/#contactForm" className={`contact_btn`}>schedule An App Expert Session <Image src={whiteArrow} alt={whiteArrow} width={13} height={16  } /></Link>
            </div>
            <div className={`${style.services_list}`}>
                <ul className="list-none flex flex-wrap">
                    {
                        MaintenanceServicesList.map(({title,description},index)=>{
                            return(
                                <li key={index} data-aos="flip-right" data-aos-duration="1000">
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