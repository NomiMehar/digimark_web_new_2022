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
import ourWorkList from "../../../innovation/mobility/mobile-development/our-work/ourWorkLists.json";

export default function MobileDevelopment () {
    return (
        <div className="android-app-development">
            <MobilityBanner title="Mobile"/>
            <div className="overview_bg_layer overview_native_layer">
                <Overview
                    overviewTitle="Mobile App Development"
                    overviewDescription="Mobile app development services refer to the creation of software applications that are designed to run on mobile devices, such as smartphones and tablets. The process of developing these apps generally involves creating a user interface and design, coding the logic of the app, testing the app, and then making it available for download through an App Store or Google Play."
                    overViewList={iosOverViewList}
                    classesProp="white-layout"
                />
            </div>
            <MobileApps/>
            <WhyChoose
                whyChooseList={mobileWhyChooseList}
                mobileDev={true}
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
            {/* <OurWork
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
          }}/> */}
            <Faqs/>
            <LetsTalk />
        </div>
    );
};