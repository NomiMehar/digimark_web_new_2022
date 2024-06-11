import React, {useEffect} from "react";
import style from "./seamless.module.scss";
import AOS from 'aos';
import Image from "next/image";
import seamlessList from "./seamlessList.json"

export default function Seamless (props) {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
      <div className={`${style.seamless_wrapper} ${style[props.classes]}`}
      >
          <div className="container">
            {props.seamless === true ? <div className="section_title" data-aos="fade-up" data-aos-duration="2000">
                  <h2>Get Exceptional Trading Experience <br/> With Secure And <span>Seamless Crypto Payments</span></h2>
                  <p>Enable fast and secure crypto payments with decentralized crypto wallets</p>
              </div> : <div className="section_title" data-aos="fade-up" data-aos-duration="2000">
                  <h2><span>Features</span> of Web <br/> Application Development</h2>
                  <p>Adding these features to web applications can enhance functionality & user experience.</p>
              </div>}
              
              <ul className="list-none flex flex-wrap">
                  {
                      props.data && props.data.map(({techImage,techName},index)=>{
                          return(
                              <li key={index} data-aos="flip-up" data-aos-duration="2000">
                                  <section>
                                      <Image src={techImage} alt="techImage" width={56} height={56}/>
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
