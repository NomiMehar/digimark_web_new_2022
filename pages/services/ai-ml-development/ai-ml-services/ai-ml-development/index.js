import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from '../../../../../public/assets/images/services/augmentation.svg'
import WhyChoose from '../../../innovation/mobility/android-app-development/why-choose/WhyChoose'
import dataAIMLLists from '../../../innovation/mobility/android-app-development/why-choose/aiMlLists.json'
import WalletCaseStudy from '../../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/WalletCaseStudy'
import WalletCaseStudyList from '../../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/walletCaseStudyList.json'
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
                breadcrumParent="Innovation"
                breadcrumChild="AI & ML Development"
                bannerTitle={[
                    <span>
                    <strong>AI & ML</strong>
                </span>, <br />,
                    "Development"                 
                ]}
                    dynamicCTA={true}
                    ctaText="Let’s Talk About Your Project"
                    SideImage={true}
                    bannerSideImage={bannerSideImage}
                bannerTextWrap={[
                    <p>In an era where technological advancements are shaping the future, our dedicated team of experts harnesses the power of AI and Machine Learning to drive innovation, efficiency, and growth for businesses across various industries.</p>,
    ]}/>
    <Overview
                    overviewTitle="AI & ML Development"
                    overviewDescription="Today Artificial Intelligence and Machine Learning are the most accelerators of every aspect of a business, from Chatbots being set up to help businesses to AI-driven platforms being bound to automate sales processes. The field of AI has made machines intelligent, self-reliant, and far more imaginative than people ever thought they could be."
                    overViewList={alMlOverViewList}
                    classesProp="skin-layout"
                />
                <Challenge />
    <WhyChoose
                whyChooseList={dataAIMLLists}
                aiMl={true}
                appName="Data Engineering"
                para="At DigiMark Developers, one of the top AI and machine learning specialists, we bring the future to your fingertips with cutting-edge AI and machine learning engineering solutions."
                ionicShow={true}
                classesProp="ai_ml"
            />
            <WalletCaseStudy
                class="data-engineering"
                WalletCaseStudyList={WalletCaseStudyList}
            />
            <ApproachSupport/>
            <ToolsTechnologies  toolsTechnologiesList={technologiesList} />
            <NftWhyChoose description="DigiMark Developers needs to be your first choice as we have experts who develop full-cycle games of any industry. Following are the reasons you should contact us"  classes="cycle_choose" />
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
