import style from "./contactBanner.module.scss"
import Image from "next/image";
import backArrow from "../../../public/assets/images/services/back.svg";

export default function ContactBanner(props) {
    return(
        <>
            <div className={style.contact_banner}>
                <div className="container flex items-center justify-center">
                    <section>
                        <ul className={`list-none flex items-center ${style.breadcrumbs}`}>
                            <li><Image src={backArrow} alt={backArrow} width={23} height={21}/><span>{props.breadText}</span></li>
                            <li><small>{props.pageTitle}</small></li>
                        </ul>
                        {props.mainTitle}
                    </section>
                </div>
            </div>
        </>
    )
}