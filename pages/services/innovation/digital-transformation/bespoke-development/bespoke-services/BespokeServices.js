import React, {useEffect} from "react";
import style from "./BespokeServices.module.scss";
import Faq from "react-faq-component";
import Image from "next/image";
import AOS from 'aos';

export default function BespokeServices() {
    useEffect(() => {
        AOS.init();
    }, [])
    const data = {
        rows: [
            {
                title: "01 Custom Development",
                content: <>
                <p>DigiMark can create custom bespoke software that meets your organization’s exact needs. We’ve worked to develop a large array of tailored solutions, including:</p>
                <ul className="list-none">
                    <li>Content management systems (CMS)</li>
                    <li>Customer relationship management (CRM)</li>
                    <li>Automated invoicing</li>
                    <li>Business process automation systems</li>
                    <li>Bug tracking software</li>
                    <li>E-commerce software</li>
                    <li>Company-facing and customer-facing web portals</li>
                </ul>
                </>
                ,
            },
            {
                title: "02 Bespoke Web Development",
                 content: <>
                <p>DigiMark can create custom bespoke software that meets your organization’s exact needs. We’ve worked to develop a large array of tailored solutions, including:</p>
                <ul className="list-none">
                    <li>Content management systems (CMS)</li>
                    <li>Customer relationship management (CRM)</li>
                    <li>Automated invoicing</li>
                    <li>Business process automation systems</li>
                    <li>Bug tracking software</li>
                    <li>E-commerce software</li>
                    <li>Company-facing and customer-facing web portals</li>
                </ul>
                </>
            },
            {
                title: "03 Mobile Development",
                 content: <>
                <p>DigiMark can create custom bespoke software that meets your organization’s exact needs. We’ve worked to develop a large array of tailored solutions, including:</p>
                <ul className="list-none">
                    <li>Content management systems (CMS)</li>
                    <li>Customer relationship management (CRM)</li>
                    <li>Automated invoicing</li>
                    <li>Business process automation systems</li>
                    <li>Bug tracking software</li>
                    <li>E-commerce software</li>
                    <li>Company-facing and customer-facing web portals</li>
                </ul>
                </>
            },
            {
                title: "04 Cloud-Based Development",
                 content: <>
                <p>DigiMark can create custom bespoke software that meets your organization’s exact needs. We’ve worked to develop a large array of tailored solutions, including:</p>
                <ul className="list-none">
                    <li>Content management systems (CMS)</li>
                    <li>Customer relationship management (CRM)</li>
                    <li>Automated invoicing</li>
                    <li>Business process automation systems</li>
                    <li>Bug tracking software</li>
                    <li>E-commerce software</li>
                    <li>Company-facing and customer-facing web portals</li>
                </ul>
                </>
            },
            {
                title: "05 Quality Assurance",
                 content: <>
                <p>DigiMark can create custom bespoke software that meets your organization’s exact needs. We’ve worked to develop a large array of tailored solutions, including:</p>
                <ul className="list-none">
                    <li>Content management systems (CMS)</li>
                    <li>Customer relationship management (CRM)</li>
                    <li>Automated invoicing</li>
                    <li>Business process automation systems</li>
                    <li>Bug tracking software</li>
                    <li>E-commerce software</li>
                    <li>Company-facing and customer-facing web portals</li>
                </ul>
                </>
            },
            {
                title: "06 DevOps",
                 content: <>
                <p>DigiMark can create custom bespoke software that meets your organization’s exact needs. We’ve worked to develop a large array of tailored solutions, including:</p>
                <ul className="list-none">
                    <li>Content management systems (CMS)</li>
                    <li>Customer relationship management (CRM)</li>
                    <li>Automated invoicing</li>
                    <li>Business process automation systems</li>
                    <li>Bug tracking software</li>
                    <li>E-commerce software</li>
                    <li>Company-facing and customer-facing web portals</li>
                </ul>
                </>
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
    <div className={`flex direction-column ${style.bespoke_wrapper}`}>
        <div className="container flex justify-between">
            <div className={`section_title ${style.bespoke_wrapper_title}`} data-aos="fade-right" data-aos-duration="1000">
                <h2>What <span>Bespoke Software</span> Development <span>Services</span> Do We Offer?</h2>
            </div>
            <div className={`section_title ${style.bespoke_wrapper_title}`} data-aos="fade-right" data-aos-duration="1000">
                <p>We are dedicated to developing the best bespoke software solutions, no matter what form it may take. As such, some of our bespoke software services include:</p>
            </div>
            </div>
            <div className="container flex items-start">
                <div className={style.bespoke_Img}>
                    <Image src="/assets/images/services/bespoke_service_img.jpg" width={656} height={599} alt='bespokeImg' />
                </div>
               <div className={style.bespoke_accordion}>
                   <div className="flex faq_wrapper_content bespoke_service" data-aos="fade-left" data-aos-duration="1000">
                        <Faq
                            data={data}
                            styles={styles}
                            config={config}
                        />
                    </div>
                   <p>So, whether you need mobile application development, a QA platform, cloud-based solutions, or something else, you’ll find the perfect solution as part of Develux’s bespoke software development services.</p>
               </div>
        </div>
    </div>
  );
}
