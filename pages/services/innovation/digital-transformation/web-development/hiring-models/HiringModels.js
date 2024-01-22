import React from "react";
import style from "./hiringModels.module.scss";
import hiringModels from "./hiringModels.json"
import Image from "next/image";
import Link from "next/link";

export default function HiringModels() {
  return (
    <div className={style.hiring_models}>
        <div className="container">
            <div className="section_title">
                <h2>Business Friendly <span>Hiring Models</span></h2>
                <p>We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:</p>
            </div>
            <div className={style.hiring_models_wrap}>
                <ul className="list-none flex flex-wrap">
                    {
                        hiringModels.map(({hiringModalIcon,hiringModalTitle,hiringModalDes,hiringModalList,hiringLink},index)=>{
                            return(
                                <li key={`hiring-${index}`}>
                                    <section>
                                        <Image src={hiringModalIcon} width={63} height={63} alt="hiringModalIcon"/>
                                        <h3>{hiringModalTitle}</h3>
                                        <p>{hiringModalDes}</p>
                                        <ul className='list-none'>
                                            {
                                                hiringModalList.map((hiringModalList,index)=>{
                                                    return(
                                                        <li key={`list-${index}`}>
                                                            {hiringModalList}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <div className="center"><Link href={hiringLink}>Hire Now</Link></div>
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
