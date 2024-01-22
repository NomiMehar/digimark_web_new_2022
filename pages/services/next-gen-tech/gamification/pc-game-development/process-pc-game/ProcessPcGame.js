import style from "./processPcGame.module.scss"
import processPcGameList from "./processPcGameList.json"
import React from "react";

export default function ProcessPcGame(props) {
    return(
        <>
            <div className={`${style[props.extraClass]} ${style.process_pc_game}`}>
                <div className="container">
                    <div className={`section_title ${style.section_title}`}>
                        <h2><span>Process</span> of PC <br/>
                            Game Development</h2>
                        <p>You are just simple four steps away to kick start your dream project with us:</p>
                    </div>
                    <ul className="list-none flex flex-wrap">
                        {
                            processPcGameList.map(({title, description},index)=>{
                                return(
                                    <li key={index}>
                                        <section>
                                            <h2>{title} <span></span></h2>
                                            <p>{description}</p>
                                        </section>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}