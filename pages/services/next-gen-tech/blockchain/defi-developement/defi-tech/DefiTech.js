import React, {useEffect} from "react";
import style from "./defiTech.module.scss";
import AOS from 'aos';
import Image from "next/image";
import defiTechList from "./defiTechList.json"

export default function DefiTech (props) {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
      <div className={`${style.defi_tech_wrapper} ${style[props.classes]}`}
           data-aos="fade-up"
           data-aos-duration="2000"
      >
          <div className="container">
              <div className="section_title white">
                  <h2>Know <span>The DeFi Technologies</span> <br/>On Which We Work</h2>
                  <p>Design and develop valuable digital assets as per your preferences for your DeFi platform.</p>
              </div>
              <ul className="list-none flex flex-wrap">
                  {
                      defiTechList.map(({techImage,techName},index)=>{
                          return(
                              <li key={index} data-aos="flip-left" data-aos-duration="2000">
                                  <section>
                                      <Image src={techImage} alt="techImage" width={58} height={58}/>
                                      <h3>{techName}</h3>
                                  </section>
                              </li>
                          )
                      })
                  }
              </ul>
          </div>
      </div>
  );
}
