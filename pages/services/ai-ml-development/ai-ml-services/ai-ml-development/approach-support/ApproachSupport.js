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
                    <h2>Industry-Specific <span>AI ML</span> Development Solution We Deliver</h2>
                    </div>
                <div className={style.appraoch_support_content}>
                    <ul className="list-none flex flex-wrap">
                        <li>
                            <Image src={approach1} alt="approach"/>
                            <section>
                                <h3>Healthcare Innovation</h3>
                                <p>We develop healthcare AI & ML Development solutions that improve diagnosis, patient care, medical research through the use of predictive analytics, personalized treatment plans and automated processes that enhance productivity and patient outcomes.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach2} alt="approach"/>
                            <section>
                                <h3>Retail Optimisation</h3>
                                <p>By focusing on inventory control, personalization suggestions as well as consumer behaviour analysis, our AI & ML retail solutions assist businesses to improve customer experiences, streamline operations processes while increasing sales volumes.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach1} alt="approach"/>
                            <section>
                                <h3>Financial Services</h3>
                                <p>We provide AI & ML solutions that transform financial services, assisting institutions in protecting assets, maximising investments, and streamlining decision-making processes.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach2} alt="approach"/>
                            <section>
                                <h3>Manufacturing Efficiency</h3>
                                <p>Lower costs, less downtime and better quality products are guaranteed by our manufacturing specific ai&ml solutions that optimize supply chain management with predictive maintenance support and production efficiency.
                                </p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach1} alt="approach"/>
                            <section>
                                <h3>Transportation and Logistics</h3>
                                <p>We build AI & ML solutions for transportation and logistics that focus on demand prediction, real-time tracking, and route optimization. These applications help businesses achieve better operational efficiency, cost savings as well as shortened delivery times.</p>
                            </section>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}