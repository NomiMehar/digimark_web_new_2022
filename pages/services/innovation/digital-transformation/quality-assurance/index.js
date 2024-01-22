import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../mobility/android-app-development/faq/Faqs'
import SubBanner from "./sub-banner/SubBanner";
import AdvantagesQualityAssurance from "./advantages-quality-assurance/AdvantagesQualityAssurance";
import ServicesQualityAssurance from "./services-quality-assurance/ServicesQualityAssurance";
import CallToQualityAssurance from "./callto-quality-assurance/CallToQualityAssurance";
import TestQualityAssurance from "./test-quality-assurance/TestQualityAssurance";
import UseQualityAssurance from "./use-quality-assurance/UseQualityAssurance";
import ProcessQualityAssurance from "./process-quality-assurance/ProcessQualityAssurance";
import bannerSideImage from "../../../../../public/assets/images/services/qa_banner_image.png"
import WorkQualityAssurance from "./work-quality-assurance/WorkQualityAssurance";

export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
       <MobilityBanner classes="web_app_banner"
           dynamicBanner={true}
           breadcrumParent="Innovation"
           breadcrumChild="QA & Testing"
           bannerTitle={[
               <span><strong>Software Quality Assurance</strong></span>,  <br/> ," & Testing Services"
           ]}
           bannerTextWrap={[
               <p>Deliver a solid customer experience with software that works <span>flawlessly</span>. This means: <span>solid performance, no bugs,</span> and <span>no security issues</span>. Add QA engineers to your team and scale your testing environment.</p>,
           ]}
           dynamicCTA={true}
           ctaText="Let’s Talk About Your Project"
           SideImage={true}
           bannerSideImage={bannerSideImage}
       />
       <SubBanner/>
       <AdvantagesQualityAssurance/>
       <ServicesQualityAssurance/>
       <CallToQualityAssurance
           title={["Let DIGI",<span>MARK</span>," write Your Success Story"]}
           description={[<p>DigiMark Developers can be your product’s bodyguard against bugs, quality’s vanguard, and reputation’s safeguard with our tested and proven Quality Assurance Services that bring the drive!</p>]}

       />
       <TestQualityAssurance/>
       <UseQualityAssurance/>
       <ProcessQualityAssurance/>
       <WorkQualityAssurance/>
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
