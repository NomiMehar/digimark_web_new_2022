import React, {useEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
import AOS from 'aos';
import whiteArrow from "../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Image from "next/image";

export default function CaseStudyIosTwo () {
    useEffect(() => {
        AOS.init();
    },[]);

    useEffect(() => {
        ScrollTrigger.defaults({
            markers: false
        });

        var points = gsap.utils.toArray(".point");

        var height = 100 * points.length;

        var pinner = gsap.timeline({
            scrollTrigger: {
                trigger: ".case-study-two-wrap .wrapper",
                start: "top top",
                end: "+=" + height + "%",
                scrub: true,
                pin: true,
                id: "pinning",
                markers: false
            }
        });

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".case-study-two-wrap",
                start: "top center",
                end: "+=" + height + "%",
                scrub: true,
                id: "points"
            }
        });

        points.forEach(function (elem, i) {
            gsap.set(elem, { position: "absolute", top: 0 });

            tl.set(elem, { zIndex: 100 });
            tl.from(elem.getElementsByClassName('split right'), {opacity:0}, i)
            tl.from(elem.getElementsByClassName('centered'), { opacity: 0, translateY: 100 }, i);

            if (i != points.length-1) {
                tl.to(elem.getElementsByClassName('centered'), {opacity: 0, translateY: -100}, i + .25)
                tl.to(elem.getElementsByClassName('split right'), { opacity: 1}, i + .25)
            }
        });
    },[]);

    return(
        <div className="flex direction-column">
            <section className="case-study-two-wrap">
                <div className="wrapper">
                    <div className="indicators">
                        <div className="indicator"></div>
                        <div className="indicator"></div>
                        <div className="indicator"></div>
                    </div>
                    <div className="point">
                        <div className="split left" data-aos="fade-left" data-aos-duration="1000">
                            <article className="centered content-wrapper">
                                <span>Case Study</span>
                                <h2>Optimized Healthcare Management System</h2>
                                <p>We successfully addressed client threats & offered them the best Custom Software Solutions where they were able to keep records of the patients, billing, appointments, and other administrative tasks.</p>
                                <Link href="/pages" className="contact_btn">Read Our Case Study <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                            </article>
                        </div>
                        <div className="split right">
                            <img src="/assets/images/services/case-study-1.jpg" alt="random" />
                        </div>
                    </div>
                    <div className="point">
                        <div className="split left">
                            <article className="centered content-wrapper">
                                <span>Case Study</span>
                                <h2>Optimized Healthcare Management System</h2>
                                <p>We successfully addressed client threats & offered them the best Custom Software Solutions where they were able to keep records of the patients, billing, appointments, and other administrative tasks.</p>
                                <Link href="/pages" className="contact_btn">Read Our Case Study <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                            </article>
                        </div>
                        <div className="split right">
                            <img src="/assets/images/services/case-study-1.jpg" alt="random"/>
                        </div>
                    </div>
                    <div className="point">
                        <div className="split left">
                            <article className="centered content-wrapper">
                                <span>Case Study</span>
                                <h2>Optimized Healthcare Management System</h2>
                                <p>We successfully addressed client threats & offered them the best Custom Software Solutions where they were able to keep records of the patients, billing, appointments, and other administrative tasks.</p>
                                <Link href="/pages" className="contact_btn">Read Our Case Study <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                            </article>
                        </div>
                        <div className="split right">
                            <img src="/assets/images/services/case-study-1.jpg" alt="random"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}