import React from 'react'
import Faqs from './faq/Faqs'
import GetQuote from '../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import WalletCaseStudy from '../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/WalletCaseStudy'
import WalletCaseStudypocList from '../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/walletCaseStudyPocList.json'
import HiringModal from './hiring-modals/HiringModal'
import Overview from '../../innovation/mobility/android-app-development/app-overview/Overview'
import augmentOverViewList from '../../innovation/mobility/android-app-development/app-overview/augmentOverViewList.json'
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
                    <p>While since the mid-2010s, digital transformation has been a fundamental growth idea for startups and SMBs, firms that have been sluggish to adopt it have been rudely awakened by the rapid advancements in artificial intelligence (AI) and machine learning (ML) technology.</p>,
    ]}/>
    <Overview
                    overviewTitle="A Brief"
                    overviewDescription="You can validate the concept early in the development process by developing a Proof of Concept (PoC) for your AI or ML product. The R&D phase's AI and ML professionals help you plan your product development based on data rather than guesswork. Also, it guarantees a good return on investment and wiser choices for your project."
                    overViewList={augmentOverViewList}
                    classesProp="skin-layout"
                />
            <Steps/>
            <HiringModal/>
            <WalletCaseStudy
                class="data-engineering"
                WalletCaseStudyList={WalletCaseStudypocList}
            />
    <Faqs
    />
    <GetQuote/>
    </div>
  </>
  )
}
