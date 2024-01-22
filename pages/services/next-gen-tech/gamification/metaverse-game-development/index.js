import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from "../../../../../public/assets/images/services/metaverse_game_slide.png"
import ServicesProvided from '../mobile-game-development/services-provided/ServicesProvided'
import servicesProvidedList from '../mobile-game-development/services-provided/servicesProvidedList.json'
import ServeEsd from '../../../innovation/digital-transformation/enterprise-software-development/serve-esd/ServeEsd'
import ProcessQualityAssurance from '../../../innovation/digital-transformation/quality-assurance/process-quality-assurance/ProcessQualityAssurance'
import ProjectNFTGame from '../nft-game-development/project-nft-game/ProjectNFTGame'
import NftWhyChoose from '../../blockchain/nft-development/nft-why-choose/NftWhyChoose'
import MetaverseAdvantage from '../../blockchain/nft-development/metaverse-advantage/MetaverseAdvantage'
import QuickFacts from './QuickFacts/QuickFacts'
export default function index() {
    return (
        <>
            <div className="android-app-development ionic-app-dev">
                <MobilityBanner classes="metaverse_game_development"
                    dynamicBanner={true}
                    breadcrumParent="Next-Gen Tech"
                    breadcrumChild="Metaverse Game
        Development Company"
                    bannerTitle={[
                        <span>
                            <strong>Metaverse Game</strong>
                        </span>, <br />, "Development Company"
                    ]}
                    SideImage={true}
                    bannerSideImage={bannerSideImage}
                    dynamicCTA={true}
                    ctaText="Request a quote"
                    bannerTextWrap={[
                        <p>We offers end-to-end services for those looking to hire <span>Metaverse Game Development Companies experienced in Metaverse, Blockchain, Unity3D, Unreal, PlayCanvas, VR, NFT, metaverse,</span> and more.</p>,
                    ]}
                />
                <MetaverseAdvantage classes="meta_advantage" />
                <ServicesProvided
                    classes="pc_services"
                    servicesProvidedList={servicesProvidedList}
                    sectionTitle={[<h2>Our <span>Metaverse Game Development</span> Solutions</h2>]}
                />
                <ServeEsd extraClass="blockchain_serve" />
                <QuickFacts />
                <ProcessQualityAssurance />
                <ProjectNFTGame perView={1} breakpoints={{
                    1200: {
                        slidesPerView: 1,
                    },
                    900: {
                        slidesPerView: 1,
                    },
                    600: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                }} extraClass="ai_games" />
                <NftWhyChoose classes="meta_choose" />
                <Faqs />
                <GetQuote />
            </div>
        </>
    )
}
