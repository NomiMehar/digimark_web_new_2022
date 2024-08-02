import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from './faq/Faqs'
import bannerSideImage from '../../../../../public/assets/images/services/augmentation.svg'
import WhyChoose from '../../../innovation/mobility/android-app-development/why-choose/WhyChoose'
import dataAIMLLists from '../../../innovation/mobility/android-app-development/why-choose/aiMlLists.json'
import WalletCaseStudy from '../../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/WalletCaseStudy'
import WalletCaseStudyAiMlDev from '../../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/WalletCaseStudyAiMlDevList.json'
import ApproachSupport from './approach-support/ApproachSupport'
import alMlOverViewList from '../../../innovation/mobility/android-app-development/app-overview/alMlOverViewList.json'
import Overview from '../../../innovation/mobility/android-app-development/app-overview/Overview'
import Challenge from './challenge-solve/Challenge'
import ToolsTechnologies from './tools-technologies/ToolsTechnologies'
import NftWhyChoose from './nft-why-choose/NftWhyChoose'
import technologiesList from './tools-technologies/ToolsTechnologiesList.json'
export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="augmentation_banner"
                dynamicBanner={true}
                breadcrumParent="AI & ML"
                breadcrumChild="AI & ML Development"
                bannerTitle={[
                    "Top-Rated ",
                    <span>
                    <strong>AI & ML</strong>
                </span>, <br />,
                    "Development Services"                 
                ]}
                    dynamicCTA={true}
                    ctaText="Let’s Talk About Your Project"
                    SideImage={true}
                    bannerSideImage={bannerSideImage}
                bannerTextWrap={[
                    <p>Find the best AI and ML development services to grow your company. We have a skillful and experienced team that gives you every option according to your choices, creating something new, and calculated results. Transform your ideas today.</p>,
    ]}/>
    <Overview
                    overviewTitle="Our AI & ML Development Services Fulfil Your Changing Requirements for Business Automation"
                    overviewDescription="Our AI & ML development services are made to adapt to your changing needs for business automation. We offer customised solutions that advance productivity and creativity while responding to your particular problems. Our knowledgeable staff makes sure your company stays ahead of the competition with everything from clever automation to predictive analytics. Boost your development with our state-of-the-art equipment. "
                    overViewList={alMlOverViewList}
                    classesProp="skin-layout"
                />
                <Challenge />
    <WhyChoose
                whyChooseList={dataAIMLLists}
                aiMl={true}
                appName="Data Engineering"
                para="Through a collaborative strategy that combines cutting-edge technology with in-depth industry knowledge, we offer AI and ML development services that maximise business impact and foster creativity."
                ionicShow={true}
                classesProp="ai_ml"
            />
            <WalletCaseStudy
                class="data-engineering"
                WalletCaseStudyList={WalletCaseStudyAiMlDev}
            />
            <ApproachSupport/>
            <ToolsTechnologies  toolsTechnologiesList={technologiesList} />
            <NftWhyChoose classes="cycle_choose" />
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
