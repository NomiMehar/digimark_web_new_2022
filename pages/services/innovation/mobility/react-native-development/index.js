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
            <MobilityBanner title="React Native" para="Maximize your business with our cost-effective React Native App Development Services that enable you to build mobile applications."/>
            <div className="overview_bg_layer overview_native_layer">
                <Overview
                    overviewTitle="React Native Mobile App Development"
                    overviewDescription="Experience the fast, interactive, and maintainable user interfaces for web or mobile application projects by getting React Native App Development Services. Our clients have consistently given us high ratings for delivering successful projects & we are proud to have won several industry awards, making us a trusted choice for React development services. Create cutting-edge applications to drive business growth."
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
                customAppDescription="Grab our skilled developers to have responsive & dynamic user interfaces for better user experience & business outcomes."
                classProp="native_custom_app"
            />
            <WhyChoose
                whyChooseList={iosWhyChooseList}
                appName="React Native"
                sliderVersion={true}
                ionicShow={false}
                metaverse={false}
                para="Choose DigiMark the best React Native App Development Company for building apps that feel good to the end-user."
            />
            <NativeVersion/>
            <PerksOfWorking imageProp={true} desc={true} para="Reasons why you should trust Digimark with your next web application project" data={perksOfWorkingList} appName="React Native" classes="native_perks"/>
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