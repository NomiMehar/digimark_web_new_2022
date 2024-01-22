import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import AboutPcGame from "./about-pc-game/AboutPcGame";
import bannerSideImage from "../../../../../public/assets/images/services/pc-game.png"
import GalleryPcGame from "./gallery-pc-game/GalleryPcGame";
import servicesProvidedList from "../mobile-game-development/services-provided/servicesProvidedList.json";
import ServicesProvided from "../mobile-game-development/services-provided/ServicesProvided";
import TechnologiesPcGame from "./technologies-pc-game/TechnologiesPcGame";
import ReliablePcGame from "./reliable-pc-game/ReliablePcGame";
import ProcessPcGame from "./process-pc-game/ProcessPcGame";
import CreativePcGame from "./creative-pc-game/CreativePcGame";
import servicesCompanyList from "../mobile-game-development/services-company/servicesCompanyWhiteList.json";
import ServicesCompany from "../mobile-game-development/services-company/ServicesCompany";

export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="game_pc_banner"
        backgroundVideo={true}
        bg_video_poster="/assets/images/services/gamedev-poster.jpg"
        bg_bannerUrl="/assets/images/services/gamedev.mp4"
        dynamicBanner={true}
        breadcrumParent="Next-Gen Tech"
        breadcrumChild="PC Game Development"
        bannerTitle={[
            <span>
                <strong>PC Game</strong>
            </span>, <br/>, " Development Company"
        ]}
                    SideImage={true}
                    bannerSideImage={bannerSideImage}
            dynamicCTA={true}
            ctaText="Request a quote"
        bannerTextWrap={[
            <p>Our team offers <span>bespoke end-to-end PC game development</span> outsourcing services. We gathered game industry veterans to create top-notch titles for desktop devices, consoles and wearables.</p>,
        ]}
    />
       <div className="gray-bg">
           <AboutPcGame/>
           <GalleryPcGame/>
       </div>
       <ServicesProvided
           classes="pc_services"
           servicesProvidedList={servicesProvidedList}
           sectionTitle={[<h2><span>PC Games Development</span><br/>Services We provide</h2>]}
       />
       <TechnologiesPcGame/>
       <ReliablePcGame imgSrc="/assets/images/services/reliable_img.png" />
       <ProcessPcGame/>
       <CreativePcGame/>
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
