import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from "../../../../../public/assets/images/services/pc-game.png"
import EnterpriseServices
    from "../../../innovation/digital-transformation/enterprise-software-development/enterprise-services/EnterpriseServices";
import BenefitsSupport
    from "../../../innovation/digital-transformation/support-maintenance/benefits-support/BenefitsSupport";
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
                <strong>Unreal Engine</strong>
            </span>, " Game", <br/>, " Development Company"
        ]}
        SideImage={true}
        bannerSideImage={bannerSideImage}
        dynamicCTA={true}
        ctaText="Request a quote"
        bannerTextWrap={[
            <p>We’re an industry leader in <span>mobile game development</span> with an established track record for delivering immersive  and captivating Mobile games for some of the largest and most cutting-edge businesses across the world</p>,
        ]}
    />
   <BenefitsSupport extraClass="ar_vr_benefits" />
   <EnterpriseServices
       extraClass="ar_vr_services"
   />
   <UnrealStack/>
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
