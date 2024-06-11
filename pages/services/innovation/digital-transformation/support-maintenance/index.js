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
               <p>Scale your project with our dedicated Support team for any type of project expansion, feature integration, or technology upgrades. 
               Our <span>maintenance and support services</span> are basically designed to enhance and prolong the lifespan of your solution.
               </p>,
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
           newDescription={[<p>We provide a wide array of additional services that enable the creation of agile solutions, delivering continuous & flexible support to establish a seamless connection between software development & the operational aspects of the business.</p>]}
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
