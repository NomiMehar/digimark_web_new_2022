import style from "./contactLocation.module.scss"
import contactLocationList from "./contactLocationList.json"
import Image from "next/image";
import mapLoc from "../../../public/assets/images/contact/maploc.svg"

export default function ContactLocation() {
    return(
        <>
            <div className={style.contact_location_wrap}>
                <div className="container">
                    <div className={style.contact_location}>
                        <h2>Drop by For a visit:
                            <span>OUR <span>LOCATIONS</span></span></h2>
                        <ul className="list-none flex flex-wrap">
                            {
                                contactLocationList.map(({icon,title,description,linkText},index)=>{
                                    return(
                                        <li key={index}>
                                            <section>
                                                <figure><Image width={80} height={76} src={icon} alt="icon"/></figure>
                                                <h3>{title}</h3>
                                                <p><Image src={mapLoc} alt="loc"/>{description}</p>
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