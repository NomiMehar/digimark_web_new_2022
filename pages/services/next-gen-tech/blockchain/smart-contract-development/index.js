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
// import OurWork from "../../../innovation/mobility/mobile-development/our-work/OurWork";
// import smartOurWorkList from "../../../innovation/mobility/mobile-development/our-work/SmartourWorkList.json";
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
          <p>
            Whether you desire to boost your company’s workflows or bring a new smart contracts solution to the market, Digimark smart contracts developers have the skills and experience to make it happen. With full-cycle smart contract development services, we deliver efficient, and hack-proof smart contracts for all types of blockchain solutions.</p>,
        ]}
      />
      <SmartBenefits/>
      <SmartContractService workingBenfits={true} data={SmartContractServiceList} appName="Smart Contract Development" classes="working_benefits"/>
      <BlockchainEnterprise/>
      <CallToAction/>
      <NftTechStack />
      <SmartIndustries/>
      <DevProcesses/>
      {/* <OurWork
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
      /> */}
      <NftWhyChoose classes="why_choose" />
      <Faqs />
      <GetQuote />
    </div>
  );
}
