import style from "./unityWorkBox.module.scss"
import unityWorkBoxList from "./unityWorkBoxList.json"
import Image from "next/image";

export default function UnityWorkBox(props) {
    return(
        <>
            <div className={` ${style[props.extraClass]} ${style.unity_work_box}`}>
                <div className="container">
                    <div className={`section_title white ${style.section_title}`}>
                        <h2>Why Digi<span>Mark</span> Developers. <span>The Best Unity Game Development Company</span>?</h2>
                    </div>
                    <div className={style.unity_work_text}>
                        <ul className="list-none flex flex-wrap">
                            {
                                unityWorkBoxList.map(({unityImage,unityTitle,unityDescription},index)=>{
                                    return(
                                        <li key={index}>
                                            <section>
                                                <Image width={70} height={70} src={unityImage} alt="unityImage"/>
                                                <h3>{unityTitle}</h3>
                                                <p>{unityDescription}</p>
                                            </section>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}