import style from "./mvpChoose.module.scss"
import unionImage from "../../../../../../public/assets/images/services/union.png"
import Image from "next/image";

export default function MvpChoose() {
    return(
        <div className={style.mvp_choose_wrap}>
            <div className="container">
                <div className="section_title white">
                    <h2>Why <span>Choose Us</span></h2>
                    <p>By using a high-value, customer-centric approach, we share your vision of expanding your business.</p>
                </div>
                <div className={style.mvp_choose}>
                    <section>
                        <ul className="list-none">
                            <li>
                                <section>
                                    <h3>Transparency</h3>
                                    <p>We offer transparency for our services from start to finish.</p>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <h3>Technology</h3>
                                    <p>Our developers have vast and valid experience across various industries and in-depth expertise with all technologies.</p>
                                </section>
                            </li>
                        </ul>
                    </section>
                    <Image src={unionImage} alt="unionImage"/>
                    <section>
                        <ul className="list-none">
                            <li>
                                <section>
                                    <h3>Pricing</h3>
                                    <p>We offer best-in-class development services at a reasonable cost.</p>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <h3>Our Process</h3>
                                    <p>We utilize a streamlined development process focusing on your business goals to deliver an amazing end-user experience.</p>
                                </section>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}