import style from "./aboutUnrealGame.module.scss"
import Image from "next/image";
import aboutImage from "../../../../../../public/assets/images/services/unreal-about-img.webp"

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
                        <h2>Following are some of the advantages that come with our <span> unreal game development</span> services:</h2>
                        <ul className="list-none list-style-arrow-two">
                            <li><span>Visual Quality</span> — Our team ensures to provide top-notch quality graphics to proceed with the project successfully.</li>
                            <li><span>Quick Delivery</span> — We provide quick delivery along with the best Video Game Maker services with complete transparency at every step. We keep clients in the loop about the development process.</li>
                            <li><span>Cross-Platform Development</span> — It works on PCs, consoles, mobile phone devices, AR/VR, and much more. This does not just work but also helps in alleviating the development cost.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}