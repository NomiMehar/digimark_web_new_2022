import MobilityBanner from "../android-app-development/android-app-banner/MobilityBanner";
import CustomApp from "../android-app-development/custom-app/CustomApp";
import WhyChoose from "../android-app-development/why-choose/WhyChoose";
import PerksOfWorking from "../android-app-development/perks-of-working/PerksOfWorking";
import perksOfWorkingList from "../android-app-development/perks-of-working/perksOfWorkingList.json";
import DevelopmentProcess from "../android-app-development/development-process/DevelopmentProcess";
import Overview from "../android-app-development/app-overview/Overview";
import iosOverViewList from "../android-app-development/app-overview/iosOverViewList.json";
import ionicCustomAppProcess from "../android-app-development/custom-app/ionicCustomAppProcess.json";
import ionicWhyChooseList from "../android-app-development/why-choose/ionicWhyChooseList.json";
import NativeVersion from "../android-app-development/technologies/NativeVersion";
import IonicBenefit from "../android-app-development/benefits/IonicBenefit";
import GetQuote from "../../../../../components/get-quote/GetQuote";
import React from "react";
import DevelopmentProcessList from "../android-app-development/development-process/DevelopmentProcessList.json";

export default function IonicDevelopment () {
    return (
        <div className="android-app-development ionic-app-dev">
            <MobilityBanner title="Ionic" para="Stay at the forefront of innovation with DigiMark's Ionic development services and deliver high-quality user experience."/>
            <div className="overview_bg_layer overview_native_layer">
                <Overview
                    overviewTitle="Ionic Mobile App Development"
                    overviewDescription="We are the best Ionic Development Company that helps in building attractive mobile applications according to the requirements. Our experts will craft applications that will go beyond the expectations of the user. We provide exceptional Ionic Framework Development to make advanced mobile apps with continuous UI for your ease. Propel your business now with DigiMark Developers"
                    overViewList={iosOverViewList}
                    classesProp="white-layout"
                />
                <IonicBenefit/>
            </div>
            <CustomApp
                customAppProcess={ionicCustomAppProcess}
                customAppTitle={["Top ", <span>Ionic App</span>, " Company That Build’s Custom Apps"]}
                customAppDescription="Access to the ionic mobile app developer using an open-source UI toolkit for developing scalable mobile applications."
            />
            <WhyChoose
                whyChooseList={ionicWhyChooseList}
                appName="React Native"
                classesProp="iconic_test"
                ionic={true}
                para="Build apps effortlessly by using web tools, enticing designs, and native features for the required performance."
                sliderVersion={false}
            />
            <NativeVersion/>
            <PerksOfWorking imageProp={true} data={perksOfWorkingList} appName="Ionic" classes="native_perks"/>
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