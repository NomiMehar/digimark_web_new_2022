import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import Steps from './Steps/Steps'
import CoreValue from './core-value/CoreValue'
import PerksOfWorking from './perks-of-working/PerksOfWorking'
import DevelopmentProcess from '../../../innovation/mobility/android-app-development/development-process/DevelopmentProcess'
import aiJorneyList from '../../../innovation/mobility/android-app-development/development-process/aiJorneyList.json'

export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="computer-vision"
                dynamicBanner={true}
                breadcrumParent="AI & ML"
                breadcrumChild="Computer Vision"
                bannerTitle={[
                   <span>
                    <strong>Computer Vision</strong>
                </span>," Services"               
                ]}
                    dynamicCTA={true}
                    ctaText="Let’s Talk About Your Project"
                bannerTextWrap={[
                    <p>At DigiMark Developers, we offer a wide range of computer vision services and solutions customized to meet the unique needs of businesses in a variety of industries. Whether you need security systems, autonomous vehicles, medical image analysis, facial identification, and manufacturing quality control, video recognition. Our team of experienced experts has the knowledge and expertise to help you achieve your goals.</p>,
    ]}/>
            <Steps/>
            <PerksOfWorking />
            <CoreValue/>
            <DevelopmentProcess
                appName={["A ", <span>development process</span>, " that brings AI results in weeks, not years"]}
                DevelopmentProcessList={aiJorneyList}
            />
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
