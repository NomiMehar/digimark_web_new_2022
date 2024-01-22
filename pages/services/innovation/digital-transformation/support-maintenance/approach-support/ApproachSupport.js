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
                    <h2>Our Approach to providing Software <br/><span>Maintenance & Support Services</span></h2>
                </div>
                <div className={style.appraoch_support_content}>
                    <ul className="list-none flex flex-wrap">
                        <li>
                            <Image src={approach1} alt="approach"/>
                            <section>
                                <h3>Service Level Agreement</h3>
                                <p>When starting a new project, our team creates an SLA (Service Level Agreement) that entails our response time and ensures the availability of our team to your needs.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach2} alt="approach"/>
                            <section>
                                <h3>Service Level Agreement</h3>
                                <p>When starting a new project, our team creates an SLA (Service Level Agreement) that entails our response time and ensures the availability of our team to your needs.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach1} alt="approach"/>
                            <section>
                                <h3>Service Level Agreement</h3>
                                <p>When starting a new project, our team creates an SLA (Service Level Agreement) that entails our response time and ensures the availability of our team to your needs.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach2} alt="approach"/>
                            <section>
                                <h3>Service Level Agreement</h3>
                                <p>When starting a new project, our team creates an SLA (Service Level Agreement) that entails our response time and ensures the availability of our team to your needs.</p>
                            </section>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}