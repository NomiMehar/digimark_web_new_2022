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
                "title": "Is an NDA going to be signed to protect the privacy of my Android app idea?",
                "content": "Yes, we take your privacy very seriously. If you want to make sure your app concept stays private, we are always happy to sign a non-disclosure agreement (NDA)."
            },
            {
                "title": "What is the price of developing an Android app?",
                "content": "The price of an Android app development service varies according to the features, level of complexity, and amount of time needed to create the app just right. For every job, we provide a unique quote that takes these things into account. It's appropriate for you to contact us at any moment if you'd want additional information about our offerings or app development; we'd be pleased to assist you in this way."
            },
            {
                "title": "Do you offer Android app maintenance support?",
                "content": "Yes, we offer all Android app users comprehensive maintenance and support services. Our team of professionals is constantly on hand to ensure that your app functions properly and doesn't cause you any trouble. To meet your needs and financial constraints, we provide a range of maintenance options. Are you curious about the plans? Get in touch with DigiMark Developers right now to get your app off to the ideal start."
            },
            {
                "title": "Will you help me with my Google Play store app?",
                "content": "DigiMark Developers should be your first choice when selecting the finest app development company since we constantly provide support for app deployment on the Google Play store and can help you at every stage of the process to ensure efficient and successful outcomes. Please feel free to discuss any worries or problems you may be having; our support staff will be pleased to assist you. We guarantee complete pleasure and prompt assistance for our clients."
            },
            {
                "title": "Will there be any maintenance and support services provided after launch?",
                "content": "Yes, we provide post-launch support and maintenance services to guarantee that your app keeps working properly and is current with security requirements and the newest technology—both of which are vital. Since we recognise how crucial it is to keep an app operating well for your company, our team of professionals will collaborate with you to fix any problems or bugs that may surface after launch."
            }
        ]
        
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
