import style from "./approachSupport.module.scss";
import Image from "next/image";
import Link from "next/link";
import approach1 from "../../../../../../public/assets/images/services/approach1.svg"
import approach2 from "../../../../../../public/assets/images/services/approach2.svg"

export default function ApproachSupport() {
    return(
        <div className={style.appraoch_support}>
            <div className="container">
                <div className={`section_title`}>
                    <h2>Our AI <span>Development Process</span></h2>
                </div>
                <div className={style.appraoch_support_content}>
                    <ul className="list-none flex flex-wrap">
                        <li>
                            <Image src={approach1} alt="approach"/>
                            <section>
                                <h3>Investigating Ideas</h3>
                                <p>To begin, please share your project idea with us through our secure contact form. This will help us understand your vision and unique requirements.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach2} alt="approach"/>
                            <section>
                                <h3>Discovery Call</h3>
                                <p>Thank you for your inquiry. We will schedule a discovery call with our team of AI and machine learning operations specialists as soon as possible. During this call, we will discuss your project’s objectives in detail and explore potential solutions.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach1} alt="approach"/>
                            <section>
                                <h3>Tailored Proposals</h3>
                                <p>After the discovery call, our team will develop a thorough project proposal that is specifically customized to your requirements. This proposal will contain a comprehensive breakdown of the project’s scope, financial forecasts, and a practical timeline for completion.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach2} alt="approach"/>
                            <section>
                                <h3>Strategy and Planning</h3>
                                <p>Once the project proposal is approved, we will proceed to the strategy and planning phase. Our team of developers, designers, and AI and machine learning specialists will collaborate closely to establish a well-defined plan for your project.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach1} alt="approach"/>
                            <section>
                                <h3>Start of the Project</h3>
                                <p>Once the plan is set, it’s time to get to work. Our AI and machine learning specialists team will officially kick off the project, eagerly working to turn your vision into an impressive reality.</p>
                            </section>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}