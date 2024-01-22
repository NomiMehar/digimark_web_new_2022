import style from "./QuickFacts.module.scss"
import keyFactList from "./keyFactList.json"

export default function QuickFacts() {
    return(
        <>
            <div className={style.key_facts}>
                <div className="container">
                <div className={`section_title ${style.section_title}`}><h2><span>Quick facts</span> About us</h2></div>
                    <ul className="list-none flex">
                        {
                            keyFactList.map(({description,title,image},index)=>{
                                return(
                                    <li key={`list-${index}`}>
                                        <div className={style.key_list}>
                                            <section>
                                                <h3>{title}</h3>
                                                <p>{description}</p>
                                            </section>
                                        </div>
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