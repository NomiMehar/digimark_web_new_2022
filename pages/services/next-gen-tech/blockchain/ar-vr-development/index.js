import GetQuote from "../../../../../components/get-quote/GetQuote";
import React from "react";
import MobilityBanner from "../../../innovation/mobility/android-app-development/android-app-banner/MobilityBanner";
import WhyAR from "./why-ar/WhyAR";
import ArServices from "./ar-services/ArServices";
import ArServicesList from "./ar-services/ArServicesList.json"
import ArCallAction from "./call-to-action/ArCallAction";
import TechnologyStack from "./technology-stack/TechnologyStack";
import DevProcess from "./dev-process/DevProcess";
import ArIndustries from "./ar-industries/ArIndustries";
import WhyHire from "./why-hire/WhyHire";
import Faqs from "../../../innovation/mobility/android-app-development/faq/Faqs";

export default function ArVrDevelopment () {
    return(
        <div className="ionic-app-dev">
            <MobilityBanner
                classes="arvr_banner"
                dynamicBanner={true}
                breadcrumParent="Next-Gen Tech"
                breadcrumChild="AR/VR & MR Development"
                bannerTitle={[
                    <span>
                        <strong>AR/VR & MR</strong>
                    </span>," Development",
                ]}
                bannerTextWrap={[
                    <p>Step into the magical world of AR/VR projects and elevate your business. </p>,
                ]}
            />
            <WhyAR/>
            <ArServices
                sectionTitle={[
                    "Our Best ", <span>AR/VR & MR</span>, <br/>, " Development Services",
                ]}
                sectionDescription={[
                    "Being one of the leading Virtual Reality App Companies, we create highly immersive software solutions that raise the prestige of brands.",
                ]}
                serviceList={ArServicesList}
            />
            <ArCallAction
                callTile={[
                    <h2>ADVANCING YOUR AR/ VR & MR <br/>DESKTOP & APP TECHNOLOGY</h2>,
                ]}
                callButtonText="Book FREE CONSULTATION"
            />
            <TechnologyStack
                sectionTitle={[
                    "Our Best ", <span>AR/VR & MR</span>, <br/>, " Development Services",
                ]}
                sectionDescription={[
                    "We are a renowned AR & VR development company that merges experience with creativity to deliver highly-immersive applications.",
                ]}
            />
            <DevProcess/>
            <div className="simple-image-layer"></div>
            <ArIndustries/>
            <WhyHire/>
            <iframe title="3D Modal" className="simple-image-layer two" src="https://sketchfab.com/models/6abc0a9c65ee4b71a3ffc48fb429fc4e/embed?autostart=1&&internal=1&tracking=0&transparent=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_theatre=1&ui_infos=0&ui_vr=0&ui_help=0&ui_settings=0&ui_fullscreen=0&ui_animations=0&ui_hint=1" frameborder="0"></iframe>
            <Faqs/>
            <GetQuote/>
        </div>
    )
}