import GetQuote from "../../../../../components/get-quote/GetQuote";
import React from "react";
import MobilityBanner from "../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner";
import Faqs from "../../../innovation/mobility/android-app-development/faq/Faqs";
import ShopSolutions from "./shop-solutions/ShopSolutions";
import Results from "./results/Results";
import BlockchainBenefits from "./benefits/BlockchainBenefits";
import ChainCustomApp from "./chain-custom-app/ChainCustomApp";
import NativeVersion from "../../../innovation/mobility/android-app-development/technologies/NativeVersion";
import IndustriesSection from "../defi-developement/industries-section/IndustriesSection";
import BlockchainProcess from "./blockchain-process/BlockchainProcess";
import BlockchainPortfolio from "./blockchain-portfolio/BlockchainPortfolio";
import industriesSectionList from "../defi-developement/industries-section/industriesSectionList.json";

export default function BlockchainDevelopment () {
    return(
        <div className="ionic-app-dev">
            <MobilityBanner
                classes="blockchain_banner"
                dynamicBanner={true}
                breadcrumParent="Next-Gen Tech"
                breadcrumChild="Tokens & Crypto Wallets"
                bannerTitle={[
                    <span>
                        <strong>Blockchain Development</strong>
                    </span>,
                ]}
                bannerTextWrap={[
                    <p>We offer <span>Blockchain development services</span> that help businesses maximize their effectiveness and data security. Unleash new opportunities with <span>DigiMark Developers,</span> streamline the operations of the business, and revolutionize your business for a better future.</p>,
                ]}
            />
            <ShopSolutions/>
            <Results/>
            <BlockchainBenefits/>
            <ChainCustomApp/>
            <NativeVersion
                extraClass="white_version"
            />
            <IndustriesSection
                extraClass="white_version"
                industryTitle={[<h2>Digital Transformation Solutions For Specific <span>Industries</span></h2>]}
                industriesSectionList={industriesSectionList}
            />
            <BlockchainProcess/>
            <BlockchainPortfolio/>
            <Faqs/>
            <GetQuote/>
        </div>
    )
}