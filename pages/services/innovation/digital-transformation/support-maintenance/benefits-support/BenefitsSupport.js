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
                                <p>Discover end - to - end application maintenance and support service models designed to cater to your business concerns with 24/7/365 availability and highly secure access procedures.</p>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Secure & Stable App</h3>
                                <p>Discover end - to - end application maintenance and support service models designed to cater to your business concerns with 24/7/365 availability and highly secure access procedures.</p>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Secure & Stable App</h3>
                                <p>Discover end - to - end application maintenance and support service models designed to cater to your business concerns with 24/7/365 availability and highly secure access procedures.</p>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Secure & Stable App</h3>
                                <p>Discover end - to - end application maintenance and support service models designed to cater to your business concerns with 24/7/365 availability and highly secure access procedures.</p>
                            </section>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}