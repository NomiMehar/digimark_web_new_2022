import MobilityBanner from "./android-app-banner/MobilityBanner";
import Overview from "./app-overview/Overview";
import Benefits from "./benefits/Benefits";
import CustomApp from "./custom-app/CustomApp";
import WhyChoose from "./why-choose/WhyChoose";
import Technologies from "./technologies/Technologies";
import PerksOfWorking from "./perks-of-working/PerksOfWorking";
import perksOfWorkingList from "./perks-of-working/perksOfWorkingList.json";
import DevelopmentProcess from "./development-process/DevelopmentProcess";
import CaseStudy from "./case-study/CaseStudy";
import Faqs from "./faq/Faqs";
import androidBenefitsList from "./benefits/androidBenefitsList.json";
import androidOverViewList from "./app-overview/androidOverViewList.json";
import androidCustomAppProcess from "./custom-app/androidCustomAppProcess.json";
import androidWhyChooseList from "./why-choose/androidWhyChooseList.json";
import LetsTalk from "../../../../landingpage/LetsTalk/LetsTalk";
import React from "react";
import DevelopmentProcessList from "./development-process/DevelopmentProcessList.json";

export default function AndroidAppDevelopment () {
    return (
        <div className="android-app-development">
            <MobilityBanner title="Android" para="Empowering businesses with custom Android apps that deliver exceptional user experiences and increase their presence"/>
            <div className="overview_bg_layer">
                <Overview
                    overviewTitle="Android Mobile App Development"
                    overviewDescription="DigiMark specializes in creating user-friendly and unparalleled Android Mobile Applications to meet your business needs. We have a team of experts who bring your ideas to life and provide Android App Development Agency services by enhancing user experience. Experience top-notch solutions that take your mobile presence to the next level and create value for your business. Partner with us now and get the best service."
                    overViewList={androidOverViewList}
                />
                <Benefits
                    benefitsList={androidBenefitsList}
                    benefitsTitle={["Benefit from our extensive ", <span><small>.</small>Android app development<small>.</small></span>, " services no matter which ecosystem you choose."]}
                />
            </div>
            <CustomApp
                customAppProcess={androidCustomAppProcess}
                customAppDescription="Wish to elevate your business? Don't worry, we have you covered with robust and innovative solutions that meet your requirements. Collaborate with our team of experts who deliver top-notch and customized Android and iOS App Development services that help you with results.
                "
                customAppTitle={["Top ", <span>Android App</span>, " Development Company That Build’s Custom Apps"]}
            />
            <WhyChoose
                whyChooseList={androidWhyChooseList}
                metaverse={true}
                appName="Android App"
                para="Our developers ensure compatibility with modern technologies like wearable devices, tablets, & Android TVs. We transform and empower businesses with better customer engagement, marketing, and scaling."
                ionicShow={true}
            />
            <Technologies/>
            <PerksOfWorking data={perksOfWorkingList} imageProp={true} appName="Android"/>
            <DevelopmentProcess
                appName={["Our ", <span>Proven Process,</span>, " Products Results"]}
                DevelopmentProcessList={DevelopmentProcessList}
            />
            <CaseStudy/>
            <Faqs/>
            <LetsTalk />
        </div>
    );
};