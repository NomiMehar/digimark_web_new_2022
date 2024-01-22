import React from "react";
import style from "./gameIntro.module.scss";
import Image from "next/image";
import Intro from "../../../../../../public/assets/images/services/game-intro.png"
import gameCreator from "../../../../../../public/assets/images/services/game-creator.png"

export default function GameIntro() {
  return (
    <div className={style.game_intro}>
        <div className="container">
            <div className={`section_title ${style.section_title}`}>
                <h2>Industry Leading <span>Game dev</span> & <span>art outsourcing</span></h2>
                <p>DigiMark Developers is a leading game development company, providing premium quality game art and game development services to publishers and game developers since 2017. We also have a quality range of flexible offerings, including cybersecurity, software development, video production, VFX, art and animation, and more. Our team is a tight-knit group of seasoned producers, developers, software engineers, designers, and senior artists that are ready to go the extra mile to deliver incredible results.</p>
            </div>
            <div className={style.game_intro_text}>
                <figure>
                    <Image src={gameCreator} alt="gameCreator"/>
                </figure>
                <section>
                    <ul className="list-none">
                        <li>
                            <section>
                                <h2>World Class
                                    Experience</h2>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h2><span>300+</span>
                                    Projects</h2>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h2><span>200+</span>
                                    Clients</h2>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h2><span>1000+</span>
                                    Employees</h2>
                            </section>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        <Image src={Intro} alt="intro"/>
    </div>
  )
}
