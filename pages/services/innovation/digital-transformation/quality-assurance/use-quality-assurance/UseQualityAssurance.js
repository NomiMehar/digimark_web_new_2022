import style from "./useQualityAssurance.module.scss"
import useQualityAssuranceList from "./useQualityAssuranceList.json"
import React from "react";
import Image from "next/image";

export default function UseQualityAssurance() {
    return(
        <>
            <div className={`${style.use_quality_assurance}`}>
                <div className="container">
                    <div className="section_title white">
                        <h2>Tool that we use in <br/> <span>QA & Testing</span></h2>
                    </div>
                    <div className={`flex ${style.quality_assurance}`}>
                        <section>
                            <h3>Manual testing</h3>
                            <ul className="list-none flex flex-wrap justify-end">
                                {
                                    useQualityAssuranceList.slice(0,7).map(({img,title},index)=>{
                                        return(
                                            <li className="flex justify-center direction-column" key={index}>
                                                <Image width={70} height={70} src={img} alt="image1"/>
                                                {title}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </section>
                        <section>
                            <h3>Automated testing</h3>
                            <ul className="list-none flex flex-wrap justify-start">
                                {
                                    useQualityAssuranceList.slice(7,12).map(({img,title},index)=>{
                                        return(
                                            <li className="flex justify-center direction-column" key={`ab-${index}`}>
                                                <Image width={70} height={70} src={img} alt="image1"/>
                                                {title}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}