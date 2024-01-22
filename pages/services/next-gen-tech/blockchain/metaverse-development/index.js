import MobilityBanner from "../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner";
import GetQuote from "../../../../../components/get-quote/GetQuote";
import Faqs from "../../../innovation/mobility/android-app-development/faq/Faqs";
import MetaverseExperience from "./metaverse-experience/MetaverseExperience";
import MetaverseBenefits from "./metaverse-benefits/MetaverseBenefits";
import metaverseBenefits from "./metaverse-benefits/MetaverseBenefitsList.json"
import metaverseFutureList from "./metaverse-benefits/MetaverseFutureList.json"
import WhyChoose from "../../../innovation/mobility/android-app-development/why-choose/WhyChoose";
import metaverseWhyChooseList from "../../../innovation/mobility/android-app-development/why-choose/metaverseWhyChooseList";
import metaverseCompanyList from "../../../innovation/mobility/android-app-development/why-choose/metaverseCompanyList";
import CallToAction from "../../../../../components/call-to-action/CallToAction";
import OurWork from "../../../innovation/mobility/mobile-development/our-work/OurWork";
import smartOurWorkList from "../../../innovation/mobility/mobile-development/our-work/SmartourWorkList.json";
import BlockchainEnterprise from '../smart-contract-development/blockchain-enterprise/BlockchainEnterprise'
import MetaverseFoundation from "./metaverse-foundation/MetaverseFoundation";

export default function SmartContract() {
  return (
    <div className="ionic-app-dev">
      <MobilityBanner
      classes="metaverse_development"
        dynamicBanner={true}
        breadcrumParent="Next-Gen Tech"
        breadcrumChild="Metaverse Development"
        bannerTitle={[
          <span>
            <strong>Metaverse Development</strong>
          </span>,
          <br />,
          " Company ",
        ]}
        bannerTextWrap={[
          <p>
            Leverage the benefits of a futuristic Metaverse solution backed by our expertise in Blockchain, AR/VR, and 3D modeling. Share your Metaverse development idea with us in a free consultation.</p>,
        ]}
      />
       <MetaverseExperience/>
       <MetaverseBenefits data={metaverseBenefits} metaverse={true}/>
       <WhyChoose
                whyChooseList={metaverseWhyChooseList}
                metaverse={true}
                ionicShow={true}
                classesProp="metaverse_services"
            />
              <MetaverseFoundation/>
             <MetaverseBenefits data={metaverseFutureList} metaverse={false} classes="metaverse_future"/>
            <CallToAction classes="metaverse_banner"/>
            {/* <OurWork smartClass="smart_contract"
          centeredSlides={false}
          classes="nft_works"
          ourWorkList={smartOurWorkList}
          perView={3} /> */}
          <BlockchainEnterprise metaverse={true} classes="metaverse_expert"/>
          <WhyChoose
                whyChooseList={metaverseCompanyList}
                metaverse={false}
                ionicShow={true}
                classesProp="metaverse_company"
            />
      <Faqs />
      <GetQuote />
    </div>
  );
}
