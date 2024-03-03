import style from "./benefitsSupport.module.scss";
import Image from "next/image";

export default function BenefitsSupport(props) {
    return(
        <div className={` ${style[props.extraClass]} ${style.benefits_support}`}>
            <div className="container">
                <div className={`section_title`}>
                    <h2>Benefits of <span>AR/VR/MR Game <br/></span>Development</h2>
                </div>
                <div className={style.benefits_support_content}>
                    <ul className="list-none flex flex-wrap">
                        <li>
                            <section>
                                <h3>Minimizes Downtime</h3>
                                <p>Once you get the software maintenance services, then it will be beneficial for you as you will not be experiencing any unexpected downtime. However, the measure alleviates downtime and stops any loss.</p>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Increases Productivity</h3>
                                <p>Software support and maintenance services help increase the productivity of the work as developers don’t have to worry about unnecessary bugs. We ensure complete ease and creativity.</p>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Security</h3>
                                <p>Get complete maintenance and make sure that the user's privacy and security are maintained completely. Connect with DigiMark Developers now and adjust the system requirements according to the law.</p>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Minimizes Overtime</h3>
                                <p>Once the software performance gets better, the work quality becomes good automatically. This overall helps in alleviating overtime and makes the employee's work-life balance better.</p>
                            </section>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}