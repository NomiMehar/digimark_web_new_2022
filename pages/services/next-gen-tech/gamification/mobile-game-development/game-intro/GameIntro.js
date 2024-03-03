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
                <p>Welcome to DigiMark Developers where you experience the world of gaming. Being a leading Mobile Game Development Company we continue to attract millions of games players around the globe. Our experts ensure quality services and this is what sets DIGIMARK DEVELOPERS apart. Our team is highly skilled motivated and committed to delivering the best mobile game solutions, together we make things possible and go above and beyond to turn dreams into reality. Get in touch for the incredible results.</p>
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
