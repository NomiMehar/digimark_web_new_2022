import style from "./typesOfSaas.module.scss";
import typeOfImage from "../../../../../../public/assets/images/services/type-of-saas.png"
import React from "react";
import Image from "next/image";

export default function TypesOfSaas() {
    return(
        <div className={style.sass_typesaas_wrapper}>
            <div className="container flex">
                <figure>
                    <Image src={typeOfImage} alt="typeOfImage"/>
                </figure>
                <section>
                    <div className="section_title">
                        <h2><span>Types of SaaS</span> Applications We Develop</h2>
                    </div>
                    <ul className="list-none">
                        <li>Customer Relationship Management (CRM) Software</li>
                        <li>Accounting Software</li>
                        <li>Project Management Software</li>
                        <li>Data Analytics</li>
                        <li>Human Resources Management Platform</li>
                        <li>E-commerce Platforms</li>
                        <li>E - Learning Software</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}