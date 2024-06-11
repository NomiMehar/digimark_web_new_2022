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
                    <p>Get ready to modernize your traditional financial services into quick fund processing at minimal transactional cost and no credit checks. Our skilled Defi Developers team develops a unique & reliable Defi Platform that enhances transaction transparency with smart contracts and token development.</p>,
                ]}
            />
            <DefiImprove/>
            <CustomApp
                customAppProcess={defiCustomAppProcess}
                customAppDescription="Experience an efficient and secure approach to financial transactions and asset management with the best DeFi development company. Revolutionize the way you do business and unleash your potential for success in the decentralized finance world at DigiMark Developers."
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
            <NftWhyChoose description={true}/>
            <Faqs/>
            <GetQuote/>
        </div>
    )
}