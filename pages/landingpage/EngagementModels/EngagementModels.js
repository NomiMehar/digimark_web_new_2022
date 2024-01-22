import React, {useEffect} from "react";
import Link from "next/link";
import EngagementModelsData from "./EngagementModelsData.json";
import style from "./EngagementModels.module.scss";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function EngagementModels() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className={`flex direction-column ${style.engagements}`}>
      <div className="container">
        <div className="main_section_title white_title"
             data-aos="fade-up"
             data-aos-easing="ease-in-sine"
             data-aos-duration="1000"
        >
          <h2>
            Engagement Models
          </h2>
        </div>
        <div className={`flex direction-column w-100 ${style.engagement_data}`}>
          <ul className="list-none flex w-100">
            {EngagementModelsData.map(({ img, title }, index) => {
              return (
                  <li key={index} className="text-center" data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-sine">
                    <Image src={img} alt="engagement_images" className="prsogfill" width={80} height={80}/>
                    <h3>{title}</h3>
                  </li>
              );
            })}
          </ul>
        </div>
        <div className="text-center"
             data-aos="fade-right"
             data-aos-easing="ease-in-sine"
             data-aos-duration="1000"
        >
          <Link
            href="pages/landingpage/EngagementModels/EngagementModels"
            className={`font-white engagement_link ${style.engagement_link}`}
          >
            Learn more <i className="fa fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
