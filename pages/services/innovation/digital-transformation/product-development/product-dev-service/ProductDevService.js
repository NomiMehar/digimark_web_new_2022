import style from "./productDevService.module.scss"
import productDevServiceList from "./productDevServiceList.json"
import Image from "next/image";
import serviceImg from "../../../../../../public/assets/images/services/dev_serviceimg.webp";

export default function ProductDevService() {
    return(
        <>
            <div className={style.product_dev_service}>
                <Image src={serviceImg} alt="serviceImg"/>
                <div className="container">
                    <div className={`section_title ${style.section_title}`}>
                        <h2>Our <span>Product Development Services</span></h2>
                    </div>
                    <div className={style.product_dev_servicelist}>
                        <ul className="list-none flex flex-wrap">
                            {
                                productDevServiceList.map(({icon,title,description},index)=>{
                                    return(
                                        <li key={`list-${index}`}>
                                            <div className={`flex items-start ${style.product_dev_text}`}>
                                                <Image width={100} height={100} src={icon} alt="icon"/>
                                                <section>
                                                    <h2>{title}</h2>
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
            </div>
        </>
    )
}