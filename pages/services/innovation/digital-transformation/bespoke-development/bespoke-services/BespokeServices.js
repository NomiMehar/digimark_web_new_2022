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
                <p>We aim to develop customized software solutions perfectly suited to an organization's specific requirements. Our skilled team has vast experience in building solutions, including:</p>
                <ul className="list-none">
                    <li>Customer relationship management Content management systems</li>
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
                <p>We deliver the best development services tailored to your requirements. Bespoke web development enhances a business's competitive advantage, and the following are the reasons why:</p>
                <ul className="list-none">
                    <li>Effective CODE</li>
                    <li>Maximizes SEO ratings</li>
                    <li>Technical Optimization</li>
                    <li>Modern Approach</li>
                </ul>
                </>
            },
            {
                title: "03 Mobile Development",
                 content: <>
                <p>Having a mobile bespoke software development project in mind? DigiMark can help bring it to life with our team of skilled app developers.  We create highly functional mobile apps that offer a smooth, cross-platform experience. Our expertise includes:</p>
                <ul className="list-none">
                    <li>IOS (Provides seamless compatibility on iPads, Apple Watches, iMacs)</li>
                    <li>Android (Diverse range of devices)</li>
                    <li>Cross Platform (Enables flexible, simultaneous development across multiple platforms)</li>
                </ul>
                </>
            },
            {
                title: "04 Cloud-Based Development",
                 content: <>
                <p>Wish your bespoke software to be hosted in the cloud? Don't worry, we have got you covered. Our team can develop software that ensures your workforce remains productive regardless of their location or time. Here are a few advantages of opting for cloud-based bespoke software:</p>
                <ul className="list-none">
                    <li>Eliminates the need to invest in physical servers.</li>
                    <li>Seamless access to large amounts of data from any location.</li>
                    <li>The cloud is capable of handling high traffic volume without issue.</li>
                </ul>
                </>
            },
            {
                title: "05 Quality Assurance",
                 content: <>
                <p>Offering a quality Assurance Management System as one of our bespoke software development services. Our systems are:</p>
                <ul className="list-none">
                    <li>Tailored:  (Permits minimizing customer complaints)</li>
                    <li>Efficient:  (Enhances operations' productivity & ensures timely product delivery)</li>
                    <li>Risk Minimizing:  (Identifies potential risks)</li>
                    <li>Environmentally:  (Helps in risk assessment, & other features to ensure safe decision-making.)</li>
                </ul>
                </>
            },
            {
                title: "06 DevOps",
                 content: <>
                <p>DigiMark-powered DevOps offers improved communication, quality assurance, robust security, & faster service deployment. Our services include:</p>
                <ul className="list-none">
                    <li>Database management</li>
                    <li>Deploying</li>
                    <li>Containerization</li>
                    <li>CI/CD pipeline automation</li>
                    <li>Cloud migration</li>
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
                <p>Our commitment is to develop top-quality and best bespoke Custom Web Application Development software solutions, in whatever shape they may come. These services include:</p>
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
