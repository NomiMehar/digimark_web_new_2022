import React, {useEffect} from "react";
import style from "./walletDevelopment.module.scss";
import AOS from 'aos';
import Image from "next/image";
import walletList from "./walletDevelopmentList.json"

export default function WalletDevelopment (props) {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
      <div className={`${style.wallet_wrapper} ${style[props.classes]}`}
      >
          <div className="container">
              <div className="section_title" data-aos="fade-up"
          data-aos-duration="2000">
                  <h2>Impeccable Cryptocurrency <br/> <span>Wallet Development Services</span></h2>
                  <p>We at DigiMark Developers provide unmatched Cryptocurrency wallet development services to our clients.</p>
              </div>
              <ul className="list-none flex flex-wrap">
                  {
                      walletList.map(({walletImage,walletName, walletDescription},index)=>{
                          return(
                              <li key={index} data-aos="flip-right"
                              data-aos-duration="1000">
                                  <section>
                                      <figure><Image src={walletImage} alt="walletImage" width={38} height={40}/></figure>
                                      <h3>{walletName}</h3>
                                      <p>{walletDescription}</p>
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
