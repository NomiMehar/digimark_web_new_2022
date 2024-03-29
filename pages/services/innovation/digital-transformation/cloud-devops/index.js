import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../mobility/android-app-development/faq/Faqs'
import Logos from "./logos/Logos";
import AboutCloud from "./about-cloud/AboutCloud";
import CloudBenefits from "./cloud-benefits/CloudBenefits";
import CloudServices from "./cloud-services/CloudServices";
import CloudPlatforms from "./cloud-platforms/CloudPlatforms";
import CloudDevProcess from "./cloud-dev-process/CloudDevProcess";
import CloudFeaturedWork from "./cloud-featured-work/CloudFeaturedWork";
import LeadingEnterprises from "../web-development/leading-enterprises/LeadingEnterprises";
import Journey from "./journey/Journey";

export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="cloud_banner_wrapper"
        dynamicBanner={true}
        breadcrumParent="Innovation"
        breadcrumChild="Cloud & DevOps"
        bannerTitle={[
            <span>
                <strong>Cloud & DevOps</strong>
            </span>,  <br/> ," Services"
        ]}
        bannerTextWrap={[
            <p><span>DigiMark Developers</span> provides optimized architecture, streamlines operations, and alleviates downtime & cost with <span>DevOps</span> best practices and advanced cloud technologies.</p>,
        ]}
    />
    <LeadingEnterprises
        extraClass="cloud_bg"
    />
    <AboutCloud/>
    <CloudBenefits/>
    <CloudServices/>
    <Journey/>
    <CloudPlatforms/>
    <CloudDevProcess/>
    <CloudFeaturedWork/>
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
