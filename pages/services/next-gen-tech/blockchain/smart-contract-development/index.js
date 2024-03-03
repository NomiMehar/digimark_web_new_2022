import MobilityBanner from "../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner";
import NftTechStack from "./nft-tech-stack/NftTechStack";
import GetQuote from "../../../../../components/get-quote/GetQuote";
import NftWhyChoose from "../nft-development/nft-why-choose/NftWhyChoose";
import Faqs from "../../../innovation/mobility/android-app-development/faq/Faqs";
import SmartContractService from "./smart-contract-services/SmartContractService";
import SmartContractServiceList from './smart-contract-services/SmartContractServiceList.json'
import BlockchainEnterprise from "./blockchain-enterprise/BlockchainEnterprise";
import SmartBenefits from "./smart-benefits/SmartBenefits";
import CallToAction from "../../../../../components/call-to-action/CallToAction";
import SmartIndustries from "./smart-industries/SmartIndustries";
import DevProcesses from "./dev-processes/DevProcesses";
import OurWork from "../../../innovation/mobility/mobile-development/our-work/OurWork";
import smartOurWorkList from "../../../innovation/mobility/mobile-development/our-work/SmartOurWorkList.json";
export default function SmartContract() {
  return (
    <div className="ionic-app-dev">
      
      <MobilityBanner
        dynamicBanner={true}
        breadcrumParent="Next-Gen Tech"
        breadcrumChild="Smart Contract Development"
        bannerTitle={[
          <span>
            <strong>Smart Contract</strong>
          </span>,
          <br />,
          " Development ",
        ]}
        bannerTextWrap={[
          <p>Aspiring to bring a new <span>smart contract</span> solution to the market? Well, <span>DigiMark</span> is a leading <span>Smart Contract</span> Development Company that takes your business to the next level by assisting you in designing, deploying, and developing smart contracts. We deliver efficient and hack-proof smart contracts for all types of blockchain solutions.</p>,
        ]}
      />
      <SmartBenefits/>
      <SmartContractService workingBenfits={true} data={SmartContractServiceList} appName="Smart Contract Development" classes="working_benefits"/>
      <BlockchainEnterprise/>
      <CallToAction/>
      <NftTechStack />
      <SmartIndustries/>
      <DevProcesses/>
      <OurWork
          smartClass="smart_contract"
          centeredSlides={false}
          classes="nft_works"
          ourWorkList={smartOurWorkList}
          perView={2}
          breakpoints={{
            600: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
        }}
          description="We provide the best Smart Contract Development Services by bringing innovation & providing a comprehensive portfolio of services tailored to your needs."
      />
      <NftWhyChoose classes="why_choose" />
      <Faqs />
      <GetQuote />
    </div>
  );
}
