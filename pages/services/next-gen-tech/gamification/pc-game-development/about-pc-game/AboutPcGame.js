import style from "./aboutPcGame.module.scss"
import Image from "next/image";
import aboutImage from "../../../../../../public/assets/images/services/pc-image.png"
import grayShape from "../../../../../../public/assets/images/services/gray-shape.svg"

export default function AboutPcGame() {
    return(
        <>
            <div className={style.about_pc_game}>
                <div className="container flex">
                    <section>
                        <h2>We develop excellent <span>games for PC</span></h2>
                        <p>Brief Introduction to Computer Game Design and Development for PCs.Computer game design and development art is a long and complicated process. And it has a lot of various benefits when selling your game and making money.</p>
                        <ul className="list-none list-style-arrow-two">
                            <li>Billions of people all around the world play games on their laptops and workstation. And each year this number grows faster and faster.</li>
                            <li>That is impossible to ignore the market which has such a huge potential in the modern world.</li>
                            <li>People spend more and more time online, more time playing games, more money on digital goods, for the youngest generation video games is an inalienable part of their lives.</li>
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