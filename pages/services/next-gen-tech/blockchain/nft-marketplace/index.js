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
          <p>
            We offer the NFT marketplace services that help users to launch a
            feature-rich NFT marketplace on different blockchain networks, like
            Ethereum, Avalanche and Polkadot.
          </p>,
          <p>
            Our offerings include NFT creation, storefront exploration, wallet
            integration, bid placing and NFT storage solution.
          </p>,
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
      />
      <NftWhyChoose />
      <Faqs />
      <GetQuote />
    </div>
  );
}
