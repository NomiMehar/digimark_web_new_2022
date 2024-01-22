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
                content: `Lorem ipsum dolor sit amet consectetur. Ultricies sed in proin mauris id nulla tellus arcu non. In nulla maecenas porttitor integer eget id. Tempus pulvinar fermentum mus semper.`,
            },
            {
                title: "How much does Android app development cost?",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "Do you provide maintenance support for Android apps?",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "Will you assist me in my app in the Google Play store?",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "Will I get any post-launch support and maintenance services?",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
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
