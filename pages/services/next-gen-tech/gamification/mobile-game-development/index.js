import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import GameIntro from "./game-intro/GameIntro";
import ServicesProvided from "./services-provided/ServicesProvided";
import servicesProvidedList from "./services-provided/servicesProvided.json";
import IndustriesSection from "../../blockchain/defi-developement/industries-section/IndustriesSection";
import industriesSectionList from "../../blockchain/defi-developement/industries-section/industriesSectionList.json";
import GameTechnologies from "./game-technologies/GameTechnologies";
import GameProcess from "./game-process/GameProcess";
import MiddleCallAction from "./middle-call-action/MiddleCallAction";
import middleActionImage from "../../../../../public/assets/images/services/middleactionimage1.png";
import CreativeGame from "./creative-game/CreativeGame";
import ServicesCompany from "./services-company/ServicesCompany";
import servicesCompanyList from "./services-company/servicesCompanyList.json";

export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="game_dev_banner"
        backgroundVideo={true}
        bg_video_poster="/assets/images/services/gamedev-poster.jpg"
        bg_bannerUrl="/assets/images/services/gamedev.mp4"
        dynamicBanner={true}
        breadcrumParent="Next-Gen Tech"
        breadcrumChild="Mobile Game Development"
        bannerTitle={[
            <span>
                <strong>Mobile Game</strong>
            </span>, <br/>, " Development Company"
        ]}
            dynamicCTA={true}
            ctaText="Request a quote"
        bannerTextWrap={[
            <p>We’re an industry leader in <span>mobile game development</span> with an established track record for delivering immersive and captivating Mobile games for some of the largest and most cutting-edge businesses across the world.</p>,
        ]}
    />
    <GameIntro/>
       <ServicesProvided
           servicesProvidedList={servicesProvidedList}
           sectionTitle={[<h2><span>Mobile Games Development</span><br/>Services We provide</h2>]}
       />
       <IndustriesSection
           industryTitle={[<h2>Know Our <span>Major Industry</span> Verticals</h2>]}
           industryDescription={[<p>We Offer Our Mobile Game App Development Services in USA, UK and UAE in Different Industries</p>]}
           extraClass="game_industries"
           industriesSectionList={industriesSectionList}
       />
       <GameTechnologies/>
       <GameProcess/>
       <MiddleCallAction
           middleActionImage={middleActionImage}
           sectionTitle={[<h2>Looking for a <span>reliable mobile game development Company</span></h2>]}
           sectionDescription={[<p>Talk to our team and discover how we can be a comprehensive end-to-end solution that meets your budget and deadline requirements.</p>]}
       />
       <CreativeGame/>
       <ServicesCompany
           companyTitle={[<h2>Why DigiMark Developers is <span>the top</span><br/> mobile game development company?</h2>]}
           companyDescription={[<p>DigiMark Developers is a one-stop solution for all your mobile game development needs. Being an industry leader, we have developed numerous fun-filled, addictive, and challenging mobile games. Many of our games have topped the charts of app stores too. Any company is judged by the features that it provides, and therefore, here are the traits that make us a top mobile game development company.</p>]}
           servicesCompanyList={servicesCompanyList}
       />
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
