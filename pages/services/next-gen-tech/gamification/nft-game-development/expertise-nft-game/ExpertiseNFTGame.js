import style from "./expertiseNFTGame.module.scss"
import Image from "next/image";
import etIcon1 from "../../../../../../public/assets/images/services/et-icon1.png"
import React from "react";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";

export default function ExpertiseNFTGame() {
    return(
        <>
            <div className={style.expertise_nft_game}>
                <div className="container">
                    <div className="section_title">
                        <h2><span>Expertise & Technologies</span></h2>
                    </div>
                    <div className={`flex ${style.expertise_nft}`}>
                        <ul className="list-none flex direction-column">
                            <li><h3>Misc</h3></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>Product Management</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>Project Management</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>Art & Animations</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>FE Development</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>BE Development</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>Mathematics</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>3rd Party Integrations</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>Quality Assurance</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>Agile</span></li>
                        </ul>
                        <ul className="list-none flex direction-column">
                            <li><h3>Artwork</h3></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>2D/3D Graphics</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>2D/3D Animation</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>Concept Creation</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>After Effects</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>UI/UX design</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>Spine Animation</span></li>
                        </ul>
                        <ul className="list-none flex direction-column">
                            <li><h3>Frontend</h3></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>HTML 5</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>JavaScript</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>Angular</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>React</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>Flash</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>TypeScript</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>Phaser</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>PixiJS</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>Unity3D</span></li>
                        </ul>
                        <ul className="list-none flex direction-column">
                            <li><h3>Backend</h3></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>Product Management</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>Project Management</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>Art & Animations</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>FE Development</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>BE Development</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>Mathematics</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>3rd Party Integrations</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>Quality Assurance</span></li>
                            <li><Image src={etIcon1} alt="etIcon1"/><span>Agile</span></li>
                        </ul>
                    </div>
                    <div className={style.expert_action}>
                        <h2>We’re ready to build your dream NFT game</h2>
+                        <Link href="/contact-us/#contactForm" className={`contact_btn ${style.contact_btn}`}>Contact us <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}