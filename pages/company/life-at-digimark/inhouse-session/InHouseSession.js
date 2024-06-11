import style from "./inHouseSessions.module.scss"
import inhouseList from "./inhouseList.json"
import Image from "next/image";
import {useState} from "react";

export default function InHouseSession () {
    const [tabs, setTabs] = useState(0);
    return(
        <div className={style.inhouse_sessions}>
            <div className={`container flex items-center ${style.inhouse_sessions_flex}`}>
                <div className={style.inhouse_content}
                     data-aos="fade-right"
                     data-aos-duration="1000">
                    <h2>DigiMark Developers Weekly <span>Inhouse Sessions</span></h2>
                    <ul className="list-none flex flex-wrap">
                        {
                            inhouseList.map(({sectionIcon,sectionDescription,sectionTitle},index)=>{
                                return (
                                    <li key={`image-${index}`}>
                                        <section onClick={() => setTabs(index)} className={`${ tabs === index ? `${style.active}` : ""}`}>
                                            <figure>
                                                <Image src={sectionIcon} alt={sectionIcon} width={24} height={24} />
                                            </figure>
                                            <h3>{sectionTitle}</h3>
                                            <p>{sectionDescription}</p>
                                        </section>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {
                    inhouseList.map(({sectionImage},index)=>{
                        if(tabs===index) {
                            return(
                                <figure key={`image-${index}`} className={style.inhouse_image}
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                >
                                    <Image src={sectionImage} width={640} height={664} alt={sectionImage}/>
                                </figure>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}