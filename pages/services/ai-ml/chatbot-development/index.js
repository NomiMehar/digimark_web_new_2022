import React from 'react'
import GetQuote from '../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../innovation/mobility/android-app-development/faq/Faqs'
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
// import CoreValue from './core-value/CoreValue'
export default function index() {
    const chatbotFaqs = {
        rows: [
            {
                title: "To protect the privacy of my Android app idea, will we sign an NDA?",
                content: "Indeed, we value secrecy greatly and would be happy to sign a non-disclosure agreement (NDA) on your behalf to guarantee that your app idea stays private."
            },
            {
                title: "What is the price of developing an Android app?",
                content: "The price of an Android app development service varies according to the features, level of complexity, and amount of time needed to create the app just right. For every job, we provide a unique quote that takes these things into account. It's appropriate for you to contact us at any moment if you'd want additional information about our offerings or app development; we'd be pleased to assist you in this way."
            },
            {
                title: "Do you offer Android app maintenance support?",
                content: "Yes, we offer all Android app users comprehensive maintenance and support services. Our team of professionals is constantly on hand to ensure that your app functions properly and doesn't cause you any trouble. To meet your needs and financial constraints, we provide a range of maintenance options. Are you curious about the plans? Get in touch with DigiMark Developers right now to get your app off to the ideal start."
            },
            {
                title: "Will you help me with my Google Play store app?",
                content: "DigiMark Developers should be your first choice when selecting the finest app development company since we constantly provide support for app deployment on the Google Play store and can help you at every stage of the process to ensure efficient and successful outcomes. Please feel free to discuss any worries or problems you may be having; our support staff will be pleased to assist you. We guarantee complete pleasure and prompt assistance for our clients."
            },
            {
                title: "What kind of maintenance and assistance will I receive after launch?",
                content: "Indeed, in order to ensure that your app keeps running smoothly and is current with emerging technologies and security standards, both of which are crucial. We provide post-launch support and maintenance services. Our team of professionals will collaborate with you to address any problems or defects that may develop following the launch of the app, as we recognize the value of maintaining its functionality for your business."
            }
        ]        
    };
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
            
    <Faqs data={chatbotFaqs}/>
    <GetQuote/>
    </div>
  </>
  )
}
