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
                        <p>We offer full-cycle <span>artificial intelligence development services</span>, as well as individual services for the design and implementation of in-game analytics or finite-state machine models. </p>,
                    ]}
                />
                <QuickFacts />
                <EnterpriseServices
                    extraClass="ai_services"
                />
                <ReliablePcGame
                    imgSrc="/assets/images/services/ai_reliable.png"
                dynamicTitle={true}
        title={["Looking for a ", <span>reliable AI
        game development Company</span>]}
        description={[
            "Talk to our team and discover how we can be a comprehensive end-to-end solution that meets your budget and deadline requirements."
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
                }} extraClass="ai_games" />
                <GameProcess extraClass="ai_services" />
                <UnityWorkBox extraClass="ai_unity" />
                <Faqs />
                <GetQuote />
            </div>
        </>
    )
}
