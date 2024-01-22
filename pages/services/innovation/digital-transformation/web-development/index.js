import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import Seamless from '../../../next-gen-tech/blockchain/tokens-and-crypto-wallets/seamless/Seamless'
import webapp_features from '../../../next-gen-tech/blockchain/tokens-and-crypto-wallets/seamless/webapp_features.json'
import WalletCaseStudy from '../../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/WalletCaseStudy'
import WalletCaseStudyList from '../../../next-gen-tech/blockchain/tokens-and-crypto-wallets/wallet-case-study/OurRecentWork.json'
import MobilityBanner from '../../mobility/android-app-development/android-app-banner/MobilityBanner'
import DevelopmentProcess from '../../mobility/android-app-development/development-process/DevelopmentProcess'
import WebDevelopmentProcessList from '../../mobility/android-app-development/development-process/WebDevelopmentProcessList.json'
import Faqs from '../../mobility/android-app-development/faq/Faqs'
import DigimarkPartners from './digimark-partners/DigimarkPartners'
import ToolsTechnologies from './tools-technologies/ToolsTechnologies'
import WebBespoke from './web-bespoke/WebBespoke'
import WebAppServices from './webapp-services/WebAppServices'
import CustomerTalks from '../../../../landingpage/CustomerTalks/CustomerTalks'
import OurProducts from '../../../../landingpage/OurProducts/OurProducts'
import IndustriesWeServe from './industries-we-serve/IndustriesWeServe'
import technologiesList from "./tools-technologies/ToolsTechnologiesList.json";
import HiringModels from "./hiring-models/HiringModels";
import ComparativeAnalysis from "./comparative-analysis/ComparativeAnalysis";

export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="web_app_banner"
        dynamicBanner={true}
        breadcrumParent="Innovation"
        breadcrumChild="Web App Development"
        bannerTitle={[
            <span>
                <strong>Web Application</strong></span>,  <br/> ," Development Company"
        ]}
                    dynamicCTA={true}
                    ctaText="Let’s Talk About Your Project"
        bannerTextWrap={[
            <p>Helping Businesses <span>build secure</span> and <span>scalable Web Applications, Portals</span> and <span>Solutions</span>.</p>,
        ]}
    />
    {/*<LeadingEnterprises/>*/}
    <DigimarkPartners/>
    <WebAppServices/>
    <Seamless seamless={false} data={webapp_features} classes="webapp_features"/>
    <WebBespoke/>
    <ToolsTechnologies
        toolsTechnologiesList={technologiesList}/>
    <DevelopmentProcess
        appName={[<span>Our Web App Development</span>, " Processes"]}
        classes="webapp_process"
        WebDevelopmentProcessList={true}
        DevelopmentProcessList={WebDevelopmentProcessList}/>
    <WalletCaseStudy class="recent_work" ourWork={true} WalletCaseStudyList={WalletCaseStudyList} />
       <HiringModels/>
       <ComparativeAnalysis/>
    <IndustriesWeServe/>
    <CustomerTalks/>
    <OurProducts/>
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
