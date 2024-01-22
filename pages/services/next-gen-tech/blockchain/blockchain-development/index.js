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
                    <p>We design and develop <span>custom blockchain solutions</span> using <span>Hyperledger, EVM, Solidity, Cosmos or Substrate</span>. Building business logic to running blockchain nodes, we understand how to develop a decentralized platform for NFTs, <span>bridges, DEX, metaverse, tokens and dApps</span>.</p>,
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