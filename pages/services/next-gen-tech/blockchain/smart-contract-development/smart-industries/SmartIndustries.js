import React, {useEffect} from "react";
import style from "./smartIndustries.module.scss";
import SmartIndustriesList from "./SmartIndustriesList.json"
import AOS from 'aos';

export default function SmartIndustries (props) {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
      <div className={`${style.smart_industries}`}>
          <div className="section_title"  data-aos="fade-up"
           data-aos-duration="2000">
             <div className="container">
             <h2><span>Smart Contract Development</span> By Industries</h2>
              <p>Let’s explore for what industries we provide smart contract development services</p>
             </div>
          </div>
          <div className="container">
              <div className={`flex flex-wrap`}>
                  <ul className="flex flex-wrap list-none justify-center items-center w-100">
                      {
                          SmartIndustriesList.map(({industries}, index)=>{
                              return (
                                  <li  data-aos="flip-left"
                                  data-aos-duration="1000">
                                    <span>{industries}</span>
                                  </li>
                              )
                          })
                      }
                  </ul>
              </div>
          </div>
      </div>
  );
}
