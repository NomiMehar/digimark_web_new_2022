import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import WalletCaseStudy from '../../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/WalletCaseStudy'
import WalletCaseStudyList from '../../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/walletCaseStudyList.json'
import HiringModal from './hiring-modals/HiringModal'
import Overview from '../../../innovation/mobility/android-app-development/app-overview/Overview'
import augmentOverViewList from '../../../innovation/mobility/android-app-development/app-overview/augmentOverViewList.json'
import Steps from './Steps/Steps'
export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="ai-poc-mvp"
                dynamicBanner={true}
                breadcrumParent="AI & ML"
                breadcrumChild="AI PoC and AI MVP"
                bannerTitle={[
                   "AI PoC and ",<br/>, <span>
                    <strong>AI MVP</strong>
                </span>               
                ]}
                    dynamicCTA={true}
                    ctaText="Let’s Talk About Your Project"
                bannerTextWrap={[
                    <p>While digital transformation has been a key growth concept for startups and SMBs since the mid-2010s, recent leaps forward in artificial intelligence (AI) and machine learning (ML) technologies have been a sharp wake-up call for companies pressing snooze on implementation.</p>,
    ]}/>
    <Overview
                    overviewTitle="Make good decisions"
                    overviewDescription="By creating a Proof of Concept (PoC) of your AI or ML product you verify the idea on an early stage of development.
                    With the AI & ML engineers engaged in the R&D phase you plan your product development on data not hypotheses. And this ensures the high ROI better decisions in your project."
                    overViewList={augmentOverViewList}
                    classesProp="skin-layout"
                />
            <Steps/>
            <HiringModal/>
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
