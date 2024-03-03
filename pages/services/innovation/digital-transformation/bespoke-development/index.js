import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../mobility/android-app-development/faq/Faqs'
import CustomerTalks from '../../../../landingpage/CustomerTalks/CustomerTalks'
import OurProducts from '../../../../landingpage/OurProducts/OurProducts'
import BespokeMarquee from './bespoke-marquee/BespokeMarquee'
import BespokeSoftware from './bespoke-software/BespokeSoftware'
import ArCallAction from '../../../next-gen-tech/blockchain/ar-vr-development/call-to-action/ArCallAction'
import BespokeSolution from './bespoke-solution/BespokeSolution'
import BespokeStack from './bespoke-stack/BespokeStack'
import BespokeProccess from './bespoke-proccess/BespokeProccess'
import BespokeServices from './bespoke-services/BespokeServices'
import BespokeRecentWork from './bespoke-recent-work/BespokeRecentWork'


export default function index() {
  return (
  <>
   <div className="android-app-development ionic-app-dev">
    <MobilityBanner classes="bespoke_banner"
                dynamicBanner={true}
                breadcrumParent="Innovation"
                breadcrumChild="Bespoke Development"
                bannerTitle={[
                    <span>
                        <strong>Bespoke Software</strong>
                    </span>, " Development Company"
                ]}
                    dynamicCTA={true}
                    ctaText="Let’s Talk About Your Project"
                bannerTextWrap={[
                    <p>Transform your business with <span>DigiMark Developer's Bespoke</span> Development services. Make use of <span>innovative software solutions</span> to make your business value.</p>,
                ]}/>
    <BespokeMarquee/>
    <BespokeSoftware/>
    <BespokeSolution/>
    <BespokeMarquee classes="white_marquee"/>
    <BespokeServices/>
    <BespokeStack/>
    <ArCallAction
    classes="bespoke_question"
     callTile={[
      <h2>Have any <span>burning questions?</span> Get in touch!</h2>,
  ]}
  callButtonText="Contact Us"
    />
    <BespokeRecentWork/>
    <BespokeProccess/>
    <CustomerTalks/>
    <OurProducts/>
    <Faqs/>
    <GetQuote/>
    </div>
  </>
  )
}
