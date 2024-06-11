import React, {useEffect} from "react";
import style from "./industriesSection.module.scss";
import AOS from 'aos';
import Image from "next/image";

export default function IndustriesSection (props) {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
          <div className={`${style.industries_section} ${style[props.extraClass]}`}
           data-aos="fade-up"
           data-aos-duration="1000"
      >
          <div className="container">
              <div className={style.industries_content}>
                  <div className={style.industries_title} data-aos="fade-left"
                                        data-aos-duration="2000">
                      <span>OUR INDUSTRIES</span>
                      {props.industryTitle}
                      {props.industryDescription}
                  </div>
                  <div className={style.industries_list}>
                      <ul className="list-none flex flex-wrap">
                          {
                              props.industriesSectionList?.map(({icon,title},index)=>{
                                  return(
                                      <li key={index}>
                                          <section data-aos="fade-up"
                                        data-aos-duration="2000">
                                              <Image src={icon} alt="icon" width={24} height={24}/>
                                              <h3>{title}</h3>
                                          </section>
                                      </li>
                                  )
                              })
                          }
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  );
}
