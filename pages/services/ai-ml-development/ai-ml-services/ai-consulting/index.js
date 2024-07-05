import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from '../../../../../public/assets/images/services/augmentation.svg'
import WhyChoose from '../../../innovation/mobility/android-app-development/why-choose/WhyChoose'
import aiConsultingServices from '../../../innovation/mobility/android-app-development/why-choose/aiConsultingServicesList.json'
import Overview from '../../../innovation/mobility/android-app-development/app-overview/Overview'
import aiConsultingOverViewList from '../../../innovation/mobility/android-app-development/app-overview/aiConsultingOverViewList.json'
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
                    
                    "AI "  ,<span>
                    <strong>Consulting</strong>
                </span>               
                ]}
                    dynamicCTA={true}
                    ctaText="Let’s Talk About Your Project"
                    SideImage={true}
                    bannerSideImage={bannerSideImage}
                bannerTextWrap={[
                    <p>Leverage our AI consulting to unlock operational excellence and product innovation. We tailor AI strategies to your needs, guiding you from demystifying AI to implementing transformative solutions that deliver real business results. We guide you through every step of your AI journey.</p>,
    ]}/>
    <Overview
                    overviewTitle="AI Consulting"
                    overviewDescription="AI consulting offers tailored approaches that align with client demand and goals. Our experts help businesses to understand the value and risks, capabilities needed for your organization to adopt and scale AI."
                    overViewList={aiConsultingOverViewList}
                    classesProp="gray-layout"
                />
    <WhyChoose
                whyChooseList={aiConsultingServices}
                aiConsulting={true}
                appName="AI consulting services"
                para="At DigiMark Developers, one of the top AI and machine learning specialists, we bring the future to your fingertips with cutting-edge AI and machine learning engineering solutions."
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
