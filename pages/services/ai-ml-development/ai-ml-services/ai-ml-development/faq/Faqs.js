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
                title: "What are services for AI and ML development?",
                content: `The creation of artificial intelligence and machine learning solutions suited to particular business requirements is the focus of AI & ML development services. These services improve automation, decision-making, and overall efficiency by creating predictive models, integrating AI/ML technology, and constructing algorithms.`,
            },
            {
                title: "What will artificial intelligence (AI) do for my business?",
                content: `Using these methods can be hugely beneficial for your organization by automating repetitive tasks, gleaning data insights from existing data sets, enhancing predictive capabilities, offering personalized customer recommendations ,and streamlining operations.`,
            },
            {
                title: "Which industries will benefit most from AI/ML solutions?",
                content: `AI and ML solutions can be employed across diverse sectors such as manufacturing, logistics, health care services provision finance as well as retailing due to their versatility. In every enterprise there is a possibility of utilizing AI/ML for creating customized applications like supply chain optimization systems detection of fraudulence or performing predictive analysis.`,
            },
            {
                title: "What is the duration required to develop an AI/ML solution?",
                content: `The timeframe that it takes to develop an AI/ML solution depends upon the project’s complexity’ availability of data’, 'required features’. Usually for two weeks till several months. Working together, we develop a reasonable schedule that takes into account your unique requirements.`,
            },
            {
                title: "In AI/ML initiatives, how can you guarantee the security of our data?",
                content: `We put strong safeguards in place, such as encryption, access controls, and frequent security audits, because we value data security. Our development method complies with regulatory regulations and industry best practices to safeguard your confidential data during the course of an AI/ML project.`,
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
