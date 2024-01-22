import React, {useEffect} from "react";
import style from "./blockchainBenefits.module.scss"
import benefitWrap from "../../../../../../public/assets/images/services/banenfit-mobile.png"
import benefitIcon from "../../../../../../public/assets/images/services/chainIcon1.svg"
import Image from "next/image";
import AOS from 'aos';

export default function BlockchainBenefits() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`defi_improve ${style.blockchain_benefits_wrapper}`}>
            <div className="container">
                <div className={`section_title`} data-aos="fade-up"
                                        data-aos-duration="2000">
                    <h2><span>Benefits</span> of blockchain development</h2>
                    <p>Support your aim for your product and business with decentralized, transparent technology and professionals who can help you meet your targets.</p>
                </div>
                <div className={`flex items-center ${style.blockchain_benefits_content}`}>
                    <ul className="list-none" data-aos="fade-left"
                                        data-aos-duration="2000">
                        <li>
                            <section>
                                <h5>Transparency</h5>
                                <p>Test & buy Model</p>
                            </section>
                            <Image src={benefitIcon} alt="benefitIcon"/>
                        </li>
                        <li>
                            <section>
                                <h5>Security</h5>
                                <p>Developers</p>
                            </section>
                            <Image src={benefitIcon} alt="benefitIcon"/>
                        </li>
                        <li>
                            <section>
                                <h5>Traceability</h5>
                                <p>Tracking & Support</p>
                            </section>
                            <Image src={benefitIcon} alt="benefitIcon"/>
                        </li>
                    </ul>
                    <Image src={benefitWrap} alt={benefitWrap} data-aos="fade-down"
                                        data-aos-duration="2000"/>
                    <ul className={`list-none ${style.revers}`} data-aos="fade-right"
                                        data-aos-duration="2000">
                        <li>
                            <section>
                                <h5>Transparency</h5>
                                <p>Test & buy Model</p>
                            </section>
                            <Image src={benefitIcon} alt="benefitIcon"/>
                        </li>
                        <li>
                            <section>
                                <h5>Security</h5>
                                <p>Developers</p>
                            </section>
                            <Image src={benefitIcon} alt="benefitIcon"/>
                        </li>
                        <li>
                            <section>
                                <h5>Traceability</h5>
                                <p>Tracking & Support</p>
                            </section>
                            <Image src={benefitIcon} alt="benefitIcon"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}