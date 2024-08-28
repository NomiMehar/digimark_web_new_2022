import style from "./engagementModels.module.scss"
import EngagementModelsList from "./EngagementModelsList.json"
import Image from "next/image";

export default function EngagementModels () {
    return(
        <div className={`flex flex-wrap direction-column ${style.engagement_models}`}>
            <div className="container">
                <div className={`section_title ${style.section_title}`}>
                    <h2>Flexibility in choosing <span>engagement models</span></h2>
                    <p>Choose the right engagement model that works best for your organization with our flexible options.</p>
                </div>
                <div className={style.engagement_models_text}>
                    <ul className="list-none flex">
                        {
                            EngagementModelsList.map(({modalIcon,modelSubTitle,modelSubDescription,modelDescription,modelTitle}, index)=>{
                                return (
                                    <li key={index}>
                                        <Image width={100} height={100} src={modalIcon} alt="image"/>
                                        <h3>{modelTitle}</h3>
                                        <p>{modelDescription}</p>
                                        <hr/>
                                        <h4>{modelSubTitle}</h4>
                                        <span>{modelSubDescription}</span>
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