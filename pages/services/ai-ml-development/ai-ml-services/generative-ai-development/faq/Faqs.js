import React, {useEffect} from "react";
import style from "./faqs.module.scss";
import Faq from "react-faq-component";
import Image from "next/image";
import Link from "next/link";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import AOS from 'aos';

export default function Faqs(props) {
    useEffect(() => {
        AOS.init();
    }, [])
    const data = {
        rows: [
            {
                title: "What is the evolution of generative AI?",
                content: `The process of developing generative AI systems is teaching them to recognise patterns and inputs in existing data to produce new material, such as writing, graphics, or music.`,
            },
            {
                title: "How will generative AI make the company profitable?",
                content: `By creating data-guided insights that suit your firm’s needs, generative AI can foster creativity, automate content generation, deliver personalized consumer experiences and enhance decision-making.`,
            },
            {
                title: "Which industries are expected to benefit from generative AI?",
                content: `From retail, healthcare, banking, education to entertainment; both these areas could be applied with generative for innovation purposes, improved customer engagement or the optimization of procedures.`,
            },
            {
                title: "How do we ensure reliability and quality of generative AI models?",
                content: `In order to create trustworthy AI solutions, we maintain quality through stringent testing, ongoing model improvement, and validation against real-world scenarios. We also eliminate any biases and increase accuracy.`,
            },
            {
                title: "What is the typical time frame for creating a solution with generative AI?",
                content: `The complexity of the project and data amount requirements as well as customization affect the time frame. On average it may take several weeks to several months which includes planning, development as well as testing processes.`,
            }
        ],
    };
    const styles = {
        rowTitleColor: "#252B33",
        rowContentColor: 'rgba(37,43,51,0.6)',
        arrowColor: "#000000",
    };
    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

  return (
    <div className={`flex direction-column faq_wrapper ${style[props.extraClass]} ${style.faq_wrapper}`}>
        <div className="container flex justify-between">
            <div className={`flex direction-column ${style.faq_wrapper_title}`} data-aos="fade-right" data-aos-duration="1000">
                <h2>Frequently Asked Questions?</h2>
                <p>Do you want to take your business <Link href="pages/services/innovation/mobility/android-app-development/faq/Faqs#">digital</Link> with a <Link href="pages/services/innovation/mobility/android-app-development/faq/Faqs#">mobile</Link> that perfectly reflects your brand?</p>
                    <Link href="/contact-us/#contactForm" className={`contact_btn ${style.contact_btn}`}>Schedule a free expert session <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
            </div>
            <div className="flex faq_wrapper_content" data-aos="fade-left" data-aos-duration="1000">
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div> 
        </div>
    </div>
  );
}
