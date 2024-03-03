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
                        <p>With our Cloud & DevOps Solutions, establish and maintain agile development operations by choosing and executing the right strategy, building software delivery pipelines, deploying and monitoring services, managing incidents, and learning from them to balance service reliability and delivery speed.</p>
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