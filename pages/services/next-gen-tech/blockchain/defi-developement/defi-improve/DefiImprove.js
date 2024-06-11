import style from "./defiImprove.module.scss";
import React, {useEffect} from "react";
import AOS from 'aos';
import defiImproveList from "./defiImproveList.json"

export default function DefiImprove(props) {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`flex flex-wrap direction-column defi_improve ${style.defi_improve}`}>
            <div className="container">
                <div className="section_title" data-aos="fade-up" data-aos-duration="2000">
                    <h2>How Can <span>DeFi Development</span> <br/> Improve Your Business?</h2>
                    <p style={{width: "100%"}}>Examine how DeFi solutions can enhance your business before delving into the specifics of our DeFi development services.</p>
                </div>
                <div className={style.defi_improve_text}>
                    <ul className="list-none flex flex-wrap">
                        {
                            defiImproveList.map(({no,title,description},index)=>{
                                return(
                                    <li key={index} data-aos="flip-left" data-aos-duration="2000">
                                        <h2><small>{no}</small>{title}</h2>
                                        <p>{description}</p>
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