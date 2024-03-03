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
// import GameProcess from "./game-process/GameProcess";
// import gamesProcessList from './game-process/gameProcessList.json';
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
            <p>DigiMark Developers is the leading <span>Mobile Game Development</span> company that develops high-quality & unparalleled mobile games for <span>Android and iOS.</span> Connect with our game developers and enjoy the ultimate benefit.</p>,
        ]}
    />
    <GameIntro/>
       <ServicesProvided
           servicesProvidedList={servicesProvidedList}
           sectionTitle={[<h2><span>Mobile Games Development</span><br/>Services We provide</h2>]}
       />
       <IndustriesSection
           industryTitle={[<h2>Know Our <span>Major Industry</span> Verticals</h2>]}
           industryDescription={[<p>Enjoy our Mobile Game Application Development services in the USA, UK, and UAE too with multiple industries.</p>]}
           extraClass="game_industries"
           industriesSectionList={industriesSectionList}
       />
       <GameTechnologies/>
       {/* <GameProcess 
       gdescription="You are just simple four steps away to kick start your dream project with us"
          gtitle={[
            <h2><span>Process of</span> Mobile <br /> Game Development</h2>
          ]}
          gameProcessList={gamesProcessList}
       /> */}
       <MiddleCallAction
           middleActionImage={middleActionImage}
           sectionTitle={[<h2>Looking for a <span>reliable mobile game development Company</span></h2>]}
           sectionDescription={[<p>DigiMark Developers is one of the top-notch Mobile Game Development Agencies that provide budget-friendly solutions and meet requirements.</p>]}
       />
       <CreativeGame/>
       <ServicesCompany
           companyTitle={[<h2>Why DigiMark Developers is <span>the top</span><br/> mobile game development company?</h2>]}
           companyDescription={[<p>We are a team of experts who bring creative ideas to the table and provide exceptional Mobile App Tech Stack services. DigiMark Developers ensure result-oriented gaming solutions that provide attractive opportunities and make your experience thrilling. Moreover, we keep updating you at every stage from the start of the project till the delivery. Make your business a complete success with us.</p>]}
           servicesCompanyList={servicesCompanyList}
       />
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
