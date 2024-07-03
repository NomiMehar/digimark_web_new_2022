import style from "./industriesServe.module.scss";
import industriesServeList from "./industriesServeList.json";
import Image from "next/image";
import whiteArrow from "../../../public/assets/images/services/green-arrow.svg";
import Link from "next/link";
import React from "react";

export default function IndustriesServe() {
    return(
        <div id="caseStudies" className={style.industries_serve_wrap}>
            <div className="container">
                <div className="section_title  white">
                    <h2>Industries <span>We Serve</span></h2>
                </div>
                <div className={style.industries_serve}>
                    <ul className="list-none flex flex-wrap">
                        {
                            industriesServeList.map(({serveImage,serveTitle,serveDescription},index)=>{
                                return(
                                    // href="/industries/industry-details"
                                    // <Link href="">
                                    <li key={index}>
                                        <div className={style.industries_serve_text}>
                                            <figure>
                                                <Image width={412} height={250} src={serveImage} alt="serve"/>
                                            </figure>
                                            <section>
                                                <h3>{serveTitle}</h3>
                                                <p>{serveDescription}</p>
                                                <Link href="" className="learnmore">Learn more <Image src={whiteArrow} alt="arrow"/></Link>
                                            </section>
                                        </div>
                                    </li>
                                    // </Link>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}