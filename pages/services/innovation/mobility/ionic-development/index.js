import MobilityBanner from "../android-app-development/android-app-banner/MobilityBanner";
import CustomApp from "../android-app-development/custom-app/CustomApp";
import WhyChoose from "../android-app-development/why-choose/WhyChoose";
import PerksOfWorking from "../android-app-development/perks-of-working/PerksOfWorking";
import perksOfWorkingList from "../android-app-development/perks-of-working/perksOfWorkingList.json";
import DevelopmentProcess from "../android-app-development/development-process/DevelopmentProcess";
import Overview from "../android-app-development/app-overview/Overview";
import iosOverViewList from "../android-app-development/app-overview/iosOverViewList.json";
import androidCustomAppProcess from "../android-app-development/custom-app/androidCustomAppProcess.json";
import ionicWhyChooseList from "../android-app-development/why-choose/ionicWhyChooseList.json";
import NativeVersion from "../android-app-development/technologies/NativeVersion";
import IonicBenefit from "../android-app-development/benefits/IonicBenefit";
import GetQuote from "../../../../../components/get-quote/GetQuote";
import React from "react";
import DevelopmentProcessList from "../android-app-development/development-process/DevelopmentProcessList.json";

export default function IonicDevelopment () {
    return (
        <div className="android-app-development ionic-app-dev">
            <MobilityBanner title="Ionic"/>
            <div className="overview_bg_layer overview_native_layer">
                <Overview
                    overviewTitle="Ionic Mobile App Development"
                    overviewDescription="Our experience has taught us one thing: user experience is the key component of any successful app. Our team uses native and hybrid technologies for iOS and Android to provide the best performance and experience. Mobile operation systems change rapidly, to help your product take advantage of new features and remain user-friendly, we offer long-term support and upgrade packages for all iOS and Android app designs."
                    overViewList={iosOverViewList}
                    classesProp="white-layout"
                />
                <IonicBenefit/>
            </div>
            <CustomApp
                customAppProcess={androidCustomAppProcess}
                customAppTitle={["Top ", <span>Ionic App</span>, " Company That Build’s Custom Apps"]}
                customAppDescription="Lorem ipsum dolor sit amet consectetur. Et feugiat pretium ultricies purus ut nunc a. Proin neque amet sed dolor."
            />
            <WhyChoose
                whyChooseList={ionicWhyChooseList}
                appName="React Native"
                classesProp="iconic_test"
                ionic={true}
                sliderVersion={false}
            />
            <NativeVersion/>
            <PerksOfWorking imageProp={true} data={perksOfWorkingList} appName="React Native" classes="native_perks"/>
            <DevelopmentProcess
                appName={["Our ", <span>Proven Process,</span>, " Products Results"]}
                classes="ios_development_process"
                ionicClass="ionic_development_process"
                DevelopmentProcessList={DevelopmentProcessList}
            />
            <GetQuote/>
        </div>
    );
};