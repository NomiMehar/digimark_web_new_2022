import style from "./womenInDigimark.module.scss"
import WomenDigimarkList from "./WomenDigimarkList.json"

export default function WomenInDigimark() {
    return(
        <div className={`flex flex-wrap direction-column ${style.women_in_digimark}`}>
            <div className="container">
                <div className="section_title">
                    <h2>Women’s in <span>DigiMark Developers</span></h2>
                </div>
                <div className={style.women_digimark_list}>
                    <ul className="list-none flex flex-wrap">
                        {
                            WomenDigimarkList.map(({womenImage,womenTitle,womenDescription}, index)=>{
                                return(
                                    <li key={index}>
                                        <figure>
                                            <img src={womenImage} alt={womenImage}/>
                                            <figcaption>
                                                <h3>{womenTitle}</h3>
                                                <p>{womenDescription}</p>
                                            </figcaption>
                                        </figure>
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