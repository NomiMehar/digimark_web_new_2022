import style from "./smartBenefits.module.scss"
import SmartBenefitsList from "./SmartBenefitsList.json"
import React, {useEffect} from "react";
import AOS from 'aos';

export default function SmartBenefits(props) {
  useEffect(() => {
    AOS.init();
}, [])
  return(
      <div className={`flex flex-wrap direction-column ${style.smart_contract_wrap}`}>
        <div className="container">
          <div className="section_title" data-aos="fade-up"
                                        data-aos-duration="2000">
            <h2><span>Benefits of Smart Contracts</span><br/> for Your Business</h2>
            <p>Automate the operations within the business and leap to success with a Smart Contract Development Company.</p>
          </div>
          <div className={`${style.smart_contract_wrapper}`}>
            <ul className="list-none flex flex-wrap">
              {
                SmartBenefitsList.map(({benefits}, index)=>{
                  return <li key={index} data-aos="fade-left"
                  data-aos-duration="2000">{benefits}</li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
  )
}