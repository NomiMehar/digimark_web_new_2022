import style from "./QuickFacts.module.scss"
import keyFactList from "./keyFactList.json"
import Image from "next/image";

export default function QuickFacts() {
    return(
        <>
            <div className={style.key_facts}>
                <div className="container">
                <div className={`section_title ${style.section_title}`}><h2><span>Our Tech Stack</span></h2>
                <p>As a fast-growing metaverse development company, we leverage the latest technologies to create metaverse apps that benefit your business.</p>
                </div>
                    <ul className="list-none flex">
                        {
                            keyFactList.map(({description,img},index)=>{
                                return(
                                    <li key={`list-${index}`}>
                                        <div className={style.key_list}>
                                            <section>
                                               <Image width={100} height={100} src={img} alt="techStack" />
                                                <h2>{description}</h2>
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