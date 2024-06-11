import style from "./benefitsSupport.module.scss";
import Image from "next/image";

export default function BenefitsSupport(props) {
    return(
        <div className={` ${style[props.extraClass]} ${style.benefits_support}`}>
            <div className="container">
                <div className={`section_title`}>
                    <h2>Benefits of Software <span>Support <br/>& Maintenance Services</span></h2>
                </div>
                <div className={style.benefits_support_content}>
                    <ul className="list-none flex flex-wrap">
                        <li>
                            <section>
                                <h3>Secure & Stable App</h3>
                                <p>Explore comprehensive application support and maintenance solutions tailored to address your business requirements, featuring round-the-clock availability and robust access protocols for enhanced security measures.</p>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Minimal Downtime</h3>
                                <p>Discover proven industry approaches for maintaining and improving your applications. Minimize downtime and ensure efficient operations with reliable support and maintenance services.</p>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Reduced Cost of Care</h3>
                                <p>Unlock assessment of your software's performance & optimize applications to align with unique business needs. Leverage cutting-edge tools and industry expertise for enhanced functionality and success.</p>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Feature Customization</h3>
                                <p>Deploy experienced professionals to carry out assessments of your organization while maintaining alignment with a unique market focus. Benefit from customized upgrades & enhancements for precise targeting and improved performance.</p>
                            </section>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}