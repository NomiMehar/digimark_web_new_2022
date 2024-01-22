import React from "react";
import style from "./gameProcess.module.scss";
import gameProcessList from "./gameProcessList.json";
import Image from "next/image";

export default function GameProcess(props) {
  return (
    <div className={` ${style[props.extraClass]} ${style.services_process}`}>
        <div className="container">
            <div className={`section_title`}>
                <h2><span>Process</span> of Mobile <br/>
                    Game Development</h2>
                <p>You are just simple four steps away to kick start your dream project with us:</p>
            </div>
            <div className={style.services_process_text}>
                <ul className="list-none flex flex-wrap">
                    {
                        gameProcessList.map(({img,title},index)=>{
                            return(
                                <li key={index}>
                                    <figure><Image width={100} height={100} src={img} alt="image1"/></figure>
                                    <section>
                                        <h3>{title}</h3>
                                        <span>0{index+1}</span>
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
