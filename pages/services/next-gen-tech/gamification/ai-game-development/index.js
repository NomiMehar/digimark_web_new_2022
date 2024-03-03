import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from "../../../../../public/assets/images/services/ai-game.png"
import aiReliable from "../../../../../public/assets/images/services/ai_reliable.png"
import EnterpriseServices
    from "../../../innovation/digital-transformation/enterprise-software-development/enterprise-services/EnterpriseServices";
import ReliablePcGame from '../pc-game-development/reliable-pc-game/ReliablePcGame'
import ProjectNFTGame from '../nft-game-development/project-nft-game/ProjectNFTGame'
import GameProcess from '../mobile-game-development/game-process/GameProcess'
import UnityWorkBox from '../unity-game-development/unity-work-box/UnityWorkBox'
import IndustriesWeServe from '../../../innovation/digital-transformation/web-development/industries-we-serve/IndustriesWeServe'
import QuickFacts from './QuickFacts/QuickFacts'
import aiServiceList from '../../../innovation/digital-transformation/enterprise-software-development/enterprise-services/aiServicesList.json'
import aiProcessList from '../mobile-game-development/game-process/gameProcessList.json'
import aiWorkBoxList from '../unity-game-development/unity-work-box/aiWorkBoxList.json'
export default function index() {
    return (
        <>
            <div className="android-app-development ionic-app-dev">
                <MobilityBanner classes="ai_game_development"
                    dynamicBanner={true}
                    breadcrumParent="Next-Gen Tech"
                    breadcrumChild="AI Game Development"
                    bannerTitle={[
                        <span>
                            <strong>AI Game</strong>
                        </span>, " Development", <br />, " Company"
                    ]}
                    SideImage={true}
                    bannerSideImage={bannerSideImage}
                    dynamicCTA={true}
                    ctaText="Request a quote"
                    bannerTextWrap={[
                        <p>Take complete benefit from our unparalleled <span>AI Game Development</span> services and take your gaming product to new heights. Revolutionize gaming with advanced services from <span>DigiMark Developers.</span></p>,
                    ]}
                />
                <QuickFacts />
                <EnterpriseServices
                    extraClass="ai_services"
                    description="Maximize operational efficiency with cutting-edge enterprise software development"
                    title={[
                        "Benefits of Using", <br/>,
                        <span>AI in Game Development</span>
                       ]}
                       enterpriseServicesList={aiServiceList}
                />
                <ReliablePcGame
                    imgSrc="/assets/images/services/ai_reliable.png"
                dynamicTitle={true}
        title={["Looking for a ", <span>reliable AI
        game development Company</span>]}
        description={[
            "Find out how DigiMark Developers can be helpful to you by connecting with us. Get perfect solutions that meet your budget and deadline needs."
        ]} classes="ai_reliable" />
                <IndustriesWeServe classes="ai_industries" />
                <ProjectNFTGame perView={2} breakpoints={{
                    1200: {
                        slidesPerView: 2,
                    },
                    900: {
                        slidesPerView: 2,
                    },
                    600: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                }} extraClass="ai_games"
                description="Our goal has always been to provide quality services and we have delivered more than 100+ successful projects to our clients. Take a look at our projects and get to know about our work!"
                title={[
                    "Our", " ",<span>AI Game Development</span>," ", "Projects"
                   ]}
                />
                <GameProcess 
                description="Know about our workflow and processes for a better understanding of our work and team."
                title={[
                    <span>Process of</span>, " AI", <br/>, "Game Development"
                   ]}
                   gameProcessList={aiProcessList}
                extraClass="ai_services" />
                <UnityWorkBox
                title={[
                    "Why Digi ",<span>Mark</span>, " Developers.",
                      <span>The Best Unity Game Development Company</span>,"?"
                   ]}
                   unityWorkBoxList={aiWorkBoxList}
                extraClass="ai_unity" />
                <Faqs />
                <GetQuote />
            </div>
        </>
    )
}
