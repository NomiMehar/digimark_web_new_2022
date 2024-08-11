import React from 'react'
import GetQuote from'../../../../components/get-quote/GetQuote'
import MobilityBanner from'../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from'../../../../public/assets/images/services/augmentation.svg'
import WhyChoose from'../../innovation/mobility/android-app-development/why-choose/WhyChoose'
import dataAIMLLists from'../../innovation/mobility/android-app-development/why-choose/aiMlLists.json'
import WalletCaseStudy from'../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/WalletCaseStudy'
import WalletCaseStudyAiMlDev from'../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/WalletCaseStudyAiMlDevList.json'
import ApproachSupport from './approach-support/ApproachSupport'
import alMlOverViewList from'../../innovation/mobility/android-app-development/app-overview/alMlOverViewList.json'
import Overview from'../../innovation/mobility/android-app-development/app-overview/Overview'
import Challenge from './challenge-solve/Challenge'
import ToolsTechnologies from './tools-technologies/ToolsTechnologies'
import NftWhyChoose from './nft-why-choose/NftWhyChoose'
import technologiesList from './tools-technologies/ToolsTechnologiesList.json'
export default function index() {
    const aiMlFaqs = {
        rows: [
            {
                title: "What are services for AI and ML development?",
                content: `The creation of artificial intelligence and machine learning solutions suited to particular business requirements is the focus of AI & ML development services. These services improve automation, decision-making, and overall efficiency by creating predictive models, integrating AI/ML technology, and constructing algorithms.`,
            },
            {
                title: "What will artificial intelligence (AI) do for my business?",
                content: `Using these methods can be hugely beneficial for your organization by automating repetitive tasks, gleaning data insights from existing data sets, enhancing predictive capabilities, offering personalized customer recommendations ,and streamlining operations.`,
            },
            {
                title: "Which industries will benefit most from AI/ML solutions?",
                content: `AI and ML solutions can be employed across diverse sectors such as manufacturing, logistics, health care services provision finance as well as retailing due to their versatility. In every enterprise there is a possibility of utilizing AI/ML for creating customized applications like supply chain optimization systems detection of fraudulence or performing predictive analysis.`,
            },
            {
                title: "What is the duration required to develop an AI/ML solution?",
                content: `The timeframe that it takes to develop an AI/ML solution depends upon the project’s complexity’ availability of data’, 'required features’. Usually for two weeks till several months. Working together, we develop a reasonable schedule that takes into account your unique requirements.`,
            },
            {
                title: "In AI/ML initiatives, how can you guarantee the security of our data?",
                content: `We put strong safeguards in place, such as encryption, access controls, and frequent security audits, because we value data security. Our development method complies with regulatory regulations and industry best practices to safeguard your confidential data during the course of an AI/ML project.`,
            }
        ],
    };
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
    <Faqs data={aiMlFaqs} />
    <GetQuote/>
    </div>
  </>
  )
}
