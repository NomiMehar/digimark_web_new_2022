import MobilityBanner from "../android-app-development/android-app-banner/MobilityBanner";
import Benefits from "../android-app-development/benefits/Benefits";
import CustomApp from "../android-app-development/custom-app/CustomApp";
import WhyChoose from "../android-app-development/why-choose/WhyChoose";
import Technologies from "../android-app-development/technologies/Technologies";
import PerksOfWorking from "../android-app-development/perks-of-working/PerksOfWorking";
import perksOfWorkingList from "../android-app-development/perks-of-working/perksOfWorkingList.json";
import DevelopmentProcess from "../android-app-development/development-process/DevelopmentProcess";
import Faqs from "../android-app-development/faq/Faqs";
import Overview from "../android-app-development/app-overview/Overview";
import iosBenefitsList from "../android-app-development/benefits/iosBenefitsList.json";
import iosOverViewList from "../android-app-development/app-overview/iosOverViewList.json";
import iosCustomAppProcess from "../android-app-development/custom-app/iosCustomAppProcess.json";
import iosWhyChooseList from "../android-app-development/why-choose/iosWhyChooseList.json";
import LetsTalk from "../../../../landingpage/LetsTalk/LetsTalk";
import React from "react";
import CaseStudy from "../android-app-development/case-study/CaseStudy";
import DevelopmentProcessList from "../android-app-development/development-process/DevelopmentProcessList.json";

export default function AndroidIosDevelopment () {
    return (
        <div className="android-app-development">
            <MobilityBanner title="IOS" para="By leveraging Custom iOS app development, we facilitate global enterprises to build mobile solutions based on their aspirations."/>
            <div className="overview_bg_layer">
                <Overview
                    overviewTitle="iOS Mobile App Development"
                    overviewDescription="Looking for the best Custom App Development Companies? Look no further, hire skilled IOS developers from DigiMark's talent pool to enjoy the best Custom IOS App Development Services. We help businesses to succeed in their journey of redefining the mobile experience and offer long-term support. Take your business to the next level in the digital age with our best iOS app development company in the USA."
                    overViewList={iosOverViewList}
                />
                <Benefits
                    benefitsList={iosBenefitsList}
                    benefitsTitle={["Get help with your cost of ", <span><small>.</small>Mobile App Development services<small></small></span>, " no matter what ecosystem you're in."]}
                />
            </div>
            <CustomApp
                customAppProcess={iosCustomAppProcess}
                customAppTitle={["Top ", <span>IOS App</span>, " Development Company That Build’s Custom Apps"]}
                customAppDescription="DigiMark is your one-stop solution for all of your IoS app development needs. We use the latest technologies in ioS app development to cater to a wide range of industries. We can easily adjust your application to fit your business and industry requirements"
            />
            <WhyChoose
                whyChooseList={iosWhyChooseList}
                appName="IOS"
                ionicShow={true}
                metaverse={true}
                para="We are a top-notch Mobile App Development Company as our expertise spans various areas. Years of experience in outsourcing and passing technology can help customers optimize their businesses and operations."
            />
            <Technologies/>
            <PerksOfWorking
                imageProp={false}
                data={perksOfWorkingList}
                appName="IOS"
                classes="ios_perks"
            />
            <DevelopmentProcess
                appName={["Our ", <span>Proven Process,</span>, " Products Results"]}
                classes="ios_development_process"
                DevelopmentProcessList={DevelopmentProcessList}
            />
            <CaseStudy classProp="ios_casestudy"/>
            <Faqs/>
            <LetsTalk/>
        </div>
    );
};