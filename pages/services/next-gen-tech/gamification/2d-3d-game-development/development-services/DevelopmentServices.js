import Image from "next/image";
import ImageOne from "../../../../../../public/assets/images/services/dsImage.webp"
import style from "./developmentServices.module.scss"

export default function DevelopmentServices() {
    return(
        <>
            <div className={style.dev_services_wrap}>
                <div className={`container flex items-center ${style.flex}`}>
                    <section>
                        <h2>Our Next-Gen <span>2D/3D Game</span> Development Services</h2>
                        <ul className="list-none flex direction-column">
                            <li>First Person Shooter</li>
                            <li>Card & Poker</li>
                            <li>Trivia & Puzzle</li>
                            <li>Strategy Games</li>
                            <li>Running Game</li>
                            <li>RPG & Arcade</li>
                        </ul>
                    </section>
                    <Image src={ImageOne} alt="ImageOne"/>
                </div>
            </div>
        </>
    )
}