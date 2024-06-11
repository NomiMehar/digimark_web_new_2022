import MobilityBanner from "../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner";
import WhyChoose from "../../../innovation/mobility/android-app-development/why-choose/WhyChoose";
import nftServicesList from "../../../innovation/mobility/android-app-development/why-choose/nftServicesList.json";
import NftTechStack from "./nft-tech-stack/NftTechStack";
import NftProcess from "./nft-process/NftProcess";
import GetQuote from "../../../../../components/get-quote/GetQuote";
import NftWhyChoose from "../nft-development/nft-why-choose/NftWhyChoose";
import Faqs from "../../../innovation/mobility/android-app-development/faq/Faqs";
import OurWork from "../../../innovation/mobility/mobile-development/our-work/OurWork";
import WorkList from "../../../innovation/mobility/mobile-development/our-work/OurWorkLists.json";
export default function NftDevelopment() {
  return (
    <div className="ionic-app-dev">
      <MobilityBanner
        dynamicBanner={true}
        breadcrumParent="Next-Gen Tech"
        breadcrumChild="NFT Marketplace 
                Development"
        bannerTitle={[
          <span>
            <strong>NFT Marketplace</strong>
          </span>,
          <br />,
          " Development ",
        ]}
        bannerTextWrap={[
          <p>Commence your NFT marketplace by getting our <span>NFT Marketplace Development</span> Solutions. Enjoy earnings with our exceptional solutions that empower you to launch a cutting-edge marketplace for selling unique digital assets on top blockchain networks like <span>Ethereum, Avalanche, and Polkadot.</span></p>,
        ]}
      />
      <WhyChoose
        whyChooseList={nftServicesList}
        nftService={true}
        metaverse={false}
        classesProp="nft_marketplace_wrap"
      />
      <NftTechStack />
      <NftProcess />
      <OurWork
        classes="nft_works"
        ourWorkList={WorkList}
        perView={1.5}
        breakpoints={{
          1200: {
            slidesPerView: 1.5,
            600: {
              slidesPerView: 1.5,
            },
            0: {
              slidesPerView: 1,
            },
          },
        }}
        description="We provide the best NFT Marketplace Development Services by bringing innovation & providing a comprehensive portfolio of services tailored to your needs."
      />
      <NftWhyChoose />
      <Faqs />
      <GetQuote />
    </div>
  );
}
