import style from "../industries-about/industriesAbout.module.scss";
import Image from "next/image";
import whiteArrow from "../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";
import React from "react";

export default function IndustriesAbout() {
    return(
        <div className={`${style.industries_about} ${style.industries_about2}`}>
            <div className="container"><h2>Why Digi<span>Mark</span> Developers</h2></div>
            <div className="container flex justify-between">
                <section>
                    <p>20+ years of experience in healthcare IT</p>
                    <p>Forrester's 2022 Modern Application Development Services report recognition</p>
                    <p>Ranked high in 2021 Execution Zone for Telemedicine and IoT by Zinnov Zones</p>
                    <p>HIPAA- and HITECH-compliant software development</p>
                </section>
                <section>
                    <p>Adherence to OWASP, IEC 62443 and other medical development security criteria</p>
                    <p>Working knowledge of the major healthcare standards and coding systems, including DICOM, FHIR, ICD-10, and CPT</p>
                    <p>Expertise with FDA classes II and III, and IEC 62304 classes A, B and C of medical devices</p>
                    <p>Internal Healthcare Center of Excellence</p>
                </section>
            </div>
        </div>
    )
}