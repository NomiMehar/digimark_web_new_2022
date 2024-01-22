import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from "../../../../../public/assets/images/services/pc-game.png"
import servicesProvidedList from "../mobile-game-development/services-provided/nftServicesProvidedList.json";
import ServicesProvided from "../mobile-game-development/services-provided/ServicesProvided";
import AboutUnrealGame from "./about-unreal-game/AboutUnrealGame";
import CallUnrealGame from "./call-unreal-game/CallUnrealGame";
import UnrealStack from "./unreal-stack/UnrealStack";
import UnrealProcessGame from "./unreal-process-game/UnrealProcessGame";
import UnrealProjects from "./unreal-projects/UnrealProjects";
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
            <p>We’re an industry leader in <span>mobile game development</span> with an established track record for delivering immersive  and captivating Mobile games for some of the largest and most cutting-edge businesses across the world</p>,
        ]}
    />
       <AboutUnrealGame/>
       <ServicesProvided
           classes="unreal_game_services"
           servicesProvidedList={servicesProvidedList}
           sectionTitle={[<h2>Our <span>Next-Gen Unreal Engine</span> <br/> Solutions in Gaming</h2>]}
       />
       <div className="unreal_video_bg">
           <div className="container">
               <video autoPlay loop muted poster="/assets/images/homepage/banner/banner-poster.jpg">
                   <source src="/assets/images/homepage/banner/intro.mp4" type="video/mp4" />
               </video>
           </div>
       </div>
       <CallUnrealGame
           title={[<h2>Do you need professional game <br/>
               development with <span>Unreal Engine?</span></h2>]}
       />
       <UnrealStack/>
       <UnrealProcessGame/>
       <UnrealProjects/>
       <NftWhyChoose/>
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
