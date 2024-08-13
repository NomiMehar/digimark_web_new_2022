import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from "../../../../../public/assets/images/services/metaverse_game_slide.webp"
import ServicesProvided from '../mobile-game-development/services-provided/ServicesProvided'
import servicesProvidedList from '../mobile-game-development/services-provided/metaServicesProvidedList.json'
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
                        <p><span>DigiMark Developers</span> is the leading <span>Metaverse Game Development</span> Company that develops exciting games. Our experts provide the best <span>Metaverse Game Development</span> Services with high-end technologies.</p>,
                    ]}
                />
                <MetaverseAdvantage classes="meta_advantage" />
                <ServicesProvided
                    classes="pc_services"
                    servicesProvidedList={servicesProvidedList}
                    sectionTitle={[<h2>Our <span>Metaverse Game Development</span> Services</h2>]}
                />
                <ServeEsd description="With our deep industry knowledge, we cater to a wide range of sectors, providing customized solutions that perfectly align with specific business requirements." extraClass="blockchain_serve" />
                <QuickFacts />
                {/* <ProcessQualityAssurance /> */}
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
                }} extraClass="ai_games"
                description="Our goal has always been to provide quality services and we have delivered more than 100+ successful projects to our clients. Take a look at our projects and get to know about our work!"
                title={[
                    "Our", " ",<span>AI Game Development</span>," ", "Projects"
                   ]}
                />
                <NftWhyChoose classes="meta_choose" />
                <Faqs />
                <GetQuote />
            </div>
        </>
    )
}
