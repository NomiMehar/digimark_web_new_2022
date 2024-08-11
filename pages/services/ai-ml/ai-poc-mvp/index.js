import React from 'react'
import Faqs from '../../innovation/mobility/android-app-development/faq/Faqs'
import GetQuote from '../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import WalletCaseStudy from '../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/WalletCaseStudy'
import WalletCaseStudypocList from '../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/walletCaseStudyPocList.json'
import HiringModal from './hiring-modals/HiringModal'
import Overview from '../../innovation/mobility/android-app-development/app-overview/Overview'
import augmentOverViewList from '../../innovation/mobility/android-app-development/app-overview/augmentOverViewList.json'
import Steps from './Steps/Steps'
export default function index() {
    const aiPocFaqs = {
        rows: [
            {
                title: "To protect the privacy of my Android app idea, will we sign an NDA?",
                content: `Indeed, we value secrecy greatly and would be happy to sign a non-disclosure agreement (NDA) on your behalf to guarantee that your app idea stays private.`,
            },
            {
                title: "How much does it cost to create an Android application?",
                content: `The price of an Android app development service varies according to the features, level of complexity, and amount of time needed to create the app just right. For every job, we provide a unique quote that takes these things into account. It's appropriate for you to contact us at any moment if you'd want additional information about our offerings or app development; we'd be pleased to assist you in this way.`,
            },
            {
                title: "Do you offer Android app maintenance support?",
                content: `Yes, we offer all Android app users comprehensive maintenance and support services. Our team of professionals is constantly on hand to ensure that your app functions properly and doesn't cause you any trouble. To meet your needs and financial constraints, we provide a range of maintenance options. Are you curious about the plans? Get in touch with DigiMark Developers right now to get your app off to the ideal start.`,
            },
            {
                title: "Will you help me with my Google Play store app?",
                content: `DigiMark Developers should be your first choice when selecting the finest app development company since we constantly provide support for app deployment on the Google Play store and can help you at every stage of the process to ensure efficient and successful outcomes. Please feel free to discuss any worries or problems you may be having; our support staff will be pleased to assist you. We guarantee complete pleasure and prompt assistance for our clients.`,
            },
            {
                title: "Will there be any maintenance and support services provided after launch?",
                content: `Yes, we provide post-launch support and maintenance services to guarantee that your app keeps working properly and is current with security requirements and the newest technology—both of which are vital. Since we recognise how crucial it is to keep an app operating well for your company, our team of professionals will collaborate with you to fix any problems or bugs that may surface after launch.`,
            }
        ],
        
    };
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
    <Faqs data={aiPocFaqs} />
    <GetQuote/>
    </div>
  </>
  )
}
