import style from "./technologyStack.module.scss";
import React, { useEffect, useState } from "react";
import technologyStackList from "./technologyStack.json";
import AOS from "aos";
import Image from "next/image";

export default function TechnologyStack(props) {
    const [tabs, setTabs] = useState(0);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={`flex flex-wrap direction-column ${style.technology_stack_wrapper}`}>
            <div className="container">
                <div className="main_section_title white_title" data-aos="fade-up" data-aos-duration="2000">
                    <h2>Main <span>Development Technologies</span> We Work With</h2>
                </div>
                <div className={style.ar_tech_stack_wrapper}>
                    <div
                        className={style.ar_tech_stack}
                        data-aos="flip-up"
                        data-aos-duration="1000"
                    >
                        <ul className="list-none flex">
                            {technologyStackList.map(({ tab_button }, index) => (
                                <li key={`custom-${index}`} data-aos="fade-down" data-aos-duration="1000">
                                    <button
                                        onClick={() => setTabs(index)}
                                        className={tabs === index ? `${style.active}` : ""}
                                    >
                                        {tab_button}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={style.ar_tech_list}>
                        <ul className="list-none flex flex-wrap">
                            {technologyStackList[tabs].listItems.map(({ name, icon }, index) => (
                                <li key={index}>
                                    <section>
                                        <Image width={100} height={100} src={icon} alt={name} />
                                        <p>{name}</p>
                                    </section>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
