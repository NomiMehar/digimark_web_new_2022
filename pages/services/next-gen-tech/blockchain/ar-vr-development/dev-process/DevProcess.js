import style from "./devProcess.module.scss";
import React, {useEffect} from "react";
import AOS from 'aos';

export default function DevProcess(props) {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`flex flex-wrap direction-column ${style.dev_process_wrapper}`}>
            <div className="container relative">
                <div className={`section_title ${style.process_title}`} data-aos="fade-right" data-aos-duration="2000">
                    <h2>Our AR/VR <small>&</small> MR Development Process</h2>
                    <p>Here is the sequential work process on how our peeps make themselves involve in your cryptocurrency exchange development.</p>
                </div>
                <div className={style.dev_process_list}>
                    <ul className="list-none flex flex-wrap">
                        <li className="w-100" data-aos="fade-left" data-aos-duration="2000">
                            <section>
                                <h3>App Ideation</h3>
                                <p>An idea is what it takes to start the journey towards to successful App.</p>
                            </section>
                        </li>
                        <li className="w-100" data-aos="fade-right" data-aos-duration="2000">
                            <section>
                                <h3>Conceptualization</h3>
                                <p>Once we have an idea about what we are going to deal with, we conceptualize the App, its features, add vertical & horizontal additions to the idea.</p>
                            </section>
                        </li>
                        <li data-aos="fade-left" data-aos-duration="2000">
                            <section>
                                <h3>Documentation</h3>
                                <p>AR / VR Document contains the execution plan and details about the App being developed.</p>
                            </section>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="2000">
                            <section>
                                <h3>App Design</h3>
                                <p>All the graphical 2D or 3D work is kick started to prepare assets as per the requirements.</p>
                            </section>
                        </li>
                        <li data-aos="fade-left" data-aos-duration="2000">
                            <section>
                                <h3>AR / VR & MR Development</h3>
                                <p>AR / VR App development & integration <br/>as per Scope.</p>
                            </section>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="2000">
                            <section>
                                <h3>Deployment</h3>
                                <p>Final submission to the App Store & Play Store.</p>
                            </section>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}