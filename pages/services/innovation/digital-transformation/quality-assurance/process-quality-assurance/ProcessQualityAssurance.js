import style from "./processQualityAssurance.module.scss"
import React from "react";
import Image from "next/image";
import image from "../../../../../../public/assets/images/services/qa-process-img.png"

export default function ProcessQualityAssurance() {
    return(
        <>
            <div className={`${style.process_quality_assurance}`}>
                <div className="container">
                    <div className="section_title">
                        <h2>Our <span>QA & Testing Process</span></h2>
                    </div>
                    <div className={`flex items-center ${style.quality_assurance}`}>
                        <section>
                            <Image src={image} alt="image"/>
                        </section>
                        <section>
                            <h3>How is the <span>testing <br/>process</span> set up?</h3>
                            <p>If we are commencing the testing process from scratch, we will follow a customized methodology to fit your project needs.</p>
                            <p>Contrary, if we are working alongside your <span>QA team,</span> we will adapt your existing workflows, methodologies, and toolsets.</p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}