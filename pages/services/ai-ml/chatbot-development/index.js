import React from 'react'
import GetQuote from '../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from '../../../../public/assets/images/services/augmentation.svg'
import WalletCaseStudy from '../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/WalletCaseStudy'
import WalletCaseStudyList from '../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/walletCaseStudyList.json'
import chatBotOverViewList from '../../innovation/mobility/android-app-development/app-overview/chatBotOverViewList.json'
import Overview from '../../innovation/mobility/android-app-development/app-overview/Overview'
import MaintenanceServices from './maintenance-services/MaintenanceServices'
import DevelopmentProcess from '../../innovation/mobility/android-app-development/development-process/DevelopmentProcess'
import chatBotList from '../../innovation/mobility/android-app-development/development-process/chatBotList.json'
import NftWhyChoose from './nft-why-choose/NftWhyChoose'
import Technologies from './technologies/Technologies'
import CoreValue from './core-value/CoreValue'
export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="augmentation_banner"
                dynamicBanner={true}
                breadcrumParent="AI & ML"
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
                    <p> Boost customer engagement, and streamline communication using predictive intelligence and analytics. Our chatbots enhance and improve the customer journey, provide 24/7 automated support, and help to build a customer ecosystem.</p>,
    ]}/>
    <Overview
                    overviewTitle="Chatbot Development"
                    overviewDescription="We create intelligent & voice assistant chatbots that easily access and use customer interaction data. Solutions that are customer-focused by using natural language understanding (NLU), which understands customer experience quickly."
                    overViewList={chatBotOverViewList}
                    classesProp="skin-layout"
                />
            <MaintenanceServices />
            {/* <CoreValue/> */}
            <WalletCaseStudy
                class="data-engineering"
                WalletCaseStudyList={WalletCaseStudyList}
            />
            <NftWhyChoose className="nft_choose"
            />
            <Technologies/>
           <DevelopmentProcess
                appName={["How We ", <span>Work?</span>]}
                DevelopmentProcessList={chatBotList}
                name="While building a chatbot, we prioritize business goals, automate tasks across channels, and ensure a natural conversation flow to meet client expectations for tone, tasks, and implementation."
            />
            
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
