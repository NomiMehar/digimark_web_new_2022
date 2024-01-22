import React, {useEffect} from "react";
import style from "./callToAction.module.scss";
import AOS from 'aos';

export default function CallToAction (props) {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
      <div className={`${style.call_to_action} ${style[props.classes]}`}
           data-aos="fade-up"
           data-aos-duration="1000"
      >
          <div className="container">
              <div className={style.callto_content}>
                  <h2><span>Smart Contract</span> Development Tech <br/>Stack we rely on</h2>
              </div>
          </div>
      </div>
  );
}
