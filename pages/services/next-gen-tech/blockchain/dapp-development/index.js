import GetQuote from "../../../../../components/get-quote/GetQuote";
import React from "react";
import MobilityBanner from "../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner";
import Faqs from "../../../innovation/mobility/android-app-development/faq/Faqs";
import DappBenefits from "./dapp-benefits/DappBenefits";
import DappOffer from "./dapp-offer/DappOffer";
import DappTech from "./dapp-tech/DappTech";
import ArCallAction from "../ar-vr-development/call-to-action/ArCallAction";
import DappProcess from "./dapp-process/DappProcess";
import WalletCaseStudy from "../tokens-and-crypto-wallets/wallet-case-study/WalletCaseStudy";
import WalletCaseStudyList from "../tokens-and-crypto-wallets/wallet-case-study/walletCaseStudyList.json";
import DappUseCase from "./dapp-use-case/DappUseCase";
import WhyDappUse from "./why-dapp-use/WhyDappUse";

export default function DappDevelopment () {
    return(
        <div className="ionic-app-dev">
            <MobilityBanner
                classes="dapp_banner"
                dynamicBanner={true}
                breadcrumParent="Next-Gen Tech"
                breadcrumChild="DApp Development"
                bannerTitle={[
                    "EMPOWERING ", <br/>, <small> Businesses With</small>, "Custom ", <span>DApp Services</span>,
                ]}
            />
            <DappBenefits/>
            <DappOffer/>
            <DappTech/>
            <ArCallAction
                callTile={[
                    <h2>Let’s Bring Your DApp Ideas to Market and Navigate <br/>the Next with DigiMark Developers!</h2>,
                ]}
                callDescription={[
                    <p>Experience the Perfection Backed by Next-Gen Technologies in our Superlative <br/>DAppSolutions.</p>,
                ]}
                callButtonText="Discuss your project"
            />
            <DappProcess/>
            <DappUseCase/>
            <WalletCaseStudy
                class="white-bg"
                title={[<h2>Some of our <span>DApps Case Study</span></h2>]}
                WalletCaseStudyList={WalletCaseStudyList}
            />
            <WhyDappUse/>
            <Faqs/>
            <GetQuote/>
        </div>
    )
}