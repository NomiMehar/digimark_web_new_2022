import style from "./outSourced.module.scss"
import mvptabsImage from "../../../../../../public/assets/images/services/mvptabs.webp"
import Image from "next/image";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";

export default function OutSourced() {
    return(
        <div className={style.out_sourced_wrap}>
            <div className="container">
                <div className={style.heading}>
                    <h2>Our models for <span>outsourced <br/>development Services</span></h2>
                    <p>At <span>DigiMark Developers,</span> we want to offer our worldwide partners maximum freedom and flexibility. That's why we have several cooperation models to meet your needs as best as possible. You can choose from team augmentation, a tailored team, end-to-end services, or consulting & expertise - whatever is in line with your current requirements.</p>
                </div>
                <div className={style.tabs_wrap}>
                    <figure>
                        <Image src={mvptabsImage} alt="mvptabsImage"/>
                    </figure>
                    <section className="mavp-tab-accordion">
                        <Accordion preExpanded={['a']} className="">
                            <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Team augmentation
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    When you have a task to be done and want to outsource it to a <span>team of professionals.</span>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Tailored team
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    When you have a task to be done and want to outsource it to a <span>team of professionals.</span>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        End-to-end services
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    When you have a task to be done and want to outsource it to a <span>team of professionals.</span>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Consulting & expertise
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    When you have a task to be done and want to outsource it to a <span>team of professionals.</span>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </section>
                </div>
            </div>
        </div>
    )
}