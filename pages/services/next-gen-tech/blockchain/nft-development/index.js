import MobilityBanner from "../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner";
import NftServices from "./nft-services/NftServices";
import NftTechStack from "./nft-tech-stack/NftTechStack";
import NftProcess from "./nft-process/NftProcess";
import OurWork from "../../../innovation/mobility/mobile-development/our-work/OurWork";
import ourWorkList from "../../../innovation/mobility/mobile-development/our-work/OurWorkLists.json";
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
                bannerTextWrap={[<p>Revolutionize your digital assets with our latest <span>NFT Development Services</span> with the help of DigiMark Developers. Launch your NFTs by unlocking unlimited possibilities with our expert guidance and the best NFT App Development Services. Join us now and benefit from our professionals for your <span>digital transformation</span> journey.</p>]}
            />
            <NftServices/>
            <NftTechStack/>
            <NftProcess/>
            <OurWork
             ourWorkList={ourWorkList}
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
        }}
        description="We provide the best NFT Development Services by bringing innovation & providing a comprehensive portfolio of services tailored to your needs."
        />
            <NftWhyChoose description={true}/>
            <Faqs/>
            <GetQuote/>
        </div>
    )
}