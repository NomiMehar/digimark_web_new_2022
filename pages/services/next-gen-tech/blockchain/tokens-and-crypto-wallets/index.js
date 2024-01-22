import GetQuote from "../../../../../components/get-quote/GetQuote";
import React from "react";
import MobilityBanner from "../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner";
import Faqs from "../../../innovation/mobility/android-app-development/faq/Faqs";
import MetaverseExperience from "../metaverse-development/metaverse-experience/MetaverseExperience";
import Seamless from "./seamless/Seamless";
import seamlessList from "./seamless/seamlessList.json";
import WalletDevelopment from "./wallet-development/WalletDevelopment";
import WalletStack from "./wallet-stack/WalletStack";
import ComapnyDevelopmentProcessList
    from "../../../innovation/mobility/android-app-development/development-process/ComapnyDevelopmentProcessList.json";
import DevelopmentProcess
    from "../../../innovation/mobility/android-app-development/development-process/DevelopmentProcess";
import WalletCaseStudy from "./wallet-case-study/WalletCaseStudy";
import WalletCaseStudyList from "./wallet-case-study/walletCaseStudyList.json";
import WalletChoose from "./wallet-choose/WalletChoose";

export default function TokensAndCryptoWallets () {
    return(
        <div className="ionic-app-dev">
            <MobilityBanner
                classes="token_banner"
                dynamicBanner={true}
                breadcrumParent="Next-Gen Tech"
                breadcrumChild="Tokens & Crypto Wallets"
                bannerTitle={[
                    <span>
                        <strong>Tokens & Crypto</strong>
                    </span>, <br/>,
                    "Wallets Development",
                ]}
                bannerTextWrap={[
                    <p>We develop <span>Crypto Wallets For Management</span>, Storage & Transfer Of Cryptocurrencies. Crypto wallets are essential <span>Web3 applications</span> that keep <span>users’ private keys</span> and provide the necessary interface that allows people to interact with blockchain networks, track their transactional histories and crypto balances and make transactions. </p>,
                ]}
            />
            <MetaverseExperience/>
            <Seamless data={seamlessList}/>
            <WalletDevelopment/>
            <WalletStack/>
            <DevelopmentProcess
                appName={[<span>Crypto Wallet Development</span>, " Processes"]}
                DevelopmentProcessList={ComapnyDevelopmentProcessList}
                companyProcess={true}
                classes="company_process"
                extraClass="wallet_process"
            />
            <WalletCaseStudy
                title={[<h2>Some of our <span>Crypto Currency Wallet Case Study</span></h2>]}
                WalletCaseStudyList={WalletCaseStudyList}
            />
            <WalletChoose/>
            <Faqs/>
            <GetQuote/>
        </div>
    )
}