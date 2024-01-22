import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../mobility/android-app-development/faq/Faqs'
import BenefitsEsd from "./benefits-esd/BenefitsEsd";
import processSupportList from "./processSupportList.json";
import PerksOfWorking from "../../mobility/android-app-development/perks-of-working/PerksOfWorking";
import PortfolioEsd from "./portfolio-esd/PortfolioEsd";
import ServeEsd from "./serve-esd/ServeEsd";
import CallToQualityAssurance from "../quality-assurance/callto-quality-assurance/CallToQualityAssurance";
import LeadingEnterprises from "../web-development/leading-enterprises/LeadingEnterprises";
import bannerSideImage from "../../../../../public/assets/images/services/enterprice_banner_bg.png"
import EnterpriseServices from "./enterprise-services/EnterpriseServices";
import EnterpriseTool from "./enterprise-tools/EnterpriseTool";

export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="web_app_banner"
        dynamicBanner={true}
        breadcrumParent="Innovation"
        breadcrumChild="Enterprise Software Development"
        bannerTitle={[
            "Enable your business with",
            <span>
                <strong>Enterprise Software Development</strong>
            </span>
        ]}
                    dynamicCTA={true}
                    ctaText="REQUEST A FREE QUOTE"
        SideImage={true}
        bannerSideImage={bannerSideImage}
        bannerTextWrap={[
            <p>Leveraging our decade-long expertise in <span>enterprise software development</span>, we develop and deliver next-generation enterprise applications to streamline your business processes and enhance customer experience.</p>,
        ]}
    />
    <LeadingEnterprises
        extraClass="enterprise_bg"
    />
    <BenefitsEsd/>
    <EnterpriseServices/>
    <EnterpriseTool/>
    <ServeEsd/>
    <CallToQualityAssurance
       title={["Are you looking for " ,<span>Enterprise Software?</span>," Let give us your project now."]}
       classes="enterprise_bg"
    />
    <PerksOfWorking
       imageProp={false}
       data={processSupportList}
       classes="ios_perks"
       exclass="process_enter_wrapper"
       newTitle={[<h2>Our <span>Enterprise Software Development</span> Process</h2>]}
       newDescription={[<p>We offer the best practices and full cycle enterprise software development solutions in a structured and systematic way. We start with deep analysis of business requirements and nurture the relationship with post-launch support and maintenance.</p>]}
    />
    <PortfolioEsd/>
    <Faqs
        extraClass="bgColor"
    />
    <GetQuote
        classProp="chnageBgColor"
    />
    </div>
  </>
  )
}
