import React from 'react'
import GetQuote from '../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from '../../../../public/assets/images/services/augmentation.svg'
import WhyChoose from '../../innovation/mobility/android-app-development/why-choose/WhyChoose'
import dataEngineringLists from '../../innovation/mobility/android-app-development/why-choose/dataEngineringList.json'
import WalletCaseStudy from '../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/WalletCaseStudy'
import WalletCaseStudyDataList from '../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/walletCaseStudyDataEngList.json'
import HiringModal from './hiring-modals/HiringModal'
import ApproachSupport from './approach-support/ApproachSupport'
export default function index() {
    const dataEngFaqs = {
        rows: [
            {
                title:" What is data engineering?",
                content: `In data engineering, data engineering refers to the process of conceptualizing, building and managing systems and pipelines for processing and analyzing information. It helps enable corporate insights and decision-making by ensuring that information is easily accessible for analysis.`
            },
            {
                title:"What does data engineering mean in business?",
                content: `By maintaining efficient management of huge amounts of data, it becomes possible to access accurate and timely data with ease. This facilitates competitive advantage, process optimization and making informed decisions.`
            },
            {
                title:"Which tools and technologies are used in data engineering?",
                content: `Our Data Solutions are designed using different tools and technologies such as SQL databases, cloud platforms like AWS/Azure, Apache Hadoop, Apache Spark, Talend and Apache NiFi which ensure their scalability.`
            },
            {
                title:"How can you guarantee data quality and security?",
                content: `Data integrity maintenance requires industry compliance audits because there are various quality assurance checks on our data validation processes as well as security measures involving encryption that we conduct.`
            },
            {
                title:"Can you integrate data engineering solutions with existing systems?",
                content: `Yes, our solutions are created to smoothly blend with your current systems and infrastructure. We guarantee that new and old systems work well together, improving data management without interrupting current operations.`
            }
        ],
    };
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
    <Faqs data={dataEngFaqs} />
    <GetQuote/>
    </div>
  </>
  )
}
