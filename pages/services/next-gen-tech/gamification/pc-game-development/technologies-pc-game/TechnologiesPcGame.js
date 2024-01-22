import style from "./technologiesPcGame.module.scss"
import technologiesPcGameList from "./technologiesPcGameList.json"
import React, {useState} from "react";

export default function TechnologiesPcGame(props) {
    const [tabs, setTabs] = useState(0);

    return(
        <>
            <div className={`${style[props.extraClass]} ${style.tech_pc_game}`}>
                <div className="container">
                    <div className={`section_title flex items-start justify-between ${style.section_title}`}>
                        <h2><span>Technologies</span> We are <br/>Specialized in</h2>
                        <p>We know that it can be challenging to please adepts of different game genres: however, ‘challenging’ doesn’t mean ‘impossible’ to us. Pingle Studio’s team has been specializing in game development for desktop for years and can offer modern creative solutions along with cutting-edge technologies designed to make your future game truly outstanding.</p>
                    </div>
                    <div className={`flex ${style.tech_pc_tabs_wrap}`}>
                        <div className={style.tech_pc_tabs}>
                            <ul className="flex direction-column list-none">
                                {
                                    technologiesPcGameList.map(({tab_button},index)=>{
                                        return(
                                            <li key={`customer-${index}`}>
                                                <button
                                                    onClick={() => setTabs(index)}
                                                    className={`${ tabs === index ? `${style.active}` : ""}`}
                                                >
                                                    {tab_button}
                                                </button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className={style.tech_pc_tabs_content}>
                            {
                                technologiesPcGameList.map(({description}, index) => {
                                    if(tabs===index) {
                                        return (
                                            <section key={index}>
                                                <p>{description}</p>
                                            </section>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}