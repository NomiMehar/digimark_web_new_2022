import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from '../../../../../public/assets/images/services/augmentation.svg'
import WhyChoose from '../../../innovation/mobility/android-app-development/why-choose/WhyChoose'
import dataEngineringLists from '../../../innovation/mobility/android-app-development/why-choose/dataEngineringList.json'
import WalletCaseStudy from '../../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/WalletCaseStudy'
import WalletCaseStudyList from '../../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/walletCaseStudyList.json'
import HiringModal from './hiring-modals/HiringModal'
import ApproachSupport from './approach-support/ApproachSupport'
export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="augmentation_banner"
                dynamicBanner={true}
                breadcrumParent="Innovation"
                breadcrumChild="Data Engineering Services"
                bannerTitle={[
                    <span>
                    <strong>Data Engineering</strong>
                </span>, <br />,
                    "Services"                 
                ]}
                    dynamicCTA={true}
                    ctaText="Let’s Talk About Your Project"
                    SideImage={true}
                    bannerSideImage={bannerSideImage}
                bannerTextWrap={[
                    <p>In the modern business landscape, data is often referred to as the new oil, and rightly so. However, to extract its true value, companies require robust data engineering strategies.</p>,
    ]}/>
    <WhyChoose
                whyChooseList={dataEngineringLists}
                dataEngineering={true}
                appName="Data Engineering"
                para="At DigiMark Developers, we offer a wide range of Data Engineering services that cater to every stage of your data journey."
                ionicShow={true}
                classesProp="data_engineering"
            />
            <HiringModal/>
            <ApproachSupport/>
            <WalletCaseStudy
                class="data-engineering"
                WalletCaseStudyList={WalletCaseStudyList}
            />
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
