import React from 'react'
import GetQuote from '../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from './faq/Faqs'
import bannerSideImage from '../../../../public/assets/images/services/augmentation.svg'
import WalletCaseStudy from '../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/WalletCaseStudy'
import WalletCaseStudyChatbotList from '../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/WalletCaseStudyChatbotsList.json'
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
                    "Creation of ",
                    <span>
                    <strong>Chatbots</strong>
                </span>              
                ]}
                    dynamicCTA={true}
                    ctaText="Let’s Talk About Your Project"
                    SideImage={true}
                    bannerSideImage={bannerSideImage}
                bannerTextWrap={[
                    <p>Predictive intelligence and analytics can be used to improve customer engagement and expedite communication. Our chatbots help create a customer ecosystem, offer automated service around-the-clock, and improve the customer journey.Predictive intelligence and analytics can be used to improve customer engagement and expedite communication. Our chatbots help create a customer ecosystem, offer automated service around-the-clock, and improve the customer journey.</p>,
    ]}/>
    <Overview
                    overviewTitle="Chatbot Development"
                    overviewDescription="We develop voice-activated and intelligent chatbots that can readily access and utilise client interaction data. Natural language understanding (NLU) can be utilised to provide customer-focused solutions by rapidly understanding the customer experience."
                    overViewList={chatBotOverViewList}
                    classesProp="skin-layout"
                />
            <MaintenanceServices />
            {/* <CoreValue/> */}
            <WalletCaseStudy
                class="data-engineering"
                WalletCaseStudyList={WalletCaseStudyChatbotList}
            />
            <NftWhyChoose className="nft_choose"
            />
            <Technologies/>
           <DevelopmentProcess
                appName={["Our Methods of ", <span>Operation?</span>]}
                DevelopmentProcessList={chatBotList}
                name="In order to match customer expectations for tone, tasks, and execution, we prioritise business goals, automate tasks across channels, and guarantee a natural conversation flow while designing a chatbot."
            />
            
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
