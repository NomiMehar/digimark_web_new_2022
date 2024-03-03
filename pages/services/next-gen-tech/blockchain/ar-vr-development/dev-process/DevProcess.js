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
                    <p>Our AR/VR Development Services are collaborative and our product development approach focuses on quality & creating world-class AR/VR products for our clients.</p>
                </div>
                <div className={style.dev_process_list}>
                    <ul className="list-none flex flex-wrap">
                        <li className="w-100" data-aos="fade-left" data-aos-duration="2000">
                            <section>
                                <h3>App Ideation</h3>
                                <p>A phase where creativity runs wild as we explore and hatch innovative ideas for AR/VR & MR applications.</p>
                            </section>
                        </li>
                        <li className="w-100" data-aos="fade-right" data-aos-duration="2000">
                            <section>
                                <h3>Conceptualization</h3>
                                <p>Upon acquiring a clear understanding of the task at hand, we proceed to conceive the application and its features to bring it into reality.</p>
                            </section>
                        </li>
                        <li data-aos="fade-left" data-aos-duration="2000">
                            <section>
                                <h3>Documentation</h3>
                                <p>The AR/VR document outlines the implementation strategy and provides information on the app under development.</p>
                            </section>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="2000">
                            <section>
                                <h3>App Design</h3>
                                <p>Our award-winning design team will build out your flow and design assets.</p>
                            </section>
                        </li>
                        <li data-aos="fade-left" data-aos-duration="2000">
                            <section>
                                <h3>AR / VR & MR Development</h3>
                                <p>We work in two-week sprints, so you’re always up to speed with the status.</p>
                            </section>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="2000">
                            <section>
                                <h3>Deployment</h3>
                                <p>Access our team for iterative changes for two weeks after launch.</p>
                            </section>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}