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
                    <p>We are ready to handle the full cycle of healthcare software development or join you at any stage of the project and help you.</p>
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
                                <p>Our consultants help medical organizations establish optimal digital environments by advising on the technologies that fit into your company’s ecosystem, helping choose solutions most suitable for your business, and drawing up an efficient plan for their implementation.</p>
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
                                <p>Our consultants help medical organizations establish optimal digital environments by advising on the technologies that fit into your company’s ecosystem, helping choose solutions most suitable for your business, and drawing up an efficient plan for their implementation.</p>
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
                                <p>Our consultants help medical organizations establish optimal digital environments by advising on the technologies that fit into your company’s ecosystem, helping choose solutions most suitable for your business, and drawing up an efficient plan for their implementation.</p>
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
                                <p>Our consultants help medical organizations establish optimal digital environments by advising on the technologies that fit into your company’s ecosystem, helping choose solutions most suitable for your business, and drawing up an efficient plan for their implementation.</p>
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
                                <p>Our consultants help medical organizations establish optimal digital environments by advising on the technologies that fit into your company’s ecosystem, helping choose solutions most suitable for your business, and drawing up an efficient plan for their implementation.</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </section>
            </div>
        </div>
    )
}