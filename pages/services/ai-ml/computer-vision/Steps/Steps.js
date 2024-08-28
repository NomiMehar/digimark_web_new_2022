import React, {useEffect} from "react";
import style from "./Steps.module.scss"
import step1 from "../../../../../public/assets/images/services/cstep1.webp"
import step2 from "../../../../../public/assets/images/services/cstep2.webp"
import step3 from "../../../../../public/assets/images/services/cstep3.webp"
import step4 from "../../../../../public/assets/images/services/cstep4.webp"
import step5 from "../../../../../public/assets/images/services/cstep5.webp"
import step6 from "../../../../../public/assets/images/services/cstep6.webp"
import step7 from "../../../../../public/assets/images/services/cstep7.webp"
import Image from "next/image";
import AOS from 'aos';
import Image from "next/image";

export default function Steps (props) {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
        <div className={style.our_story_wrapper}>
            <div className="section_title">
                <h2>Computer Vision Solutions Across the Industries</h2>
                <p>The main advantage of Data Science for business is an accurate solution based on analyzing a massive amount of data that cannot be processed manually.</p>
            </div>
                <div className="container flex items-center">
                    <div
                        className={style.story_text}
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <h2>From First Concept to MVP - <span>The Roadmap</span></h2>
                        <p>The process we’ve developed for taking an AI/ML project from conception to delivery spans 3 full days, broken down into 6 distinct steps.
                        </p>
                        <p>We call this our Cloud Accelerator Programme - and businesses are generally surprised to discover that it’s completely cost neutral for clients whose digital transformation project will require a $750 monthly spend on the Amazon Web Services (AWS) platform moving forward.</p>
                        <p>
                        Here, we’ll take a look at what each of those steps entails - as well as the time investment required for each part of the process.
                        </p>
                        <button
                            className="contact_btn">
                           Boost productivity & Profitability
                            <Image width={100} height={100} src="/assets/images/homepage/lets_talk/arrow.svg" alt="arrow" />
                        </button>
                    </div>
                    <figure
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >
                        <Image src={step7} alt={step7} />
                    </figure>
                </div>
        </div>
            <div className={`flex direction-column ${style.step1}`}>
                        <div className="container flex items-center">
                            <figure
                                data-aos="fade-left"
                                data-aos-duration="2000"
                            >
                                <Image src={step1} alt={step1} />
                            </figure>
                            <div
                                className={style.story_text}
                                data-aos="fade-right"
                                data-aos-duration="2000"
                            >
                                <span className={style.subline}>Step 1:</span>
                                <h2>Discovery Call - <span>Exploring Ideas (1 Hour)</span></h2>
                                <p>If you’re reading this, you’re thinking about what artificial intelligence or machine learning could bring to your business. We can transition into your process at any stage, whether you’ve got fleshed-out ideas about how you could use AI/ML, some work done with another provider, or even if you’re just beginning to be aware of a buzz around AI in your industry and want to make sure you’re keeping pace.</p>
                                <p>However developed your ideas are, we recommend starting with a ‘discovery’ call. This is a chance for us to get to know your product, the technical capabilities you have in-house or through an external service provider, and your vision for how AI or ML can be deployed and scaled.</p>
                                <button
                            className="contact_btn">
                           Boost productivity & Profitability
                            <Image width={100} height={100} src="/assets/images/homepage/lets_talk/arrow.svg" alt="arrow" />
                        </button>
                            </div>
                        </div>
            </div>
            <div className={`flex direction-column ${style.step2}`}>
                <div className="container flex items-center">
                    <div
                        className={style.story_text}
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                         <span className={style.subline}>Step 2:</span>
                        <h2>From First Concept to MVP - <span>The Roadmap</span></h2>
                        <p>The process we’ve developed for taking an AI/ML project from conception to delivery spans 3 full days, broken down into 6 distinct steps.
                        </p>
                        <p>We call this our Cloud Accelerator Programme - and businesses are generally surprised to discover that it’s completely cost neutral for clients whose digital transformation project will require a $750 monthly spend on the Amazon Web Services (AWS) platform moving forward.</p>
                        <p>
                        Here, we’ll take a look at what each of those steps entails - as well as the time investment required for each part of the process.
                        </p>
                        <button
                            className="contact_btn">
                           Boost productivity & Profitability
                            <Image width={100} height={100} src="/assets/images/homepage/lets_talk/arrow.svg" alt="arrow" />
                        </button>
                    </div>
                    <figure
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >
                        <Image src={step2} alt={step2} />
                    </figure>
                </div>
            </div>
            <div className={`flex direction-column ${style.step3}`}>
                        <div className="container flex items-center">
                            <figure
                                data-aos="fade-left"
                                data-aos-duration="2000"
                            >
                                <Image src={step3} alt={step3} />
                            </figure>
                            <div
                                className={style.story_text}
                                data-aos="fade-right"
                                data-aos-duration="2000"
                            >
                                <span className={style.subline}>Step 3:</span>
                                <h2>Best Practices - Safeguarding Your  <span>Digital Transformation</span> (2 Hours)</h2>
                                <p>AI and ML solutions are almost certainly going to be working hand-in-hand with intellectual property and sensitive data. As such, it’s never too early to think about best practices around security and recovery.</p>
                                <p>At this stage, we’ll connect again to discuss your existing security, disaster recovery, and data integrity infrastructure and compare it to the best practices and automation we’ve created to develop and streamline these essential factors. </p>
                                <p>Of course, managing future billing and cost optimisation in cloud-based AI/ML is also a crucial part of any decision-making process.</p>
                                <button
                            className="contact_btn">
                           Boost productivity & Profitability
                            <Image width={100} height={100} src="/assets/images/homepage/lets_talk/arrow.svg" alt="arrow" />
                        </button>
                            </div>
                        </div>
            </div>
            <div className={`flex direction-column ${style.step1}`}>
                        <div className="container flex items-center">
                            <div
                                className={`mr-fourty ${style.story_text}`}
                                data-aos="fade-right"
                                data-aos-duration="2000"
                            >
                                <span className={style.subline}>Step 4:</span>
                                <h2>Immersion - Aligning Technology and <span>Knowledge (4 Hours)</span></h2>
                                <p>Embarking on an AI/ML project isn’t just about having the right tools - it’s about making sure your team is fully equipped to use them.</p>
                                <p>To ensure this is the case, we’ll design a half-day immersion programme specifically designed for your in-house team. The session will focus on relevant technologies that are part of your AI/ML journey and will blend theoretical understanding with hands-on practice.</p>
                                <button
                            className="contact_btn">
                           Boost productivity & Profitability
                            <Image width={100} height={100} src="/assets/images/homepage/lets_talk/arrow.svg" alt="arrow" />
                        </button>
                            </div>
                            <figure
                                data-aos="fade-left"
                                data-aos-duration="2000"
                            >
                                <Image src={step4} alt={step4} />
                            </figure>
                        </div>
            </div>
            <div className={`flex direction-column ${style.step2}`}>
                <div className="container flex items-center">
                    <figure
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    >
                        <Image src={step5} alt={step5} />
                    </figure>
                    <div
                        className={`ml-fourty ${style.story_text}`}
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                         <span className={style.subline}>Step 5:</span>
                        <h2>POC Delivery - Bringing Ideas <span>To Life (1 Day)</span></h2>
                        <p>With ideas developed, proven best practices in place and your team’s knowledge honed, we’ll spend a full day creating a tangible, working model of your AI/ML project within your AWS environment.
                        </p>
                        <p>We’ll work with you to make sure the proof of concept (POC) or minimum viable product (MVP) that’s delivered aligns perfectly with your digital transformation objectives.</p>
                        <p>
                        This stage also includes forward thinking about efficacy and scalability of your AI/ML solution.
                        </p>
                        <button
                            className="contact_btn">
                           Boost productivity & Profitability
                            <Image width={100} height={100} src="/assets/images/homepage/lets_talk/arrow.svg" alt="arrow" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`flex direction-column ${style.step3}`}>
                        <div className="container flex items-center">
                            <div
                                className={`mr-fourty ${style.story_text}`}
                                data-aos="fade-right"
                                data-aos-duration="2000"
                            >
                                <span className={style.subline}>Step 6:</span>
                                <h2>Well Architectured Framework Review <span>Process (1 Day)</span></h2>
                                <p>Where prior immersion training was a simulator session, the final step of the process sees your project take flight and focuses on handing over the controls to your team.</p>
                                <p>To do this, we’ll use AWS’s exceptionally effective “Well Architectured Framework Review” (WAFR). The process looks at key concepts, design principles and structural best practices for running AI/ML workloads in the cloud.</p>
                                <button
                            className="contact_btn">
                           Boost productivity & Profitability
                            <Image width={100} height={100} src="/assets/images/homepage/lets_talk/arrow.svg" alt="arrow" />
                        </button>
                            </div>
                            <figure
                                data-aos="fade-left"
                                data-aos-duration="2000"
                            >
                                <Image src={step6} alt={step6} />
                            </figure>
                        </div>
            </div>
        </>
    );
};