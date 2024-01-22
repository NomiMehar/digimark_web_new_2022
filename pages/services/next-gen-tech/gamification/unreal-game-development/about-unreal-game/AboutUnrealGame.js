import style from "./aboutUnrealGame.module.scss"
import Image from "next/image";
import aboutImage from "../../../../../../public/assets/images/services/unreal-about-img.png"

export default function AboutUnrealGame() {
    return(
        <>
            <div className={style.about_unreal_game}>
                <div className="section_title">
                    <h2>Benefits of Our <span>Unreal Game</span> <br/>
                        Development Services</h2>
                </div>
                <div className="container flex items-center">
                    <Image src={aboutImage} alt="img"/>
                    <section>
                        <h2>Check core <span>Benefits</span> you will gain by choosing Digi<span>Mark</span> Developers:</h2>
                        <ul className="list-none list-style-arrow-two">
                            <li>Deep knowledge of Unreal game development.</li>
                            <li><span>On-time delivery</span> — the highly-skilled crew will deliver the output as soon as possible.</li>
                            <li><span>Transparent communication</span> — we keep clients updated on the ongoing development process. We do appreciate mutual trust.</li>
                            <li><span>Top-level technologies</span> — in DigiMark Developers, we keep up with all the latest industry trends and tech solutions.</li>
                            <li><span>Cost-efficiency</span> — forget about continuous budget expansion and receive the maximal quality for your request</li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}