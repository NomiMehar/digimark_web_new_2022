import style from "./caseTags.module.scss"
import Image from "next/image";
import Link from "next/link";
import whiteArrow from "../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import React from "react";

export default function CaseTags() {
    return(
        <>
            <div className={style.case_tags_wrap}>
                <div className="container flex flex-wrap">
                    <section>
                        <h2>Industry</h2>
                        <span>Real Estate</span>
                    </section>
                    {/* <section>
                        <h2>Country</h2>
                        <span>UK</span>
                    </section> */}
                    <section>
                        <h2>Technologies</h2>
                        <ul className="list-none flex flex-wrap">
                            <li><span>React.js</span></li>
                            <li><span>Node.js</span></li>
                            <li><span>PostgeSQL</span></li>
                            <li><span>Python</span></li>
                            <li><span>AWS</span></li>
                        </ul>
                    </section>
                    <section>
                        <h2>services used</h2>
                        <ul className="list-none flex flex-wrap">
                            <li><span>UI/UX DESIGN</span></li>
                            <li><span>FRONT-END DEVELOPMENT</span></li>
                            <li><span>BACK-END DEVELOPMENT</span></li>
                            <li><span>PRODUCT DEVELOPMENT</span></li>
                            <li><span>RESEARCH AND DEVELOPMENT</span></li>
                        </ul>
                        <Link href="#" className={`contact_btn`}>Check our all services <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                    </section>
                </div>
            </div>
        </>
    )
}