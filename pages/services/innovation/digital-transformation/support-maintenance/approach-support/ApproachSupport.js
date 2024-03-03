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
                                <p>At the onset of a project, we establish a Service Level Agreement (SLA) outlining the team's responsiveness and availability to meet your requirements.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach2} alt="approach"/>
                            <section>
                                <h3>System Analysis</h3>
                                <p>After review, we figure out the issue present in your software, assess the system thoroughly to pinpoint the underlying cause, & examine the code linked to the non-functional feature.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach1} alt="approach"/>
                            <section>
                                <h3>Implementation</h3>
                                <p>By employing effective debugging techniques, we thoroughly examine the code, delve into detailed logs, & diligently resolve all reported issues outlined in support request.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach2} alt="approach"/>
                            <section>
                                <h3>Testing</h3>
                                <p>In this, we assess the functionality of the software program completely and look for any bugs or gaps so that they can be fixed.</p>
                            </section>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}