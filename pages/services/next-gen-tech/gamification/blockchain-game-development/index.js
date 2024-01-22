import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from "../../../../../public/assets/images/services/ai-game.png"
import LeadingEnterprises from '../../../innovation/digital-transformation/web-development/leading-enterprises/LeadingEnterprises'
import ServicesProvided from '../mobile-game-development/services-provided/ServicesProvided'
import servicesProvidedList from '../mobile-game-development/services-provided/servicesProvidedList.json'
import ServeEsd from '../../../innovation/digital-transformation/enterprise-software-development/serve-esd/ServeEsd'
import CallToQualityAssurance from '../../../innovation/digital-transformation/quality-assurance/callto-quality-assurance/CallToQualityAssurance'
import UnrealStack from '../unreal-game-development/unreal-stack/UnrealStack'
import UnityRecentProject from '../unity-game-development/unity-recent-project/UnityRecentProject'
import SoftwareProductsProcess from '../../../innovation/digital-transformation/product-development/software-products-process/SoftwareProductsProcess'
import SaasPartners from '../../../innovation/digital-transformation/saas-development/saas-partners/SaasPartners'
export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="blockchain_game_development"
        dynamicBanner={true}
        breadcrumParent="Next-Gen Tech"
        breadcrumChild="Blockchain Game
        Development Company"
        bannerTitle={[
            <span>
                <strong>Blockchain Game</strong>
            </span>, <br/>, "Development Company"
        ]}
        SideImage={true}
        bannerSideImage={bannerSideImage}
        dynamicCTA={true}
        ctaText="Request a quote"
        bannerTextWrap={[
            <p>Our extensive experience in the gaming industry and <span>blockchain development expertise</span> make us the top choice for blockchain game development services</p>,
        ]}
    />
   <LeadingEnterprises extraClass="blockchain_games"/>
   <ServicesProvided  classes="blockchain_services"
           servicesProvidedList={servicesProvidedList}
           sectionTitle={[<h2><span>Our Next - Gen NFT Solutions in Gaming</span></h2>]}/>
    {/* extraClass="blockchain_serve" */}
    <ServeEsd />
    <CallToQualityAssurance
       title={["Are you looking for " ,<span>Blockchain Game
       Development?</span>," Let give us your project now."]}
       classes="enterprise_blockchain"
    />
    <UnrealStack/>
    <UnityRecentProject/>
    <SoftwareProductsProcess extraClass="blockchain_develop" />
    <SaasPartners/>
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
