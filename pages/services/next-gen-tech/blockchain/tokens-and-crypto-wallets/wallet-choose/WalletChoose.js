import React, {useEffect} from "react";
import style from "./walletChoose.module.scss";
import AOS from 'aos';
import Image from "next/image";
import walletChooseList from "./walletChooseList.json"

export default function WalletChoose (props) {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
      <div className={`${style.wallet_choose_wrapper} ${style[props.classes]}`}
           data-aos="fade-up"
           data-aos-duration="1000"
      >
          <div className="container">
              <div className="section_title white">
                  <h2>Why To Choose Us For Your <br/> <span>Cryptocurrency Wallet Development</span></h2>
              </div>
              <ul className="list-none flex flex-wrap">
                  {
                      walletChooseList.map(({techImage,techName},index)=>{
                          return(
                              <li key={index}  data-aos="flip-up"
                              data-aos-duration="1000">
                                  <section className="flex items-center">
                                      <Image src={techImage} alt="techImage" width={39} height={39}/>
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
