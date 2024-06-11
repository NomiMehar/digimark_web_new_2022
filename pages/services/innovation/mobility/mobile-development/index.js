import MobilityBanner from "../android-app-development/android-app-banner/MobilityBanner";
import WhyChoose from "../android-app-development/why-choose/WhyChoose";
import DevelopmentProcess from "../android-app-development/development-process/DevelopmentProcess";
import Faqs from "../android-app-development/faq/Faqs";
import Overview from "../android-app-development/app-overview/Overview";
import iosOverViewList from "../android-app-development/app-overview/iosOverViewList.json";
import mobileWhyChooseList from "../android-app-development/why-choose/mobileWhyChooseList.json";
import solutionWhyChooseList from "../android-app-development/why-choose/solutionWhyChooseList.json";
import LetsTalk from "../../../../landingpage/LetsTalk/LetsTalk";
import React from "react";
import MobileApps from "./mobile-apps/MobileApps";
import IndustriesList from "./industries-serve/IndustriesList";
import OurWork from "./our-work/OurWork";
import DevelopmentProcessList from "../android-app-development/development-process/DevelopmentProcessList.json";
import ourWorkList from "../../../../services/innovation/mobility/mobile-development/our-work/OurWorkLists.json";

export default function MobileDevelopment () {
    return (
        <div className="android-app-development">
            <MobilityBanner title="Mobile" para="We develop well-designed and bespoke custom mobile applications for both Android and iOS to increase your business growth and brand recognition."/>
            <div className="overview_bg_layer overview_native_layer">
                <Overview
                    overviewTitle="Mobile App Development"
                    overviewDescription="A key component of any successful app is its user experience & our top tech developers build mobile apps that enable customers to seamlessly connect with your services and products straight from their Android or iOS devices. Our experts deliver the best technical solutions tailored to your needs. Get the best app development service that helps you with your business goals."
                    overViewList={iosOverViewList}
                    classesProp="white-layout"
                />
            </div>
            <MobileApps/>
            <WhyChoose
                whyChooseList={mobileWhyChooseList}
                mobileDev={true}
                appName="Mobile App"
                para="With over 7 years of experience, DigiMark offers end-to-end mobile app development services, utilizing the latest technologies & frameworks to deliver user-friendly, and secure solutions tailored to your business."
                metaverse={true}
                classesProp="mobile_app_wrap"
            />
            <DevelopmentProcess
                appName={["Our ", <span>Proven Process,</span>, " Products Results"]}
                DevelopmentProcessList={DevelopmentProcessList}
            />
            <IndustriesList/>
            <WhyChoose
                whyChooseList={solutionWhyChooseList}
                appName="Mobile"
               
            />
            <OurWork
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
          description="We provide the best Mobile Development Services by bringing innovation & providing a comprehensive portfolio of services tailored to your needs."
          />
            <Faqs/>
            <LetsTalk />
        </div>
    );
};