import style from "./softwareProductsProcess.module.scss"
import Image from "next/image";

export default function SoftwareProductsProcess(props) {
    return(
        <>
            <div className={` ${style[props.extraClass]} ${style.software_products_process}`}>
                <div className="container">
                    <div className={`section_title ${style.section_title}`}>
                        <h2>{props.title}</h2>
                    </div>
                    <div className={`flex direction-column ${style.software_products_list}`}>
                        <ul className="list-none">
                            {
                                props.softwareProductsProcessList.map(({iconImage,title,description}, index)=>{
                                    return(
                                        <li key={`plist-${index}`}>
                                            <section>
                                                <span>{index}</span>
                                                <figure><Image width={30} height={20} src={iconImage} alt="img"/></figure>
                                                <h2>{title}</h2>
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
        </>
    )
}