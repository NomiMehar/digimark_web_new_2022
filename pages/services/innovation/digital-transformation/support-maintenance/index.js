import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../mobility/android-app-development/faq/Faqs'
import WhyDigi from "./why-digi/WhyDigi";
import BenefitsSupport from "./benefits-support/BenefitsSupport";
import CallToQualityAssurance from "../quality-assurance/callto-quality-assurance/CallToQualityAssurance";
import PortfolioProducts from "../product-development/portfolio-of-products/PortfolioProducts";
import maintenanceSupportList from "./benefits-support/maintenanceSupportList.json";
import PerksOfWorking from "../../mobility/android-app-development/perks-of-working/PerksOfWorking";
import MaintenanceSupport from "./maintenance-support/MaintenanceSupport";
import ApproachSupport from "./approach-support/ApproachSupport";
import bannerSideImage from "../../../../../public/assets/images/services/support_banner_bg.png";

export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
       <MobilityBanner classes="support_app_banner"
           dynamicBanner={true}
           breadcrumParent="Innovation"
           breadcrumChild="Support & Maintenance"
           bannerTitle={["Software ", <br/>,
               <span><strong>Support & Maintenance</strong></span>
           ]}
           bannerTextWrap={[
               <p>If you want to further scale your project, implement new features, or update legacy code with modern technologies, our <span>Customer Care department</span> is ready to help. Our application maintenance & support services have been created to improve and extend the lifetime of your solution.</p>,
           ]}
           SideImage={true}
           dynamicCTA={true}
           ctaText="Request a free qoute"
           bannerSideImage={bannerSideImage}
       />
       <WhyDigi/>
       <BenefitsSupport/>
       <CallToQualityAssurance
           classes="secondshapeofcall"
           title={["Are you looking for application ",<span>maintenance and support</span>," experts? Let them assess your project now."]}
       />
       <PerksOfWorking
           imageProp={false}
           data={maintenanceSupportList}
           classes="ios_perks"
           exclass="support_wrapper"
           newTitle={[<h2>What we do in Software <span>Support & Maintenance</span></h2>]}
           newDescription={[<p>We offer full-featured supplemental services to build agile solutions that offer continuous and flexible support to build the right bridge between software development and business operations.</p>]}
           activeImage={true}
       />
       <MaintenanceSupport/>
       <ApproachSupport/>
       <PortfolioProducts/>
       <Faqs/>
       <GetQuote/>
    </div>
  </>
  )
}
