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
import serviceList from "./enterprise-services/enterpriseServicesList.json"
export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="web_app_banner"
        dynamicBanner={true}
        breadcrumParent="Innovation"
        breadcrumChild="Enterprise Software Development"
        bannerTitle={[
            "Empower your business with",
            <span>
                <strong>Enterprise Software Development</strong>
            </span>
        ]}
                    dynamicCTA={true}
                    ctaText="REQUEST A FREE QUOTE"
        SideImage={true}
        bannerSideImage={bannerSideImage}
        bannerTextWrap={[
            <p>Leveraging our expertise in <span>enterprise software development,</span> we are dedicated to developing and delivering innovative enterprise applications to streamline your business operations and enhance customer experience.</p>,
        ]}
    />
    <LeadingEnterprises
        extraClass="enterprise_bg"
    />
    <BenefitsEsd/>
    <EnterpriseServices
       etitle={[
        <h2>What we do in <span>Enterprise Application Development</span></h2>
       ]}
       edescription="Maximize operational efficiency with cutting-edge enterprise software development"
       enterpriseServicesList={serviceList}
       />
    <EnterpriseTool/>
    <ServeEsd description="With our deep industry knowledge, we cater to a wide range of sectors, providing customized solutions that perfectly align with specific business requirements."/>
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
       newDescription={[<p>Our approach to enterprise development encompasses industry best practices & a comprehensive, step-by-step process. We begin by thoroughly analyzing business requirements & continue to provide ongoing support & maintenance to foster long-lasting partnerships.</p>]}
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
