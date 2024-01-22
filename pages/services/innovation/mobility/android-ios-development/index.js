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
            <MobilityBanner title="IOS"/>
            <div className="overview_bg_layer">
                <Overview
                    overviewTitle="iOS Mobile App Development"
                    overviewDescription="Our experience has taught us one thing: user experience is the key component of any successful app. Our team uses native and hybrid technologies for iOS and Android to provide the best performance and experience. Mobile operation systems change rapidly, to help your product take advantage of new features and remain user-friendly, we offer long-term support and upgrade packages for all iOS and Android app designs."
                    overViewList={iosOverViewList}
                />
                <Benefits
                    benefitsList={iosBenefitsList}
                    benefitsTitle={["Benefit from our extensive ", <span><small>.</small>Android app development<small>.</small></span>, " services no matter which ecosystem you choose."]}
                />
            </div>
            <CustomApp
                customAppProcess={iosCustomAppProcess}
                customAppTitle={["Top ", <span>IOS App</span>, " Development Company That Build’s Custom Apps"]}
                customAppDescription="Lorem ipsum dolor sit amet consectetur. Et feugiat pretium ultricies purus ut nunc a. Proin neque amet sed dolor. Non integer arcu sit imperdiet vitae id purus. Nunc leo est ornare donec. Convallis non praesent tristique habitant duis bibendum. In fermentum nibh ultrices pharetra."
                classesProp="new_app"
            />
            <WhyChoose
                whyChooseList={iosWhyChooseList}
                appName="IOS"
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