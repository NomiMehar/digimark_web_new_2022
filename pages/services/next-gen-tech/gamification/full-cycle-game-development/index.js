import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../../innovation/mobility/android-app-development/faq/Faqs'
import bannerSideImage from "../../../../../public/assets/images/services/ai-game.webp"
import MvpBenefits from './mvp-benefits/MvpBenefits'
import TechnologiesPcGame from '../pc-game-development/technologies-pc-game/TechnologiesPcGame'
import ArCallAction from '../../blockchain/ar-vr-development/call-to-action/ArCallAction'
import MetaverseExperience from '../../blockchain/metaverse-development/metaverse-experience/MetaverseExperience'
import ArIndustries from '../../blockchain/ar-vr-development/ar-industries/ArIndustries'
import NftProcess from './nft-process/NftProcess'
import OurWork from '../../../innovation/mobility/mobile-development/our-work/OurWork'
import ourWorkList from '../../../innovation/mobility/mobile-development/our-work/OurWorkLists.json'
import NftWhyChoose from './nft-why-choose/NftWhyChoose'
export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="fullCyle_game_development"
        dynamicBanner={true}
        breadcrumParent="Next-Gen Tech"
        breadcrumChild="Full Cycle Game
        Development Company"
        bannerTitle={[
            <span>
                <strong>Full Cycle Game</strong>
            </span>, <br/>, "Development Company"
        ]}
        SideImage={true}
        bannerSideImage={bannerSideImage}
        dynamicCTA={true}
        ctaText="Request a quote"
        bannerTextWrap={[
            <p>Enjoy <span>Full-Cycle game development</span> services with <span>DigiMark Developers</span> that keep users coming back. <span>Connect with us</span> and let us lead your project through every stage till its release successfully.</p>,
        ]}
    />
    <MvpBenefits/>
    {/* <TechnologiesPcGame extraClass="cycle_technology" /> */}
    <ArCallAction
                callTile={[
                    <h2>Have an idea and desire to release
                    a game? We can help.</h2>,
                ]}
                callButtonText="Contact Us"
                classes="cycle_ar_call"

            />
            <MetaverseExperience/>
            <ArIndustries/>
            <NftProcess/>
            <OurWork
                      classes="nft_works"
                ourWorkList={ourWorkList}
                centeredSlides={true}
        perView={2.65}
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
          description="Welcome to the world of our work where we have shown our full-cycle game development services. Take a look and get stunned."
          />
        <NftWhyChoose description="DigiMark Developers needs to be your first choice as we have experts who develop full-cycle games of any industry. Following are the reasons you should contact us"  classes="cycle_choose" />
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
