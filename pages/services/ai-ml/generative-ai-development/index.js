import React from 'react'
import GetQuote from '../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from '../../../../public/assets/images/services/augmentation.svg'
import WhyChoose from '../../innovation/mobility/android-app-development/why-choose/WhyChoose'
import dataAIMLLists from '../../innovation/mobility/android-app-development/why-choose/genetrativeAiLists.json'
import WalletCaseStudy from '../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/WalletCaseStudy'
import WalletCaseStudyGenAiList from '../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/WalletCaseStudyGenAiList.json'
import alMlOverViewList from '../../innovation/mobility/android-app-development/app-overview/alMlOverViewList.json'
import Overview from '../../innovation/mobility/android-app-development/app-overview/Overview'
import HiringModal from './hiring-modals/HiringModal'
import ExpertiesIn from './expertise-in/ExpertiesIn'
import TechSection from './techs-section/TechSection'
import TechSectionList from './techs-section/TechSectionList.json'
import MaintenanceServices from './maintenance-services/MaintenanceServices'
import NftTechStack from './nft-tech-stack/NftTechStack'
import DevelopmentProcess from '../../innovation/mobility/android-app-development/development-process/DevelopmentProcess'
import GenAiList from '../../innovation/mobility/android-app-development/development-process/GenAiList.json'
export default function index() {
    const genFaqs = {
        rows: [
            {
                title: "What is the evolution of generative AI?",
                content: `The process of developing generative AI systems is teaching them to recognise patterns and inputs in existing data to produce new material, such as writing, graphics, or music.`,
            },
            {
                title: "How will generative AI make the company profitable?",
                content: `By creating data-guided insights that suit your firm’s needs, generative AI can foster creativity, automate content generation, deliver personalized consumer experiences and enhance decision-making.`,
            },
            {
                title: "Which industries are expected to benefit from generative AI?",
                content: `From retail, healthcare, banking, education to entertainment; both these areas could be applied with generative for innovation purposes, improved customer engagement or the optimization of procedures.`,
            },
            {
                title: "How do we ensure reliability and quality of generative AI models?",
                content: `In order to create trustworthy AI solutions, we maintain quality through stringent testing, ongoing model improvement, and validation against real-world scenarios. We also eliminate any biases and increase accuracy.`,
            },
            {
                title: "What is the typical time frame for creating a solution with generative AI?",
                content: `The complexity of the project and data amount requirements as well as customization affect the time frame. On average it may take several weeks to several months which includes planning, development as well as testing processes.`,
            }
        ],
    };
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
                    "Development Services"                 
                ]}
                    dynamicCTA={true}
                    ctaText="Let’s Talk About Your Project"
                    SideImage={true}
                    bannerSideImage={bannerSideImage}
                bannerTextWrap={[
                    <p>With the help of our generative AI development services, unlock the future. Enhance innovation, productivity, and originality with personalized AI solutions designed to meet your specific needs. </p>,
    ]}/>
    <Overview
                    overviewTitle="With Our Skilled Professionals, Launch A Generative AI Development Company"
                    overviewDescription="Make the transition to a top Creation of Generative AI firm with our knowledgeable staff. Our group provides the expertise and support needed to maximize the potential of AI, promoting effectiveness and innovation. Collaborate with us on Generative AI Development solutions customised for your company's requirements, guaranteeing a competitive advantage in the marketplace. "
                    overViewList={alMlOverViewList}
                    classesProp="skin-layout"
                />
    <WhyChoose
                whyChooseList={dataAIMLLists}
                generativeAi={true}
                appName="Generative AI Development Services"
                para="With our services for large language models and creation of generative AI, you can experience the technology of the future. Boost creativity, simplify procedures, and open up new company opportunities."
                ionicShow={true}
                classesProp="ai_ml"
            />
            <MaintenanceServices />
            <HiringModal />
            <WalletCaseStudy
                class="data-engineering"
                WalletCaseStudyList={WalletCaseStudyGenAiList}
            />
            <DevelopmentProcess
                appName={["Our Industry-Based ",<span>Generative AI</span>, " Services"]}
                name="Our industry-based Generative AI Development services provide specialised solutions that drive efficiency and creativity in response to the particular demands and difficulties faced by your industry."
                DevelopmentProcessList={GenAiList}
            />
            <NftTechStack/>
            <ExpertiesIn/>
            <TechSection
                TechSectionList={TechSectionList}
            />
    <Faqs data={genFaqs}/>
    <GetQuote/>
    </div>
  </>
  )
}
