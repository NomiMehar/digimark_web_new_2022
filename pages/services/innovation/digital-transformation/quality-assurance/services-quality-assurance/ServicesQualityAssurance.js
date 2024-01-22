import style from "./servicesQualityAssurance.module.scss"
import servicesQualityAssuranceList from "./servicesQualityAssuranceList.json"
import {useState} from "react";

export default function ServicesQualityAssurance() {
    const [tabs, setTabs] = useState(0);
    return(
        <>
            <div className={style.services_quality_assurance}>
                <div className="container">
                    <div className={`section_title ${style.section_title}`}>
                        <h2>Our <span>QA & Testing Services</span></h2>
                    </div>
                    <div className={`flex ${style.services_quality}`}>
                        {
                            servicesQualityAssuranceList.map(({title, description, list},index)=>{
                                if(tabs===index) {
                                    return(
                                        <section className={style.services_quality_detail} key={`index-${index}`}>
                                            <h2>{title}</h2>
                                            <p>{description}</p>
                                            <ul className="list-none">
                                                {
                                                    list.map((list, index)=>{
                                                        return (
                                                            <li key={`ind-${index}`}>{list}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </section>
                                    )
                                }
                            })
                        }
                        <section className={style.services_quality_tabs}>
                            <ul className="list-none">
                                {
                                    servicesQualityAssuranceList.map(({title},index)=>{
                                        return(
                                            <li key={`title-${index}`}>
                                                <button
                                                    onClick={() => setTabs(index)}
                                                    className={`${ tabs === index ? `${style.active}` : ""}`}
                                                >{title}</button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}