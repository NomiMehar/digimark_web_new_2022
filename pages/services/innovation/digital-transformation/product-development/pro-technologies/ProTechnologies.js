import style from "./proTechnologies.module.scss"
import proTechnologiesList from "./proTechnologiesList.json"
import Image from "next/image";

export default function ProTechnologies() {
    return (
        <>
            <div className={style.pro_technologies_wrapper}>
                <div className="container flex">
                    <div className={style.pro_technologies_title}>
                        <span>OUR TECHNOLOGIES</span>
                        <h2>Technologies We Use for <span> Product Development</span></h2>
                    </div>
                    <div className={style.pro_technologies_logo}>
                        <ul className="list-none flex flex-wrap">
                            {
                                proTechnologiesList.map(({image},index)=>{
                                    return(
                                        <li key={index}><Image width={185} height={62} src={image} alt="image"/></li>
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