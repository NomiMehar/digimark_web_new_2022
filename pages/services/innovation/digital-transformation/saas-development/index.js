import React from 'react'
import MobilityBanner from '../../mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from "../../mobility/android-app-development/faq/Faqs";
import GetQuote from "../../../../../components/get-quote/GetQuote";
import SaasBenefits from "./saas-benefits/SaasBenefits";
import SaasProducts from "./saas-products/SaasProducts";
import SaasServices from "./saas-services/SaasServices";
import SaasCallToAction from "./saas-call-to-action/SaasCallToAction";
import SaasProcess from "./saas-process/SaasProcess";
import TypesOfSaas from "./types-of-saas/TypesOfSaas";
import SaasIndustriesServe from "./saas-industries-serve/SaasIndustriesServe";
import ToolsTechnologies from "../web-development/tools-technologies/ToolsTechnologies";
import SaasTechnologiesList from "../web-development/tools-technologies/SaasTechnologiesList.json";
import SaasPartners from "./saas-partners/SaasPartners";
import SaasRecentWork from "./saas-recent-work/SaasRecentWork";
import bannerSideImage from "../../../../../public/assets/images/services/saas_illustration.png"

export default function index() {
  return (
    <div className="android-app-development ionic-app-dev">
      <MobilityBanner
        classes="saas_managment"
        dynamicBanner={true}
        breadcrumParent="Innovation"
        breadcrumChild="SaaS Development"
        bannerTitle={[
            <span>
                <strong>SaaS Solutions</strong></span>, <br/>, <strong> Development</strong>
        ]}
        bannerTextWrap={[
            <p>Looking for expert SaaS Dev? Get in touch with us as we build scalable apps & help in maintaining software solutions.</p>,
        ]}
        SideImage={true}
        bannerSideImage={bannerSideImage}
        dynamicCTA={true}
        ctaText="Let’s Talk About Your project"
      />
        <SaasProducts/>
        <SaasBenefits/>
        <SaasServices/>
        <SaasCallToAction/>
        <SaasProcess/>
        <TypesOfSaas/>
        <SaasIndustriesServe/>
        <ToolsTechnologies
            toolsTechnologiesList={SaasTechnologiesList}
            classes="sass_dev_bg"
        />
        <SaasPartners/>
        <SaasRecentWork/>
        <Faqs
            extraClass="bgColor"
        />
        <GetQuote
            classProp="chnageBgColor"
        />
    </div>
  )
}
