import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from "../../../../../public/assets/images/services/pc-game.webp"
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
            <p>We are the best <span>Unreal Engine Game Dev</span> Company that meets customer needs by making tailor-made solutions. Develop games with <span>astonishing graphics</span> and add value to your business with the help of our skilled developers.</p>,
        ]}
    />
       <AboutUnrealGame/>
       <ServicesProvided
           classes="unreal_game_services"
           servicesProvidedList={servicesProvidedList}
           sectionTitle={[<h2>Our <span>Unreal Game</span> <br/> Development Services</h2>]}
       />
       <div className="unreal_video_bg">
           <div className="container">
               <video autoPlay loop muted poster="/assets/images/homepage/banner/banner-poster.webp">
                   <source src="/assets/images/homepage/banner/intro.mp4" type="video/mp4" />
               </video>
           </div>
       </div>
       <CallUnrealGame
           title={[<h2>Do you need professional game <br/>
               development with <span>Unreal Engine?</span></h2>]}
       />
       <UnrealStack    title={[
    "Our Unreal", <br/>,
    <span>Game Technology Stack</span>
    ]}
    description="Aspiring to learn about the best stack for game development? DigiMark Developers provides a wide range of technologies to make your perfect game. Connect now"  />
       <UnrealProcessGame/>
       <UnrealProjects/>
       <NftWhyChoose description="With years of experience in Unreal Engine Game Development, we bring exceptional skills to every type of project. We are familiar with the fact that how to eradicate any obstacle. We believe in complete collaboration with our clients and are here to support you at every step." />
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
