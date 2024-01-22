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
                    <p>DigiMark cares about the financial and emotional well-being of its employees. While working with DigiMark, you get the following perks and benefits:</p>
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
                                        <h3>Best Culture</h3>
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