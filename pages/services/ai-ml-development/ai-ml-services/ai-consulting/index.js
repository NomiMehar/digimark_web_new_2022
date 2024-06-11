import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from '../../../../../public/assets/images/services/augmentation.svg'
import WhyChoose from '../../../innovation/mobility/android-app-development/why-choose/WhyChoose'
import aiConsultingServices from '../../../innovation/mobility/android-app-development/why-choose/aiConsultingServicesList.json'
import Overview from '../../../innovation/mobility/android-app-development/app-overview/Overview'
import augmentOverViewList from '../../../innovation/mobility/android-app-development/app-overview/augmentOverViewList.json'
import CoreValues from './core-value/CoreValue'
export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="augmentation_banner"
                dynamicBanner={true}
                breadcrumParent="Innovation"
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
                    <p>Machine Learning and AI consulting services have become essential for businesses looking to leverage the power of artificial intelligence and machine learning. At Kodexo Labs, one of the AI and Machine Learning Consulting Companies, we are your trusted partner in navigating this transformative journey.</p>,
    ]}/>
    <Overview
                    overviewTitle="AI Consulting"
                    overviewDescription="oday Artificial Intelligence and Machine Learning are the most accelerators of every aspect of a business, from Chatbots being set up to help businesses to AI-driven platforms being bound to automate sales processes. The field of AI has made machines intelligent, self-reliant, and far more imaginative than people ever thought they could be."
                    overViewList={augmentOverViewList}
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
            <CoreValues />
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
