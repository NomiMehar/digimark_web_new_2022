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
                        <h2>Achieve tangible results with our software product development company</h2>
                        <span>DigiMark aims to serve businesses with result-oriented, cost-effective, & innovative solutions that open up endless customer-engaging possibilities & drive value to global clients.</span>
                    </div>
                    <div className={style.company_result_text}>
                        <ul className="list-none">
                            <li>
                                <section className="flex items-center">
                                    <span><Image src={icon1} alt="icon"/></span>
                                    <h2>Delivery management in your country</h2>
                                    <p>Our <span>software product development services</span> are globally delivered and locally managed. Your Delivery Manager, based in the USA or Germany with over 7 years of local presence, will serve as a single, 24/7 point of contact to ensure timely and high-quality results.</p>
                                </section>
                            </li>
                            <li>
                                <section className="flex items-center">
                                    <span><Image src={icon2} alt="icon"/></span>
                                    <h2>Security and proven reliability</h2>
                                    <p>We prioritize security when managing sensitive data assets. Our team has delivered exceptional solutions for 6 years, which excel in security and meet strict regulatory requirements & data security standards for industries with heavy compliance obligations such as <span>HIPAA, GDPR, PCI DSS, and others.</span> This is what sets DigiMark apart!</p>
                                </section>
                            </li>
                            <li>
                                <section className="flex items-center">
                                    <span><Image src={icon3} alt="icon"/></span>
                                    <h2>Flexibility and can-do approach</h2>
                                    <p>To meet your unique requirements, we adhere to technology and methodology agnostic principles, enabling us to find the optimal combination of technologies that work best for your business case. Our <span>software product development</span> outsourcing team provides innovation-ready solutions that future-proof your company, save time and money, and facilitate unhindered business growth.</p>
                                </section>
                            </li>
                            <li>
                                <section className="flex items-center">
                                    <span><Image src={icon4} alt="icon"/></span>
                                    <h2>High-quality and mature development process</h2>
                                    <p>Our <span>custom self-managed teams</span> are a balanced blend of expertise that adds value to your business from day one. When you hire our vetted development teams, you gain access to certified professionals with hands-on commercial experience, solid IT skills validated by major tech providers, and an unwavering focus on delivering great performance and results.</p>
                                </section>
                            </li>
                            <li>
                                <section className="flex items-center">
                                    <span><Image src={icon5} alt="icon"/></span>
                                    <h2>Reduced development costs and increased speed-to-market</h2>
                                    <p><span>At DigiMark Developers,</span> we eliminate the hassle of finding suitable candidates quickly, enabling you to secure your position in the market ahead of your competitors. Our experienced team is readily available to take charge of your project, allowing you to concentrate on core business operations without the need to invest in in-house development units.</p>
                                </section>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}