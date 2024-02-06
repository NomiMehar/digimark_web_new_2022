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
                title: "Will we sign an NDA to keep my Android app idea confidential?",
                content: `Yes, we take confidentiality very seriously, and we are always willing to sign a non-disclosure agreement (NDA) to ensure your app idea remains confidential for your satisfaction.`,
            },
            {
                title: "How much does Android app development cost?",
                content: `The cost of an Android app development service varies depending on the complexity of the app, its features, and the time required to develop it perfectly. We provide a customized quote for each project based on these factors. If you aspire to know more about our services or app-making, then it's the right time for you to reach out to us anytime and we would be happy to help you out in this regard. `,
            },
            {
                title: "Do you provide maintenance support for Android apps?",
                content: `Yes, we do provide complete maintenance and support services for all Android apps. Our team of experts is always available to make sure that your app runs smoothly and efficiently without giving you any difficulty while using it. We offer various maintenance plans to fit your specific needs and budget. Wish to know the plans? Connect now with DigiMark Developers and have your app off the ground perfectly. `,
            },
            {
                title: "Will you assist me in my app in the Google Play store?",
                content: `When choosing the best app development company, DigiMark Developers should be your choice because we will always offer support for app deployment on the Google Play store and can assist you throughout the process for smooth and effective results. Do share any concerns or issues you have and our support team would be more than happy to help you out. We ensure utter satisfaction and instant help for our customers. `,
            },
            {
                title: "Will I get any post-launch support and maintenance services?",
                content: `Yes, we offer post-launch support and maintenance services to make sure that your app continues to function smoothly and stays up-to-date with the latest technology and security standards which are extremely important. We understand the importance of maintaining an app's performance for your business, so our team of experts will work with you to resolve any issues or bugs that may arise after the launch. `,
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
                    <Link href="pages/services/innovation/mobility/android-app-development/faq/Faqs#" className={`contact_btn ${style.contact_btn}`}>Schedule a free expert session <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
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
