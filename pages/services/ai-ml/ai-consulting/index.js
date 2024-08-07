import React from 'react'
import GetQuote from '../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from './faq/Faqs'
import bannerSideImage from '../../../../public/assets/images/services/augmentation.svg'
import WhyChoose from '../../innovation/mobility/android-app-development/why-choose/WhyChoose'
import aiConsultingServices from '../../innovation/mobility/android-app-development/why-choose/aiConsultingServicesList.json'
import Overview from '../../innovation/mobility/android-app-development/app-overview/Overview'
import aiConsultingOverViewList from '../../innovation/mobility/android-app-development/app-overview/aiConsultingOverViewList.json'
import CoreValues from './core-value/CoreValue'
import WebAppServices from './webapp-services/WebAppServices'
export default function index() {
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
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
