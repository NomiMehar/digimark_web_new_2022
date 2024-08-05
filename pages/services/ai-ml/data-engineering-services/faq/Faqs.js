import React, {useEffect} from "react";
import style from "./faqs.module.scss";
import Faq from "react-faq-component";
import Image from "next/image";
import Link from "next/link";
import whiteArrow from "../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import AOS from 'aos';

export default function Faqs(props) {
    useEffect(() => {
        AOS.init();
    }, [])
    const data = {
        rows: [
            {
                title:" What is data engineering?",
                content: `In data engineering, data engineering refers to the process of conceptualizing, building and managing systems and pipelines for processing and analyzing information. It helps enable corporate insights and decision-making by ensuring that information is easily accessible for analysis.`
            },
            {
                title:"What does data engineering mean in business?",
                content: `By maintaining efficient management of huge amounts of data, it becomes possible to access accurate and timely data with ease. This facilitates competitive advantage, process optimization and making informed decisions.`
            },
            {
                title:"Which tools and technologies are used in data engineering?",
                content: `Our Data Solutions are designed using different tools and technologies such as SQL databases, cloud platforms like AWS/Azure, Apache Hadoop, Apache Spark, Talend and Apache NiFi which ensure their scalability.`
            },
            {
                title:"How can you guarantee data quality and security?",
                content: `Data integrity maintenance requires industry compliance audits because there are various quality assurance checks on our data validation processes as well as security measures involving encryption that we conduct.`
            },
            {
                title:"Can you integrate data engineering solutions with existing systems?",
                content: `Yes, our solutions are created to smoothly blend with your current systems and infrastructure. We guarantee that new and old systems work well together, improving data management without interrupting current operations.`
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
