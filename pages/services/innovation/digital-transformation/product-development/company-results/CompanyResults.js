import style from "./companyResults.module.scss"
import Image from "next/image";
import icon1 from "../../../../../../public/assets/images/services/csvg1.png"
import icon2 from "../../../../../../public/assets/images/services/csvg2.png"
import icon3 from "../../../../../../public/assets/images/services/csvg3.png"
import icon4 from "../../../../../../public/assets/images/services/csvg4.png"
import icon5 from "../../../../../../public/assets/images/services/csvg5.png"

export default function CompanyResults() {
    return (
        <>
            <div className={style.company_result_wrapper}>
                <div className="container">
                    <div className={`flex items-start justify-between ${style.company_result_heading}`}>
                        <h2>Get tangible results with our software product development company</h2>
                        <span>A software product development firm with over two decades of experience, we turn your business vision into innovative, user-centered solutions, and deliver them seamlessly to the market.</span>
                    </div>
                    <div className={style.company_result_text}>
                        <ul className="list-none">
                            <li>
                                <section className="flex items-center">
                                    <span><Image src={icon1} alt="icon"/></span>
                                    <h2>Delivery management in your country</h2>
                                    <p>Our <span>software product development services</span> are delivered globally and managed locally. Your Delivery Manager will be based in the USA or Germany, where we have had a local presence for 20+ years, as a single, 24/7 point of contact to ensure high-quality, timely results.</p>
                                </section>
                            </li>
                            <li>
                                <section className="flex items-center">
                                    <span><Image src={icon2} alt="icon"/></span>
                                    <h2>Security and proven reliability</h2>
                                    <p>We prioritize a security-first approach when handling your sensitive data assets. For over 6 years, our team has been delivering high-grade solutions that excel at security and meet strict regulatory requirements and data security standards for compliance-heavy industries, including <span>HIPAA, GDPR, PCI DSS,</span> and other regulations.</p>
                                </section>
                            </li>
                            <li>
                                <section className="flex items-center">
                                    <span><Image src={icon3} alt="icon"/></span>
                                    <h2>Flexibility and can-do approach</h2>
                                    <p>We follow the technology- and methodology-agnostic principles to stay adaptable to your unique requirements and find the winning combination of technologies that work best for your business case. Our <span>software product development</span> outsourcing team brings future-proof, innovation-ready solutions into your company that do not limit your business growth and save you time and money.</p>
                                </section>
                            </li>
                            <li>
                                <section className="flex items-center">
                                    <span><Image src={icon4} alt="icon"/></span>
                                    <h2>High-quality and mature development process</h2>
                                    <p>Our custom <span>software product development company</span> provides balanced self-managed teams that start adding value to your business from day one. By hiring vetted development teams from <span>DigiMark Developers</span> you get certified professionals with hands-on commercial experience, solid IT skills validated by major tech providers, and a focus on great performance and results.</p>
                                </section>
                            </li>
                            <li>
                                <section className="flex items-center">
                                    <span><Image src={icon5} alt="icon"/></span>
                                    <h2>Reduced development costs and increased speed-to-market</h2>
                                    <p><span>DigiMark Developers</span> solves your problem of finding the right candidates quick enough to help you secure your place in the market ahead of the competition. Our experienced and motivated product development teams are ready to take over your project, while you can focus on your core business operations without investing in in-house development units.</p>
                                </section>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}