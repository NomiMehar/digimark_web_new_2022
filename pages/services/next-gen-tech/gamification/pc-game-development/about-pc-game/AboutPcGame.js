import style from "./aboutPcGame.module.scss"
import Image from "next/image";
import aboutImage from "../../../../../../public/assets/images/services/pc-image.webp"
import grayShape from "../../../../../../public/assets/images/services/gray-shape.svg"

export default function AboutPcGame() {
    return(
        <>
            <div className={style.about_pc_game}>
                <div className="container flex">
                    <section>
                        <h2>We develop excellent <span>games for PC</span></h2>
                        <p>Being a PC Game Development Company, we are committed to providing amazing PC games and unforgettable gaming experiences. We ensure complete transparency, communication, & responsiveness. So, what are you waiting for? Contact now</p>
                        <ul className="list-none list-style-arrow-two">
                            <li> Millions of users are getting phenomenal gaming experiences and the number of users is increasing every year with DigiMark Developer’s services.</li>
                            <li> Gaming has become an integral part of youngsters as they spend most of their time on mobile phones and laptops. However, At DigiMark Developers you get to experience a new world of gaming that keeps you engaged with every step of it.</li>
                        </ul>
                    </section>
                    <Image src={aboutImage} alt="img"/>
                </div>
            </div>
            <div className={style.about_pc_count}>
                <ul className="list-none flex justify-center items-center">
                    <li>
                        <h2>400+</h2>
                        <h3>Game Artists and <br/>Developers</h3>
                    </li>
                    <li>
                        <h2>10</h2>
                        <h3>Years Of Experience</h3>
                    </li>
                    <li>
                        <h2>10</h2>
                        <h3>Years Average <br/>Partnership</h3>
                    </li>
                    <li>
                        <h2>90%</h2>
                        <h3>Repeat <br/>Business</h3>
                    </li>
                </ul>
            </div>
        </>
    )
}