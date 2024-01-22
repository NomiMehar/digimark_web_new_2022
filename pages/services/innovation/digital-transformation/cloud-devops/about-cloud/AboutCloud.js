import style from "./aboutCloud.module.scss"
import Image from "next/image";
import aboutCloud from "../../../../../../public/assets/images/services/cloud-about-img.png"

export default function AboutCloud() {
    return(
        <div className={style.about_cloud_wrapper}>
            <div className="container">
                <div className={`flex items-center ${style.about_cloud}`}>
                    <Image src={aboutCloud} alt="aboutCloud"/>
                    <section>
                        <h2>Cloud & DevOps</h2>
                        <p>Our Cloud and DevOps solution help establish and run efficient development operations that can balance service reliability and delivery speed. We have experience and process to help you choose and execute the right Cloud strategy and build software delivery pipelines, deploy and monitor services, and manage and learn from incidents.</p>
                        <ul className="list-none">
                            <li>Maintenance and Support</li>
                            <li>Cloud Migration</li>
                            <li>DevOps</li>
                            <li>Test Automation</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}