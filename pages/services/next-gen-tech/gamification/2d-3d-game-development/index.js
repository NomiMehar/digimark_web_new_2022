import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from "../../../../../public/assets/images/services/pc-game.png"
import BenefitsEsd
    from "../../../innovation/digital-transformation/enterprise-software-development/benefits-esd/BenefitsEsd";
import DevelopmentServices from "./development-services/DevelopmentServices";
import ReliablePcGame from "../pc-game-development/reliable-pc-game/ReliablePcGame";
import industriesSectionList from "../../blockchain/defi-developement/industries-section/industriesSectionList.json";
import IndustriesSection from "../../blockchain/defi-developement/industries-section/IndustriesSection";
import UnrealProjects from "../unreal-game-development/unreal-projects/UnrealProjects";
import NftWhyChoose from "../../blockchain/nft-development/nft-why-choose/NftWhyChoose";

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
            <p>Enjoy the best <span>2D/3D gaming</span> experience at <span>DigiMark Developers</span>. Our experts have a proven track record of delivering <span> high-quality and attractive games</span>. Create your dream video games now by connecting with us.</p>,
        ]}
    />
    <BenefitsEsd
        extraClass="game-2d"
        dynamicTitle={true}
        dynamicTitleText={["Benefits of Our ", <span>2D/3D Game</span>, <br/>, " Development Services"]}
    />
    <DevelopmentServices/>
    <ReliablePcGame
        imgSrc="/assets/images/services/reliable_img.png"
        dynamicTitle={true}
        title={["Looking for a ", <span>2D/3D game development Company</span>]}
        description={[
            "Talk to our team and discover how we can be a comprehensive end-to-end solution that meets your budget and deadline requirements."
        ]}
    />
        <IndustriesSection
            industryTitle={[<h2>Know Our <span>Major Industry</span> Verticals</h2>]}
            industryDescription={[<p>We Offer Our Mobile Game App Development Services in USA, UK and UAE in Different Industries</p>]}
            extraClass="game_industries"
            industriesSectionList={industriesSectionList}
        />
       <UnrealProjects classes="d_game"/>
       <NftWhyChoose classes="cycle_choose"/>
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
