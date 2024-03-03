import style from "./aboutUnityGame.module.scss"
import Image from "next/image";

export default function AboutUnityGame() {
    return(
        <>
            <div className={style.about_unity_game}>
                <div className="container">
                    <div className={`section_title ${style.section_title}`}>
                        <h2>Unity Game Development <br/><span>Advantages</span></h2>
                        <p>If you are aspiring to have an end-to-end game design with the best features support and maintenance then you have come to the right place. Reasons to get your Unity game development services from us.</p>
                    </div>
                    <section>
                        <ul className="list-none list-style-arrow-two">
                            <li>Fast Unity Game Development Speed</li>
                            <li>Enjoy Free and Paid versions</li>
                            <li>Helpful Community</li>
                            <li>High-Quality Visuals</li>
                            <li>Augmented and Virtual Reality</li>
                            <li>Provides multiple development tools</li>
                            <li>Implementing game functionality</li>
                            <li>Complete the tutorial and guide</li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}