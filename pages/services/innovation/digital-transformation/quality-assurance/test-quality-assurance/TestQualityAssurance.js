import style from "./testQualityAssurance.module.scss"
import React from "react";

export default function TestQualityAssurance() {
    return(
        <>
            <div className={`${style.test_quality_assurance}`}>
                <div className="container">
                    <div className={style.test_quality}>
                        <div className={`flex ${style.test_quality_title}`}>
                            <section>
                                <h2>Types of Software DigiMark Tests</h2>
                                <p>DigiMark Developers provides desktop, <span>web application, and mobile testing on iOS,</span> Android, and Windows. Our software testing methodologies include functional and non-functional testing and some other types of testing.</p>
                            </section>
                            <svg xmlns="http://www.w3.org/2000/svg" width="146" height="146" viewBox="0 0 146 146" fill="none">
                                <path d="M132.335 131.867C132.077 133.891 131.422 135.845 130.408 137.616C129.395 139.387 128.042 140.941 126.428 142.189C124.813 143.437 122.969 144.355 121 144.89C119.03 145.425 116.975 145.567 114.951 145.308L13.5714 132.33C11.5467 132.072 9.59266 131.418 7.82103 130.404C6.0494 129.39 4.49487 128.037 3.24625 126.423C1.99762 124.808 1.07939 122.963 0.544003 120.994C0.00861956 119.024 -0.133419 116.968 0.126003 114.944L13.1032 13.5638C13.362 11.5399 14.017 9.5868 15.0308 7.81605C16.0446 6.04531 17.3973 4.49164 19.0117 3.24378C20.626 1.99591 22.4704 1.07831 24.4395 0.543369C26.4085 0.00843248 28.4636 -0.133354 30.4875 0.126108L131.867 13.1033C133.891 13.3621 135.844 14.0171 137.615 15.0309C139.386 16.0447 140.94 17.3973 142.188 19.0116C143.436 20.6259 144.354 22.4703 144.889 24.4394C145.424 26.4084 145.567 28.4636 145.308 30.4876L132.335 131.867Z" fill="#6BB64A" fill-opacity="0.38"/>
                                <path d="M117.172 7.91016H28.2704C17.0279 7.91016 7.91406 17.024 7.91406 28.2665V117.165C7.91406 128.408 17.0279 137.522 28.2704 137.522H117.172C128.414 137.522 137.528 128.408 137.528 117.165V28.2665C137.528 17.024 128.414 7.91016 117.172 7.91016Z" fill="#6BB64A"/>
                                <path d="M65.069 85.4425C61.2777 88.5939 56.4678 90.2556 51.5397 90.1168H30.2495V47.5364H51.5422C56.4912 47.4549 61.3015 49.1729 65.0792 52.371V78.534V39.7908C60.8384 37.8307 56.2139 36.8406 51.5422 36.8926H19.6006V100.773H51.5397C55.5281 100.791 59.4844 100.061 63.2039 98.6207C63.5832 98.4954 63.9531 98.3432 64.3108 98.1652L64.3617 98.1423L64.7942 97.8649L65.0818 97.6741L65.069 85.4425Z" fill="white"/>
                                <path d="M65.0576 39.8398V52.415L65.0805 52.4302V78.6009L75.7269 72.494V58.331L86.1214 64.3871L97.0222 58.4354L65.0805 39.8602L65.0576 39.8398Z" fill="white"/>
                                <path d="M65.0684 85.5074C65.0684 85.5074 65.0684 85.5074 65.0684 85.5201V97.7492L118.315 63.1154V108.53H128.962V44.6445L65.0684 85.5074Z" fill="white"/>
                            </svg>
                        </div>
                        <h3>Classification of our testing types</h3>
                        <div className={`flex flex-wrap ${style.test_quality_content}`}>
                            <section>
                                <h4>Functional testing</h4>
                                <p>Functional testing is based on the system’s functions and functional quality characteristics such as completeness, correctness, and appropriateness. This type of testing is necessary to conduct during all testing levels. Testing techniques differ according to the specification of your project and depend on the functional coverage you need during the testing. Mostly, functional testing is conducted using black box testing techniques such as equivalence partitioning, boundary value analysis, decision tables, state transition, use cases, and pairwise.</p>
                            </section>
                            <section>
                                <h4>Efficiency/performance testing</h4>
                                <ul className="list-none list-style-dots">
                                    <li>Reliability testing</li>
                                    <li>Internalization and localization testing</li>
                                    <li>Accessibility testing</li>
                                    <li>Installation testing</li>
                                    <li>Conformance/compliance testing</li>
                                </ul>
                            </section>
                            <section>
                                <h4>Efficiency/performance testing</h4>
                                <ul className="list-none list-style-dots">
                                    <li>Reliability testing</li>
                                    <li>Internalization and localization testing</li>
                                    <li>Accessibility testing</li>
                                    <li>Installation testing</li>
                                    <li>Conformance/compliance testing</li>
                                </ul>
                            </section>
                            <section>
                                <h4>Efficiency/performance testing</h4>
                                <ul className="list-none list-style-dots">
                                    <li>Reliability testing</li>
                                    <li>Internalization and localization testing</li>
                                    <li>Accessibility testing</li>
                                    <li>Installation testing</li>
                                    <li>Conformance/compliance testing</li>
                                </ul>
                            </section>
                            <section>
                                <h4>Efficiency/performance testing</h4>
                                <ul className="list-none list-style-dots">
                                    <li>Reliability testing</li>
                                    <li>Internalization and localization testing</li>
                                    <li>Accessibility testing</li>
                                    <li>Installation testing</li>
                                    <li>Conformance/compliance testing</li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}