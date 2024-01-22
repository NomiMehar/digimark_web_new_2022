import MobilityBanner from "../android-app-development/android-app-banner/MobilityBanner";
import Benefits from "../android-app-development/benefits/Benefits";
import CustomApp from "../android-app-development/custom-app/CustomApp";
import WhyChoose from "../android-app-development/why-choose/WhyChoose";
import PerksOfWorking from "../android-app-development/perks-of-working/PerksOfWorking";
import perksOfWorkingList from "../android-app-development/perks-of-working/perksOfWorkingList.json";
import DevelopmentProcess from "../android-app-development/development-process/DevelopmentProcess";
import Faqs from "../android-app-development/faq/Faqs";
import Overview from "../android-app-development/app-overview/Overview";
import nativeBenefitsList from "../android-app-development/benefits/nativeBenefitsList.json";
import iosOverViewList from "../android-app-development/app-overview/iosOverViewList.json";
import nativeCustomAppProcess from "../android-app-development/custom-app/nativeCustomAppProcess.json";
import iosWhyChooseList from "../android-app-development/why-choose/iosWhyChooseList.json";
import NativeVersion from "../android-app-development/technologies/NativeVersion";
import NativeCaseStudy from "../android-app-development/case-study/NativeCaseStudy";
import LetsTalk from "../../../../landingpage/LetsTalk/LetsTalk";
import React from "react";
import DevelopmentProcessList from "../android-app-development/development-process/DevelopmentProcessList.json";

export default function ReactNativeDevelopment () {
    return (
        <div className="android-app-development">
            <MobilityBanner title="React Native"/>
            <div className="overview_bg_layer overview_native_layer">
                <Overview
                    overviewTitle="React Native Mobile App Development"
                    overviewDescription="Our experience has taught us one thing: user experience is the key component of any successful app. Our team uses native and hybrid technologies for iOS and Android to provide the best performance and experience. Mobile operation systems change rapidly, to help your product take advantage of new features and remain user-friendly, we offer long-term support and upgrade packages for all iOS and Android app designs."
                    overViewList={iosOverViewList}
                    classesProp="white-layout"
                />
                <Benefits
                    benefitsList={nativeBenefitsList}
                    classProps="native_benefits"
                    benefitsTitle={[<span><small>.</small>Facebook Supported,<small>.</small></span>, " Community Driven \nReact Native Development Services"]}
                />
            </div>
            <CustomApp
                customAppProcess={nativeCustomAppProcess}
                customAppTitle={["Top ", <span>React Native Development</span>, " Company That Build’s Custom Apps"]}
                customAppDescription="Lorem ipsum dolor sit amet consectetur. Et feugiat pretium ultricies purus ut nunc a. Proin neque amet sed dolor."
                classProp="native_custom_app"
            />
            <WhyChoose
                whyChooseList={iosWhyChooseList}
                appName="React Native"
                sliderVersion={true}
            />
            <NativeVersion/>
            <PerksOfWorking imageProp={true} data={perksOfWorkingList} appName="React Native" classes="native_perks"/>
            <DevelopmentProcess
                appName={["Our ", <span>Proven Process,</span>, " Products Results"]}
                DevelopmentProcessList={DevelopmentProcessList}
            />
            <NativeCaseStudy/>
            <Faqs/>
            <LetsTalk />
        </div>
    );
};