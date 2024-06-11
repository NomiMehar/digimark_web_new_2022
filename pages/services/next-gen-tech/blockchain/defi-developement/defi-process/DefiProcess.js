import React, {useEffect} from "react";
import style from "./defiProcess.module.scss";
import AOS from 'aos';
import Image from "next/image";
import defiProcessList from "./defiProcessList.json"

export default function DefiProcess (props) {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
      <div className={`${style.defi_process_wrapper} ${style[props.classes]}`}
           data-aos="fade-up"
           data-aos-duration="2000"
      >
          <div className="container">
              <div className="section_title">
                  <h2><span>DeFi Development</span> Processes</h2>
              </div>
              <ul className="list-none flex flex-wrap">
                  {
                      defiProcessList.map(({processImage,processName,processDes},index)=>{
                          return(
                              <li key={index} data-aos="fade-down" data-aos-duration="2000">
                                  <section>
                                      <figure><Image src={processImage} alt="processImage" width={125} height={125}/></figure>
                                      <h3>{processName}</h3>
                                      <p>{processDes}</p>
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
