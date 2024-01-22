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
            <MobilityBanner title="Android"/>
            <div className="overview_bg_layer">
                <Overview
                    overviewTitle="Android Mobile App Development"
                    overviewDescription="Our experience has taught us one thing: user experience is the key component of any successful app. Our team uses native and hybrid technologies for iOS and Android to provide the best performance and experience. Mobile operation systems change rapidly, to help your product take advantage of new features and remain user-friendly, we offer long-term support and upgrade packages for all iOS and Android app designs."
                    overViewList={androidOverViewList}
                />
                <Benefits
                    benefitsList={androidBenefitsList}
                    benefitsTitle={["Benefit from our extensive ", <span><small>.</small>Android app development<small>.</small></span>, " services no matter which ecosystem you choose."]}
                />
            </div>
            <CustomApp
                customAppProcess={androidCustomAppProcess}
                customAppDescription="Lorem ipsum dolor sit amet consectetur. Et feugiat pretium ultricies purus ut nunc a. Proin neque amet sed dolor. Non integer arcu sit imperdiet vitae id purus. Nunc leo est ornare donec. Convallis non praesent tristique habitant duis bibendum. In fermentum nibh ultrices pharetra."
                customAppTitle={["Top ", <span>Android App</span>, " Development Company That Build’s Custom Apps"]}
            />
            <WhyChoose
                whyChooseList={androidWhyChooseList}
                appName="Android"
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