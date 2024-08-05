import style from "./approachSupport.module.scss";
import Image from "next/image";
import approach1 from "../../../../../public/assets/images/services/approach1.svg"
import approach2 from "../../../../../public/assets/images/services/approach2.svg"

export default function ApproachSupport() {
    return(
        <div className={style.appraoch_support}>
            <div className="container">
                <div className={`section_title`}>
                    <h2>We Are Able To Provide A Whole, <span>End-To-End Solution</span> For Data Engineering</h2>
                </div>
                <div className={style.appraoch_support_content}>
                    <ul className="list-none flex flex-wrap">
                        <li>
                            <Image src={approach1} alt="approach"/>
                            <section>
                                <h3>Tailored Data Architecture Design</h3>
                                <p>We develop personalized data architectures that match your business objectives, guaranteeing effective data organization, analysis, and access, while facilitating smooth integration with current systems and potential future expansion.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach2} alt="approach"/>
                            <section>
                                <h3>Automated Data Workflows</h3>
                                <p>Our offerings involve the automation of data workflows, decreasing manual involvement, decreasing errors, and facilitating quicker, more trustworthy data processing and analytics throughout your firm.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach1} alt="approach"/>
                            <section>
                                <h3>Expertise in Integrating with the Cloud</h3>
                                <p>Our services guarantee smooth integration of data engineering solutions with top cloud platforms, enabling cost-efficient, flexible, and secure data management to foster your business's advancement and creativity.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach2} alt="approach"/>
                            <section>
                                <h3>Data Security and Compliance</h3>
                                <p>To safeguard your private information against illegal access and breaches, our comprehensive solutions include robust encryption, access restrictions, and compliance with industry standards.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach2} alt="approach"/>
                            <section>
                                <h3>Advanced Integration of Machine Learning</h3>
                                <p>Machine learning based models can be integrated directly into your data pipelines by us to keep you ahead of the competition in order to leverage AI-driven insights and predictive analytics to create creative data-driven strategies.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach2} alt="approach"/>
                            <section>
                                <h3>Scalable Infrastructure Management</h3>
                                <p>We design and manage data infrastructures that expand to handle increasing volumes and levels of complexity while preserving dependability and performance.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach2} alt="approach"/>
                            <section>
                                <h3>Continuous Monitoring and Optimization</h3>
                                <p>Continuous monitoring and optimization are part of our services, which guarantee peak performance, prompt issue resolution, and flexibility to changing business demands and technological advancements in your data engineering processes.</p>
                            </section>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}