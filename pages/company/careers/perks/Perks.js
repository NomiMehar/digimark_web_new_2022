import style from "./perks.module.scss"
import perksList from "./perksList.json"
import Image from "next/image";

export default function Perks () {
    return(
        <div className={`flex direction-column perks_wrapper ${style.perks_wrapper}`}>
            <div className="container">
                <div className="section_title"
                     data-aos="fade-up"
                     data-aos-duration="2000">
                    <h2>Perks & <span>Benefits</span></h2>
                    <p>Why Join the Digi Mark Team? <br /> Benefits and opportunities that make you happy!</p>
                </div>
                <ul className="list-none flex flex-wrap">
                    {
                        perksList.map(({no,perksImage,perkTitle},index)=>{
                            return (
                                <li key={`perks-${index}`} className={no}
                                    data-aos="fade-up"
                                    data-aos-duration="2000">
                                    <section>
                                        <Image src={perksImage} alt={perksImage} width={61} height={61}/>
                                        <h3>{perkTitle}</h3>
                                    </section>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}