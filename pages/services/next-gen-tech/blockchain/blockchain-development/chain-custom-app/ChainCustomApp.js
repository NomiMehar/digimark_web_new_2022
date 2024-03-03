import React, {useEffect} from "react";
import style from "./chainCustomApp.module.scss"
import chainCustomAppList from "./chainCustomAppList.json"
import AOS from 'aos';

export default function ChainCustomApp() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`defi_improve ${style.chain_custom_wrapper}`}>
            <div className="container">
                <div className={`section_title white ${style.title}`} data-aos="fade-left"
                                        data-aos-duration="2000">
                    <h2>Top <span>Blockchain Development</span> Company That Build’s Custom Apps</h2>
                    <p> Looking for experts to develop the Best Blockchain app? With extensive experience in cryptocurrency wallets, decentralized exchanges, and more, we offer complete support throughout the project life cycle. Our software solutions are designed with your business's growth in mind, ensuring scalability and robustness. Trust us to deliver results that meet your objectives!</p>
                </div>
                <div className={style.chain_custom_app}>
                    <ul className="list-none flex flex-wrap">
                        {
                            chainCustomAppList.map(({title,description},index)=>{
                                return(
                                    <li key={index}>
                                        <section data-aos="fade-up"
                                        data-aos-duration="2000">
                                            <h3>{title}</h3>
                                            <p>{description}</p>
                                        </section>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}