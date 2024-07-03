import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from '../../../../../public/assets/images/services/augmentation.svg'
import WhyChoose from '../../../innovation/mobility/android-app-development/why-choose/WhyChoose'
import dataAIMLLists from '../../../innovation/mobility/android-app-development/why-choose/genetrativeAiLists.json'
import WalletCaseStudy from '../../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/WalletCaseStudy'
import WalletCaseStudyList from '../../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/walletCaseStudyList.json'
import alMlOverViewList from '../../../innovation/mobility/android-app-development/app-overview/alMlOverViewList.json'
import Overview from '../../../innovation/mobility/android-app-development/app-overview/Overview'
import HiringModal from './hiring-modals/HiringModal'
import ExpertiesIn from './expertise-in/ExpertiesIn'
import TechSection from './techs-section/TechSection'
import TechSectionList from './techs-section/TechSectionList.json'
import MaintenanceServices from '../../../../support/maintenance-services/MaintenanceServices'
import NftTechStack from './nft-tech-stack/NftTechStack'
import DevelopmentProcess from '../../../innovation/mobility/android-app-development/development-process/DevelopmentProcess'
import aiJorneyList from '../../../innovation/mobility/android-app-development/development-process/aiJorneyList.json'
export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="augmentation_banner"
                dynamicBanner={true}
                breadcrumParent="AI & ML"
                breadcrumChild="Generative AI Development"
                bannerTitle={[
                    <span>
                    <strong>Generative AI</strong>
                </span>, <br />,
                    "Development"                 
                ]}
                    dynamicCTA={true}
                    ctaText="Let’s Talk About Your Project"
                    SideImage={true}
                    bannerSideImage={bannerSideImage}
                bannerTextWrap={[
                    <p>One of the top generative AI companies, specializes in providing cutting-edge Generative AI Development Services.</p>,
    ]}/>
    <Overview
                    overviewTitle="Generative AI Development"
                    overviewDescription="One of the top generative AI companies, specializes in providing cutting-edge Generative AI Development Services. By utilizing the power of innovative algorithms and our expertise in artificial intelligence and machine learning, we provide cutting-edge solutions for companies in a variety of industries."
                    overViewList={alMlOverViewList}
                    classesProp="skin-layout"
                />
    <WhyChoose
                whyChooseList={dataAIMLLists}
                generativeAi={true}
                appName="Generative AI Development Services"
                para="At DigiMark Developers, one of the top AI and machine learning specialists, we bring the future to your fingertips with cutting-edge AI and machine learning engineering solutions."
                ionicShow={true}
                classesProp="ai_ml"
            />
            <MaintenanceServices />
            <HiringModal />
            <WalletCaseStudy
                class="data-engineering"
                WalletCaseStudyList={WalletCaseStudyList}
            />
            <DevelopmentProcess
                appName={[<span>DigiMark Developers</span>, " AI journey"]}
                DevelopmentProcessList={aiJorneyList}
            />
            <NftTechStack/>
            <ExpertiesIn/>
            <TechSection
                TechSectionList={TechSectionList}
            />
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
