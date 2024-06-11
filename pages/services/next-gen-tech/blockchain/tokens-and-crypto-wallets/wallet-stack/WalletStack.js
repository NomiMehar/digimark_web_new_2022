import style from "./walletStack.module.scss";
import React, {useEffect, useState} from "react";
import walletStackList from "./walletStackList.json"
import AOS from "aos";
import Image from "next/image";

export default function WalletStack(props) {
    const [tabs, setTabs] = useState(0);
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`flex flex-wrap direction-column ${style.wallet_tech_wrapper}`}>
            <div className="container">
                <div className={`section_title white ${style.section}`}>
                    <h2>Tech Stack For Crypto <br/><span>Wallet Development</span></h2>
                    <p>We at DigiMark Developers provide unmatched Cryptocurrency wallet development services to our clients.</p>
                </div>
                <div className={style.wallet_tech_wrap}>
                    <div
                        className={style.wallet_tech}
                        data-aos="fade-up"
                    >
                        <ul className="list-none flex">
                            {
                                walletStackList.map(({tab_button},index)=>{
                                    return(
                                        <li key={`custom-${index}`}>
                                            <button
                                                onClick={() => setTabs(index)}
                                                className={`${ tabs === index ? `${style.active}` : ""}`}
                                            >{tab_button}
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={style.wallet_tech_list}>
                        <ul className="list-none flex flex-wrap">
                            {
                                walletStackList.map(({listWrap}, index) => {
                                    if(tabs===index) {
                                        return (
                                            <>
                                                {
                                                    listWrap.map(({img, name}, index)=>{
                                                        return(
                                                            <li key={index}  data-aos="flip-up"
                                                            data-aos-duration="1000">
                                                                <section>
                                                                    <Image src={img} width={40} height={40} alt="img"/>
                                                                    <span>{name}</span>
                                                                </section>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}