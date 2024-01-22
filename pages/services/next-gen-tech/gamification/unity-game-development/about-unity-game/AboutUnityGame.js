import style from "./aboutUnityGame.module.scss"
import Image from "next/image";

export default function AboutUnityGame() {
    return(
        <>
            <div className={style.about_unity_game}>
                <div className="container">
                    <div className={`section_title ${style.section_title}`}>
                        <h2>Unity Game Development <br/><span>Advantages</span></h2>
                        <p>We are a One-Stop-Shop Unity 3D Game Development Company that will transform your dream game into reality. With the help of innovative and relevant solutions, we deliver the client’s wishes and increase player engagement and game downloads.</p>
                    </div>
                    <section>
                        <ul className="list-none list-style-arrow-two">
                            <li>Deep knowledge of Unreal game development.</li>
                            <li>Rich Experience in Gaming Industry</li>
                            <li>Faster Delivery</li>
                            <li>Robust Technologies and advanced techniques</li>
                            <li>Communication & Transparency</li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}