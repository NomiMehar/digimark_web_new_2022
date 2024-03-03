import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from "../../../../../public/assets/images/services/pc-game.png"
import EnterpriseServices
    from "../../../innovation/digital-transformation/enterprise-software-development/enterprise-services/EnterpriseServices";
import arserviceList from '../../../innovation/digital-transformation/enterprise-software-development/enterprise-services/arServicesList.json'
import BenefitsSupport
    from "./benefits-support/BenefitsSupport";
import PortfolioProducts
    from "../../../innovation/digital-transformation/product-development/portfolio-of-products/PortfolioProducts";
    import ProcessPcGame from '../pc-game-development/process-pc-game/ProcessPcGame'
import ServicesCompany from "../mobile-game-development/services-company/ServicesCompany";
import servicesCompanyList from "../mobile-game-development/services-company/servicesCompanyWhiteList.json";
import UnrealStack from '../unreal-game-development/unreal-stack/UnrealStack'

export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="unreal_nft_banner"
        dynamicBanner={true}
        breadcrumParent="Next-Gen Tech"
        breadcrumChild="NFT Game Development"
        bannerTitle={[
            <span>
                <strong>AR/VR/MR</strong>
            </span>, " Game", <br/>, " Development Company"
        ]}
        SideImage={true}
        bannerSideImage={bannerSideImage}
        dynamicCTA={true}
        ctaText="Request a quote"
        bannerTextWrap={[
            <p>Get the finest <span>AR/VR/MR game development</span> services to make your dreams come true. By getting <span>top-notch services</span> we assist all businesses to connect with the audience effectively. Elevate your brand image now!</p>,
        ]}
    />
   <BenefitsSupport extraClass="ar_vr_benefits" />
   <EnterpriseServices
       extraClass="ar_vr_services"
       etitle={[
        <h2><span>AR/VR & MR App</span> Development Services</h2>
       ]}
       edescription=""
       enterpriseServicesList={arserviceList}
   />
   <UnrealStack 
   title={[
    "OUR AR/VR & MR ", <br/>,
    <span>Technology Stack</span>
    ]}
    description="Our experts have years of experience in making AR/VR software solutions for iOS, Android, and other devices as well. We have the capability and brilliance in the advanced tools and technologies. Get in touch with our talented team and build the best app according to your requirements."   
   />
       <PortfolioProducts classes="ar_vr_portfolio"/>
       <ProcessPcGame/>
       <ServicesCompany
           classes="pc_service_company"
           companyTitle={[<h2>Why DigiMark is the top PC <span>game development</span> company?</h2>]}
           companyDescription={[<p>DigiMark Developers is a one-stop solution for all your mobile game development needs.</p>]}
           servicesCompanyList={servicesCompanyList}
       />
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
