import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from "../../../../../public/assets/images/services/pc-game.webp"
import servicesProvidedList from "../mobile-game-development/services-provided/unityServicesProvidedList.json";
import ServicesProvided from "../mobile-game-development/services-provided/ServicesProvided";
import AboutUnityGame from "./about-unity-game/AboutUnityGame";
import CallUnrealGame from "../unreal-game-development/call-unreal-game/CallUnrealGame";
import UnityGameStack from "./unity-game-stack/UnityGameStack";
import UnityWork from "./unity-work/UnityWork";
// import UnityWorkBox from "./unity-work-box/UnityWorkBox";
import UnityRecentProject from "./unity-recent-project/UnityRecentProject";
// import unityWorkBoxLists from './unity-work-box/unityWorkBoxList.json'
export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="unity_nft_banner"
        dynamicBanner={true}
        breadcrumParent="Next-Gen Tech"
        breadcrumChild="Unity Game Development"
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
            <p>Explore the <span>Unity Game Development</span> services at <span>DigiMark Developers</span> by our experts and enjoy a splendid gaming experience with ingenious solutions. Transform your dreams into a top-notch game application by giving advanced <span> gaming solutions and help.</span></p>,
        ]}
    />
       <AboutUnityGame/>
       <ServicesProvided
           classes="unity_game_services"
           servicesProvidedList={servicesProvidedList}
           sectionTitle={[
               <h2>Bringing Innovation <br/>
                   With <span>Our Services</span></h2>
           ]}
       />
       <div className="unreal_video_bg unity_video_bg">
           <div className="container">
               <video autoPlay loop muted poster="/assets/images/homepage/banner/banner-poster.webp">
                   <source src="/assets/images/homepage/banner/intro.mp4" type="video/mp4" />
               </video>
           </div>
       </div>
       <CallUnrealGame
           extraClass="unity_call_action"
           title={[<h2>Embrace Innovation to Drive <br/>Transformation With Custom <br/>Unity Game Development</h2>]}
       />
       <UnityGameStack/>
       <UnityWork/>
       <UnityRecentProject/>
       {/* <UnityWorkBox 
        utitle={[
            <h2>Why Digi <span>Mark</span> Developers <span>The Best Unity Game Development Company?</span></h2>
        ]}
    unityWorkBoxList={unityWorkBoxLists}
     /> */}
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
