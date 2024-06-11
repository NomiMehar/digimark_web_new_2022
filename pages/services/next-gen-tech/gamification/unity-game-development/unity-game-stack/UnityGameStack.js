import style from "./unityGameStack.module.scss"
import unityGameStackList from "./unityGameStackList.json"
import arrowIcon from "../../../../../../public/assets/images/services/arrows.svg"
import Image from "next/image";
import {useState} from "react";

export default function UnityGameStack() {
    const [tabs, setTabs] = useState(0);
    return(
        <>
            <div className={style.unity_game_stack}>
                <div className="container">
                    <div className={`section_title`}>
                        <h2>Our Unity <span>Game Technology Stack</span></h2>
                        <p>DigiMark Developers being the best Unity Game Development Company always strive to provide the best and highest-quality tech stack that helps you enjoy the gaming experience utterly.</p>
                    </div>
                </div>
                <div className={style.unity_game_tabs_wrap}>
                    <div className="container">
                        <ul className={`list-none flex ${style.unity_game_list}`}>
                            {
                                unityGameStackList.map(({tabTitle},index)=>{
                                    return (
                                        <li key={index}>
                                            <button
                                                onClick={() => setTabs(index)}
                                                className={`${ tabs === index ? `${style.active}` : ""}`}
                                            >{tabTitle} <Image src={arrowIcon} alt="arrowIcon"/></button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className={style.unity_game_content}>
                            <ul className="list-none flex flex-wrap">
                                {
                                    unityGameStackList.map(({tabList},index)=>{
                                        if(tabs===index) {
                                            return (
                                                <>
                                                    {
                                                        tabList.map(({boxIcon,boxTitle,boxContent},index)=>{
                                                            return (
                                                                <li key={`content-${index}`}>
                                                                    <section>
                                                                        <figure className="flex items-center"><Image width={64} height={64} src={boxIcon} alt="boxIcon"/> {boxTitle}</figure>
                                                                        <p>{boxContent}</p>
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
        </>
    )
}