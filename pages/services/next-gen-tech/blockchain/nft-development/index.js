import MobilityBanner from "../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner";
import NftServices from "./nft-services/NftServices";
import NftTechStack from "./nft-tech-stack/NftTechStack";
import NftProcess from "./nft-process/NftProcess";
import OurWork from "../../../innovation/mobility/mobile-development/our-work/OurWork";
import GetQuote from "../../../../../components/get-quote/GetQuote";
import Faqs from "../../../innovation/mobility/android-app-development/faq/Faqs";
import NftWhyChoose from "./nft-why-choose/NftWhyChoose";

export default function NftDevelopment() {
    return(
        <div className="ionic-app-dev">
            <MobilityBanner
                dynamicBanner={true}
                breadcrumParent="Next-Gen Tech"
                breadcrumChild="NFT Development"
                bannerTitle={["Non-Fungible Token ", <br/>, <span><strong>(NFT)</strong></span>, " Development "]}
                bannerTextWrap={[<p>NFTs represent a form of blockchain-based digital ledger containing specific data like a piece of digital art, music, signature, or even a specific tweet that can be sold and traded.</p>,
                <p>We are highly experienced in the emerging technology advancements and ready to provide you with cutting-edge NFT development services.</p>]}
            />
            <NftServices/>
            <NftTechStack/>
            <NftProcess/>
            <OurWork
             classes="nft_works"  perView={2.65}
        breakpoints={{
          1200: {
            slidesPerView: 2.65,
            600: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          },
        }}/>
            <NftWhyChoose/>
            <Faqs/>
            <GetQuote/>
        </div>
    )
}