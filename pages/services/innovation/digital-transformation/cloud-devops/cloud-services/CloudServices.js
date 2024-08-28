import style from "./cloudServices.module.scss"
import cloudServicesList from "./cloudServicesList.json"
import Image from "next/image";

export default function CloudServices() {
    return(
        <div className={style.services_cloud_wrapper}>
            <div className="container">
                <div className="section_title">
                    <h2>Our <span>Cloud & DevOps Services</span></h2>
                </div>
                <div className={style.services_cloud}>
                    <ul className="list-none flex flex-wrap">
                        {
                            cloudServicesList.map(({description,title,imageIcon},index)=> {
                                return(
                                    <li key={`a-${index}`}>
                                        <section>
                                            <img src={imageIcon} alt="icon"/>
                                            <h3>{title}</h3>
                                            <p>{description}</p>
                                        </section>
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