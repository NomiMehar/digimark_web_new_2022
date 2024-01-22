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
                            <p>Assuming we are setting up everything the process we follow is this one.</p>
                            <p>Otherwise if we are integrating with your current <span>QA team</span>, we’ll adapt to your current flow, methods and tools you currently have in use.</p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}