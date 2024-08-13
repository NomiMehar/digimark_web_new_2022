import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from "../../../../../public/assets/images/services/pc-game.webp"
import servicesProvidedList from "../mobile-game-development/services-provided/nftServicesProvidedList.json";
import ServicesProvided from "../mobile-game-development/services-provided/ServicesProvided";
import LeadingEnterprises from "../../../innovation/digital-transformation/web-development/leading-enterprises/LeadingEnterprises";
import AboutNFTGame from "./about-nft-game/AboutNFTGame";
import BenefitsNFTGame from "./benefits-nft-game/BenefitsNFTGame";
import ExpertiseNFTGame from "./expertise-nft-game/ExpertiseNFTGame";
import ProcessNFTGame from "./process-nft-game/ProcessNFTGame";
import WhyNFTGame from "./why-nft-game/WhyNFTGame";
import ProjectNFTGame from "./project-nft-game/ProjectNFTGame";

export default function index() {
    return (
        <>
            <div className="android-app-development ionic-app-dev">
                <MobilityBanner classes="game_nft_banner"
                    dynamicBanner={true}
                    breadcrumParent="Next-Gen Tech"
                    breadcrumChild="NFT Game Development"
                    bannerTitle={[
                        <span>
                            <strong>NFT Game</strong>
                        </span>, <br />, "Development Company"
                    ]}
                    SideImage={true}
                    bannerSideImage={bannerSideImage}
                    dynamicCTA={true}
                    ctaText="Request a quote"
                    bannerTextWrap={[
                        <p><span>DigiMark Developers</span> is the leading <span>NFT Game Development</span> Company that provides the best NFT gaming platform development to boost business growth.</p>,
                    ]}
                />
                <LeadingEnterprises
                    extraClass="nft_game_logs"
                />
                <AboutNFTGame />
                <ServicesProvided
                    classes="nft_game_services"
                    servicesProvidedList={servicesProvidedList}
                    sectionTitle={[<h2><span>Our Next - Gen NFT Solutions in Gaming</span></h2>]}
                />
                <BenefitsNFTGame />
                <ExpertiseNFTGame />
                <ProcessNFTGame />
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
                }}
                description="Get the fun and interactive games with the help of DigiMark Developers. Our work speaks about our dedication and creativity. Connect now and enjoy immersive game opportunities."
                title={[
                    "Our", " ",<span>Creative NFT</span>," ", "Projects"
                   ]}
                />
                <WhyNFTGame />
                <Faqs />
                <GetQuote />
            </div>
        </>
    )
}
