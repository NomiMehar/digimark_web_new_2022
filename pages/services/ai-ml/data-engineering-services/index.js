import React from 'react'
import GetQuote from '../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from './faq/Faqs'
import bannerSideImage from '../../../../public/assets/images/services/augmentation.svg'
import WhyChoose from '../../innovation/mobility/android-app-development/why-choose/WhyChoose'
import dataEngineringLists from '../../innovation/mobility/android-app-development/why-choose/dataEngineringList.json'
import WalletCaseStudy from '../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/WalletCaseStudy'
import WalletCaseStudyDataList from '../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/walletCaseStudyDataEngList.json'
import HiringModal from './hiring-modals/HiringModal'
import ApproachSupport from './approach-support/ApproachSupport'
export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="augmentation_banner"
                dynamicBanner={true}
                breadcrumParent="AI & ML"
                breadcrumChild="Data Engineering Services"
                bannerTitle={[
                    "Get Professional ",
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
                    <p>Access the potential of your data by utilizing expert data engineering services. Our specialists will optimize your data flow, guaranteeing precise analysis that guides intelligent choices and speeds up your company's expansion.</p>,
    ]}/>
    <WhyChoose
                whyChooseList={dataEngineringLists}
                dataEngineering={true}
                appName="Data Engineering"
                para="We build robust, scalable data pipelines for smooth integration, processing, and analysis that boosts company performance using cutting-edge data engineering techniques and technologies."
                ionicShow={true}
                classesProp="data_engineering"
            />
            <HiringModal/>
            <ApproachSupport/>
            <WalletCaseStudy
                class="data-engineering"
                WalletCaseStudyList={WalletCaseStudyDataList}
            />
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
