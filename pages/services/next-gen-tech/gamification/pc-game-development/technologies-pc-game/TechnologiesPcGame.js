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
                        <p>Are you ready to transform your gaming world? At DigiMark Developers, we ensure the complete satisfaction of the customers. Our skilled team doesn’t just offer solutions, but they also provide advanced gaming that sets you apart from competitors. Collaborate with us now as we are all set to lead the way and make your experience extraordinary.</p>
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