import React, {useEffect} from "react";
import style from "./ExpertiesIn.module.scss";
import AOS from 'aos';
import Image from "next/image";
import ExpertiesInList from "./ExpertiesInList.json"

export default function ExpertiesIn (props) {
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
                  <h2>AI Models We Have <span>Expertise In</span></h2>
                  <p>Enjoy the benefits of owning a mobile application! Be relevant and competitive thanks to technology opportunities!</p>
              </div>
              <ul className="list-none flex flex-wrap">
                  {
                      ExpertiesInList.map(({techImage,techName},index)=>{
                          return(
                              <li key={index} data-aos="flip-left" data-aos-duration="2000">
                                  <section>
                                      <Image src={techImage} alt="techImage" width={58} height={58}/>
                                  </section>
                                      <h3>{techName}</h3>
                              </li>
                          )
                      })
                  }
              </ul>
          </div>
      </div>
  );
}
