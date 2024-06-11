import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from '../../../../../public/assets/images/services/augmentation.svg'
import WalletCaseStudy from '../../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/WalletCaseStudy'
import WalletCaseStudyList from '../../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/walletCaseStudyList.json'
import alMlOverViewList from '../../../innovation/mobility/android-app-development/app-overview/alMlOverViewList.json'
import Overview from '../../../innovation/mobility/android-app-development/app-overview/Overview'
import MaintenanceServices from './maintenance-services/MaintenanceServices'
import DevelopmentProcess from '../../../innovation/mobility/android-app-development/development-process/DevelopmentProcess'
import aiJorneyList from '../../../innovation/mobility/android-app-development/development-process/aiJorneyList.json'
import NftWhyChoose from './nft-why-choose/NftWhyChoose'
import Technologies from './technologies/Technologies'
import CoreValue from './core-value/CoreValue'
export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="augmentation_banner"
                dynamicBanner={true}
                breadcrumParent="Innovation"
                breadcrumChild="Chatbot Development"
                bannerTitle={[
                    <span>
                    <strong>Chatbot</strong>
                </span>, <br />,
                    "Development"                 
                ]}
                    dynamicCTA={true}
                    ctaText="Let’s Talk About Your Project"
                    SideImage={true}
                    bannerSideImage={bannerSideImage}
                bannerTextWrap={[
                    <p>We’re interacting with chatbots day in and day out. These virtual assistants can accelerate every task they take on, from personalized support to lead generation, sales, onboarding, and more. And best of all – they’re not overly chatty (unlike some people).</p>,
    ]}/>
    <Overview
                    overviewTitle="Chatbot Development"
                    overviewDescription="one of the top generative AI companies, specializes in providing cutting-edge Generative AI Development Services. By utilizing the power of innovative algorithms and our expertise in artificial intelligence and machine learning, we provide cutting-edge solutions for companies in a variety of industries."
                    overViewList={alMlOverViewList}
                    classesProp="skin-layout"
                />
            <MaintenanceServices />
            <CoreValue/>
            <WalletCaseStudy
                class="data-engineering"
                WalletCaseStudyList={WalletCaseStudyList}
            />
            <NftWhyChoose className="nft_choose"
            />
            <Technologies/>
           <DevelopmentProcess
                appName={[<span>DigiMark Developers</span>, " AI journey"]}
                DevelopmentProcessList={aiJorneyList}
            />
            
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
