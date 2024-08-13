import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import AboutPcGame from "./about-pc-game/AboutPcGame";
import bannerSideImage from "../../../../../public/assets/images/services/pc-game.webp"
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
        bg_video_poster="/assets/images/services/gamedev-poster.webp"
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
            <p>DigiMark Developers provides <span>PC Game Development</span> solutions and focuses on technology completely to drive business growth. We ensure to deliver <span>measurable</span> results.</p>,
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
       <ReliablePcGame description="Turn your gaming dream into reality with the help of the Game Design PC services of our experts Let’s create magic together" imgSrc="/assets/images/services/reliable_img.webp" />
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
