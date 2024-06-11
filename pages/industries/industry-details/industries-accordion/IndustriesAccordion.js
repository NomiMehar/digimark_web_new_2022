import style from "./industriesAccordion.module.scss";
import Image from "next/image";
import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import downArrow from "../../../../public/assets/images/services/green_arrow.svg";
import accordionBG from "../../../../public/assets/images/industries/accordion-bg.jpg";

export default function IndustriesAccordion() {
    return(
        <div className={style.industries_accordion}>
            <div className="container flex flex-wrap">
                <section>
                    <h2>Our <span>healthcare software</span> development services</h2>
                    <p>Our expertise in healthcare software development empowers us to seamlessly engage in projects at any stage, ensuring comprehensive support and success.</p>
                    <Image src={accordionBG} alt="image"/>
                </section>
                <section>
                    <Accordion preExpanded={['a']} className="industries_accordion">
                        <AccordionItem uuid="a">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Consulting
                                    <span><Image src={downArrow} alt={downArrow} width={22} height={28}/></span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>We offer comprehensive consultancy services & our experienced consultants guide technology adoption, solution selection, and implementation planning, enabling you to establish optimal digital environments for enhanced operational efficiency and improved patient outcomes.</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Development
                                    <span><Image src={downArrow} alt={downArrow} width={22} height={28}/></span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>Our experts customize healthcare solutions that align with your business's objectives. We prioritize industry standards, security, and best practices to deliver high-quality applications tailored to your specific needs.</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Integration
                                    <span><Image src={downArrow} alt={downArrow} width={22} height={28}/></span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>We enhance connectivity in healthcare IT systems by seamlessly integrating your software with external applications, prioritizing interoperability and data security. Our solutions streamline the adoption of future extensions, enabling value-driven enhancements in the long run.</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Support & maintenance
                                    <span><Image src={downArrow} alt={downArrow} width={22} height={28}/></span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>We help healthcare companies maintain the optimal functionality, adaptability, and affordability of their software. We offer comprehensive support services, including continuous 24/7 performance monitoring, timely upgrades, and personalized enhancements.</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Legacy software reengineering
                                    <span><Image src={downArrow} alt={downArrow} width={22} height={28}/></span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>We facilitate healthcare organizations in modernizing outdated systems through upgrades, enhancements, or complete transformations. Our skilled developers ensure improved security, reliability, and adherence to current industry standards, delivering enhanced software solutions</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </section>
            </div>
        </div>
    )
}