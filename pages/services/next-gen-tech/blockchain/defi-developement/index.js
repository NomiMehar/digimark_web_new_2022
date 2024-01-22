import GetQuote from "../../../../../components/get-quote/GetQuote";
import React from "react";
import MobilityBanner from "../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner";
import Faqs from "../../../innovation/mobility/android-app-development/faq/Faqs";
import DefiImprove from "./defi-improve/DefiImprove";
import defiCustomAppProcess
    from "../../../innovation/mobility/android-app-development/custom-app/defiCustomAppProcess.json";
import CustomApp from "../../../innovation/mobility/android-app-development/custom-app/CustomApp";
import DviderSection from "./dvider-section/DviderSection";
import DefiBenefits from "./defi-benefits/DefiBenefits";
import ArCallAction from "../ar-vr-development/call-to-action/ArCallAction";
import IndustriesSection from "./industries-section/IndustriesSection";
import DefiTech from "./defi-tech/DefiTech";
import DefiProcess from "./defi-process/DefiProcess";
import NftWhyChoose from "../nft-development/nft-why-choose/NftWhyChoose"
import industriesSectionList from "./industries-section/industriesSectionList.json";

export default function DefiDevelopement () {
    return(
        <div className="ionic-app-dev">
            <MobilityBanner
                classes="defi_banner"
                dynamicBanner={true}
                breadcrumParent="Next-Gen Tech"
                breadcrumChild="Decentralized Finance (DeFI)"
                bannerTitle={[
                    <span>
                        <strong>Decentralized Finance (DeFi)</strong>
                    </span>,
                    "Development Solutions",
                ]}
                bannerTextWrap={[
                    <p>Our DeFi solutions cover the entire cycle of decentralized app development from design, coding, integration, support, and evolution of all types of DeFi products. Our goal is to offer clients fast, stable, secure and cost-effective blockchain-based financial transactions every time</p>,
                ]}
            />
            <DefiImprove/>
            <CustomApp
                customAppProcess={defiCustomAppProcess}
                customAppDescription="Lorem ipsum dolor sit amet consectetur. Et feugiat pretium ultricies purus ut nunc a. Proin neque amet sed dolor. Non integer arcu sit imperdiet vitae id purus. Nunc leo est ornare donec. Convallis non praesent tristique habitant duis bibendum. In fermentum nibh ultrices pharetra."
                customAppTitle={["Embrace the wide range of Decentralized Finance ", <span>DeFi Development</span>,
                " Services & Solutions"]}
                classProp="defi_custom"
            />
            <DviderSection
                classes=""
                dividerTitle={[<h2>Let's get started with Defi solutions <br/>development?</h2>]}
                dividerButton="Discuss your project"
            />
            <DefiBenefits/>
            <ArCallAction
                callTile={[
                    <h2>Let’s Bring Your DeFi Ideas to Market and Navigate <br/>the Next with DigiMark Developers!</h2>,
                ]}
                callDescription={[
                    <p>Experience the Perfection Backed by Next-Gen Technologies in our Superlative DeFi <br/>Solutions.</p>,
                ]}
                callButtonText="Discuss your project"
            />
            <IndustriesSection
                industryTitle={[<h2>Digital Transformation Solutions For Specific <span>Industries</span></h2>]}
                industriesSectionList={industriesSectionList}
            />
            <DefiTech/>
            <DefiProcess/>
            <NftWhyChoose/>
            <Faqs/>
            <GetQuote/>
        </div>
    )
}