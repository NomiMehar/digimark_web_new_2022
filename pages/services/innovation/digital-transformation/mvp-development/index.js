import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../mobility/android-app-development/faq/Faqs'
import CustomerTalks from '../../../../landingpage/CustomerTalks/CustomerTalks'
import OurProducts from '../../../../landingpage/OurProducts/OurProducts'
import ViableProduct from "./viable-product/ViableProduct";
import MvpServices from "./mvp-services/MvpServices";
import MvpBenefits from "./mvp-benefits/MvpBenefits";
import MvpStack from "./mvp-stack/MvpStack";
import MvpDevelopmentProcess from "./mvp-development-process/MvpDevelopmentProcess";
import MvpChoose from "./mvp-choose/MvpChoose";
import OutSourced from "./out-sourced/OutSourced";
import bannerSideImage from "../../../../../public/assets/images/services/mvp_banner_Image.png"

export default function index() {
  return (
  <>
    <div className="android-app-development ionic-app-dev">
        <MobilityBanner
            classes="mvp_app_banner"
            dynamicBanner={true}
            breadcrumParent="Innovation"
            breadcrumChild="MVP Development"
            bannerTitle={[
                <span>
                    <strong>Minimum Viable Product </strong>
                </span>,  <br/> , <strong>Development Services</strong>
            ]}
            bannerTextWrap={[
                <p>As a <span>full-cycle software development company</span>, we have the right expertise to provide high-quality <span></span>. We approach the work with your business goals in mind, carefully prioritizing and giving you an effective solution to explore your idea’s potential.</p>,
            ]}
            SideImage={true}
            bannerSideImage={bannerSideImage}
            ctaText="Let’s Talk About Your project"
            dynamicCTA={true}
        />
        <ViableProduct/>
        <MvpServices/>
        <MvpBenefits/>
        <MvpStack/>
        <MvpDevelopmentProcess/>
        <CustomerTalks
            customerTitle={true}
            customerTitleText={[<h2><span>Success Cases</span></h2>]}
        />
        <OurProducts/>
        <MvpChoose/>
        <OutSourced/>
        <Faqs
        />
        <GetQuote
            classProp="chnageBgColor"
        />
    </div>
  </>
  )
}
