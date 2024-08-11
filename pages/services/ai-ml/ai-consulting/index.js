import React from 'react'
import GetQuote from '../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from '../../../../public/assets/images/services/augmentation.svg'
import WhyChoose from '../../innovation/mobility/android-app-development/why-choose/WhyChoose'
import aiConsultingServices from '../../innovation/mobility/android-app-development/why-choose/aiConsultingServicesList.json'
import Overview from '../../innovation/mobility/android-app-development/app-overview/Overview'
import aiConsultingOverViewList from '../../innovation/mobility/android-app-development/app-overview/aiConsultingOverViewList.json'
import CoreValues from './core-value/CoreValue'
import WebAppServices from './webapp-services/WebAppServices'
export default function index() {
    const aiFaqs = {
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
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="augmentation_banner"
                dynamicBanner={true}
                breadcrumParent="AI & ML"
                breadcrumChild="AI Consulting"
                bannerTitle={[
                    <span>
                    <strong>Artificial Intelligence</strong>
                </span>," Directions"               
                ]}
                    dynamicCTA={true}
                    ctaText="Let’s Talk About Your Project"
                    SideImage={true}
                    bannerSideImage={bannerSideImage}
                bannerTextWrap={[
                    <p>Utilise our AI consultancy to foster product innovation and operational success. Our customised AI strategies help you go from demystifying AI to putting revolutionary solutions into practice that really produce tangible business results. We walk you through the entire AI process.</p>,
    ]}/>
    <Overview
                    overviewTitle="Summary"
                    overviewDescription="AI consulting provides customised strategies that meet the needs and objectives of clients. Our specialists assist companies in comprehending the benefits, hazards, and skills required for your company to implement and grow artificial intelligence."
                    overViewList={aiConsultingOverViewList}
                    classesProp="gray-layout"
                />
    <WhyChoose
                whyChooseList={aiConsultingServices}
                aiConsulting={true}
                appName="AI-Related Consulting Services"
                para="With state-of-the-art AI and machine learning engineering solutions, we at DigiMark Developers, one of the leading experts in these fields, put the future at your fingers."
                ionicShow={true}
                classesProp="data_engineering"
            />
            <WebAppServices/>
            <CoreValues />
    <Faqs data={aiFaqs}/>
    <GetQuote/>
    </div>
  </>
  )
}
