import style from "./mvpChoose.module.scss"
import unionImage from "../../../../../../public/assets/images/services/union.png"
import Image from "next/image";

export default function MvpChoose() {
    return(
        <div className={style.mvp_choose_wrap}>
            <div className="container">
                <div className="section_title white">
                    <h2>Why <span>Choose Us</span></h2>
                    <p>At our core, we aim to skyrocket your business growth with our top-notch customer-focused approach!</p>
                </div>
                <div className={style.mvp_choose}>
                    <section>
                        <ul className="list-none">
                            <li>
                                <section>
                                    <h3>User-Centric Approach</h3>
                                    <p>Ensuring continuous user testing, & adding feedback guarantees product alignment</p>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <h3>Agile Development</h3>
                                    <p>We follow agile methodology for persistent iterations & adjustments.</p>
                                </section>
                            </li>
                        </ul>
                    </section>
                    <Image src={unionImage} alt="unionImage"/>
                    <section>
                        <ul className="list-none">
                            <li>
                                <section>
                                    <h3>Interdisciplinary Experience</h3>
                                    <p>Having worked on projects ranging through FinTech, LegalTech, IoT, and MedTech allows us to quickly adapt to new projects.</p>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <h3>Business Thinking</h3>
                                    <p>Make us a startup partner and let us help you view your product from a business perspective.</p>
                                </section>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}