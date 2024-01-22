import style from "./contactCards.module.scss"
import contactCardList from "./contactCardList.json"
import Image from "next/image";
import Link from "next/link";
import arrowIcon from "../../../public/assets/images/services/green-arrow.svg"

export default function ContactCards() {
    return(
        <>
            <div className={style.contact_cards_wrap}>
                <div className="container">
                    <div className={style.contact_cards}>
                        <ul className="list-none flex flex-wrap">
                            {
                                contactCardList.map(({icon,title,description,linkText},index)=>{
                                    return(
                                        <li key={index}>
                                            <section>
                                                <figure><Image width={40} height={49} src={icon} alt="icon"/></figure>
                                                <h2>{title}</h2>
                                                <p>{description}</p>
                                                <Link href="/">{linkText} <Image src={arrowIcon} alt="icon"/></Link>
                                            </section>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="center">
                            <span>You can also email us at <Link href="">info@digimarkdevelopers.com</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}