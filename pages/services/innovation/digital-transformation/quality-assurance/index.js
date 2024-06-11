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
               <p>Elevate the software development process with our advanced <span>QA & Testing services</span> at <span>DigiMark Developers.</span> Our team ensures seamless code deployment, and <span>streamlined development cycles</span>, all delivered quickly and precisely.</p>,
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
           description={[<p>We ensure the protection of your product from bugs, maintain the highest quality standards, and safeguard your brand's reputation. Our trusted and reliable Quality Assurance Services drive excellence.</p>]}

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
