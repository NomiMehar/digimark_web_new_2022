import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../mobility/android-app-development/faq/Faqs'
import OurClients from './our-clients/OurClients'
import ProductBenefits from './product-benefits/ProductBenefits'
import ProductDesigning from './product-designing/ProductDesigning'
import ProductPortfolio from './product-portfolio/ProductPortfolio'
import ProductPower from './product-power/ProductPower'
import ProductProcess from './product-process/ProductProcess'
import ProductServices from './product-services/ProductServices'
import StandoutVideo from './standout-video/StandoutVideo'
import TopAgency from './top-agency/TopAgency'
import bannerSideImage from "../../../../../public/assets/images/services/open-lightbox.webp";

export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="product_design_banner"
        dynamicBanner={true}
        breadcrumParent="Innovation"
        breadcrumChild="Product Design"
        bannerTitle={["Full Stack ", <span><strong>UX-driven</strong></span>, <br/>, " design agency taking ", <br/>, "industry leaders forward" ]}
        SideImage={true}
        bannerSideImage={bannerSideImage}
        bannerTextWrap={[
         <p>Take your business to the next level with our <span>tailored product design services</span> that mainly focus on a human-centered approach. Keep customers engrossed with your brand and run a business effectively.</p>,
        ]}
        dynamicCTA={true}
        ctaText="Let’s Start Your project"
    />
    <TopAgency/>
    <ProductPower/>
    <StandoutVideo/>
    <ProductBenefits/>
    <ProductServices/>
    <ProductDesigning/>
    <ProductProcess/>
    <ProductPortfolio/>
    <OurClients/>
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
