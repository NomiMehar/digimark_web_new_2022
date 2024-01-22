import style from "./advantagesQualityAssurance.module.scss"
import advantagesQualityAssuranceList from "./advantagesQualityAssuranceList.json"

export default function AdvantagesQualityAssurance() {
    return(
        <>
            <div className={style.advantages_quality_assurance}>
                <div className="container">
                    <div className={`section_title ${style.section_title}`}>
                        <h2><span>Advantages</span> of Quality <br/>
                            Assurance Services</h2>
                    </div>
                    <div className={style.advantages_quality}>
                        <ul className="list-none flex flex-wrap">
                            {
                                advantagesQualityAssuranceList.map(({title, list}, index)=>{
                                    return(
                                        <li key={`lista-${index}`}>
                                            <div className={style.advantages_quality_text}>
                                                <h2>{title}</h2>
                                                <section>
                                                    <ul className="list-none list-style-dots">
                                                        {
                                                            list.map((list, index)=>{
                                                                return(
                                                                    <li key={`listb-${index}`}>{list}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </section>
                                            </div>
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