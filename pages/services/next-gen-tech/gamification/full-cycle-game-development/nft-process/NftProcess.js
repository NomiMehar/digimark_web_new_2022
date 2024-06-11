import style from "./nftProcess.module.scss"
import React,{useEffect} from "react";
import AOS from 'aos';

export default function NftProcess() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={`flex flex-wrap ${style.nft_process}`}>
            <div className="container">
                <div className="section_title white" data-aos="fade-right"
                    data-aos-duration="2000">
                    <h2>Our Full Cycle Game development processes</h2>
                </div>
                <div className={`${style.nft_process_text}`}>
                    <section data-aos="fade-left"
                    data-aos-duration="2000">
                        <span><small>1</small> Requirement Analysis</span>
                    </section>
                    <section className={style.left_section} data-aos="fade-up"
                    data-aos-duration="2000">
                        <p>We start by gathering crucial information and business goals & objectives. Our team ensures you get the desired results just as you imagined.</p>
                    </section>
                    <section className={style.right_section}>
                        <ul className="list-none">
                            <li  data-aos="fade-right"
             data-aos-easing="ease-in-sine"
             data-aos-duration="1000">
                                <span><small>2</small> Concept</span>
                                <p>We provide the first draft of the game within a short period so that you can make an opinion if any.</p>
                            </li>
                            <li  data-aos="fade-left"
             data-aos-easing="ease-in-sine"
             data-aos-duration="1000">
                                <span><small>3</small> Game Development</span>
                                <p>In this phase, the technical implementation is done where the developers utilize tools, codes, and technologies to develop a positive gaming experience without any trouble.</p>
                            </li>
                            <li data-aos="fade-right"
                    data-aos-duration="2000">
                                <span><small>4</small> Game Testing</span>
                                <p>To ensure the game's functionality, performance, and stability, the game has to go through different testing phases to give the best user experience.</p>
                            </li>
                            <li data-aos="fade-left"
                    data-aos-duration="2000">
                                <span><small>5</small> Pre-Launch</span>
                                <p>Before launching the game officially, we ensure complete quality to get the best result. Get the best quality results and achieve goals.</p>
                            </li>
                            <li data-aos="fade-right"
                    data-aos-duration="2000">
                                <span><small>6</small> Game Deployment</span>
                                <p>Once the testing is done completely, the developed game is deployed on the required platform for an attractive gameplay experience. Maintenance is done properly for a better experience.</p>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}