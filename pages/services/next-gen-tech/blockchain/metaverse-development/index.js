import MobilityBanner from "../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner";
import GetQuote from "../../../../../components/get-quote/GetQuote";
import Faqs from "../../../innovation/mobility/android-app-development/faq/Faqs";
import MetaverseExperience from "./metaverse-experience/MetaverseExperience";
import MetaverseBenefits from "./metaverse-benefits/MetaverseBenefits";
import metaverseBenefits from "./metaverse-benefits/MetaverseBenefitsList.json"
import metaverseFutureList from "./metaverse-benefits/MetaverseFutureList.json"
import WhyChoose from "../../../innovation/mobility/android-app-development/why-choose/WhyChoose";
import metaverseWhyChooseList from "../../../innovation/mobility/android-app-development/why-choose/metaverseWhyChooseList.json";
import metaverseCompanyList from "../../../innovation/mobility/android-app-development/why-choose/metaverseCompanyList.json";
import CallToAction from "../../../../../components/call-to-action/CallToAction";
import OurWork from "../../../innovation/mobility/mobile-development/our-work/OurWork";
import smartOurWorkList from "../../../innovation/mobility/mobile-development/our-work/SmartOurWorkList.json";
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
            Ready to explore the possibilities of a next-gen Metaverse Development solution? Let our team of experts in Web 3.0, AR/VR, AI, and 3D modeling bring your idea to life. Schedule a free consultation now.</p>,
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
            <OurWork smartClass="smart_contract"
              centeredSlides={false}
              classes="nft_works"
              ourWorkList={smartOurWorkList}
              perView={3}
              description="We provide the best Metaverse Development Services by bringing innovation & providing a comprehensive portfolio of services tailored to your needs."
              />
          <BlockchainEnterprise metaverse={true} classes="metaverse_expert"/>
          <WhyChoose
                whyChooseList={metaverseCompanyList}
                metaverse={true}
                appName="Metaverse"
                para="As an experienced team in creating immersive applications, we can be a reliable partner for metaverse software development. Our expertise can help launch and steer your project towards success."
                ionicShow={true}
                classesProp="metaverse_company"
            />
      <Faqs />
      <GetQuote />
    </div>
  );
}
