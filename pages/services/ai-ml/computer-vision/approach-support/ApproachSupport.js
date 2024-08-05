import style from "./approachSupport.module.scss";
import Image from "next/image";
import Link from "next/link";
import approach1 from "../../../../../public/assets/images/services/approach1.svg"
import approach2 from "../../../../../public/assets/images/services/approach2.svg"

export default function ApproachSupport() {
    return(
        <div className={style.appraoch_support}>
            <div className="container">
                <div className={`section_title`}>
                    <h2>Our <span>Data Engineering</span> Development Process</h2>
                </div>
                <div className={style.appraoch_support_content}>
                    <ul className="list-none flex flex-wrap">
                        <li>
                            <Image src={approach1} alt="approach"/>
                            <section>
                                <h3>Data Collection</h3>
                                <p>At the outset of a data engineering project, data is collected from diverse sources such as databases, APIs, and external files. This accumulation encompasses both structured and unstructured data, ensuring a comprehensive dataset for analysis.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach2} alt="approach"/>
                            <section>
                                <h3>Data Integration</h3>
                                <p>Once gathered, the collected data is integrated and consolidated to create a unified dataset. This step involves addressing data inconsistencies, standardizing formats, and resolving any discrepancies arising from different sources.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach1} alt="approach"/>
                            <section>
                                <h3>Data Preprocessing</h3>
                                <p>Data preprocessing involves cleansing the data to remove errors, inconsistencies, and inaccuracies. Missing values are handled, outliers are identified, and data is transformed into a format suitable for data analytics services.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach2} alt="approach"/>
                            <section>
                                <h3>Data Storage</h3>
                                <p>Processed data is then stored in a suitable storage solution, which could be a database, a data warehouse, or a cloud-based storage system. Effective storage ensures data accessibility, security, and efficient querying.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach2} alt="approach"/>
                            <section>
                                <h3>ETL (Extract, Transform, Load)</h3>
                                <p>The ETL process is pivotal for preparing the data for analysis. In the “Extract” phase, relevant data is selected; in the “Transform” phase, data is cleaned and transformed; and in the “Load” phase, the processed data is loaded into the storage system.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach2} alt="approach"/>
                            <section>
                                <h3>Data Modeling</h3>
                                <p>To optimize querying and analysis, a well-defined data model is created. This involves structuring the data, defining relationships, and establishing hierarchies, enabling efficient navigation and retrieval of information.</p>
                            </section>
                        </li>
                        <li>
                            <Image src={approach2} alt="approach"/>
                            <section>
                                <h3>Project Submission and Client Deliverables</h3>
                                <p>Once data modeling is complete, clients receive structured and cleansed data, prepared for analysis.</p>
                            </section>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}