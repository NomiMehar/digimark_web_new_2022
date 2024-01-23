import CompanyBanner from "../about-us/company-banner/CompanyBanner";
import DevelopmentProcess from "../../services/innovation/mobility/android-app-development/development-process/DevelopmentProcess";
import React from "react";
import ComapnyDevelopmentProcessList from "../../services/innovation/mobility/android-app-development/development-process/ComapnyDevelopmentProcessList.json";
import AchieveSuccess from "./achieve-success/AchieveSuccess";
import GetQuote from "../../../components/get-quote/GetQuote";
import EngagementModels from "./engagement-models/EngagementModels";
import ManagementTools from "./management-tools/ManagementTools";
import PerksOfWorking from "../../services/innovation/mobility/android-app-development/perks-of-working/PerksOfWorking";
import benefitsOfWorkingList from "../../services/innovation/mobility/android-app-development/perks-of-working/benefitsOfWorkingList.json";
import EngagementBanner from "./engagement-banner/EngagementBanner";

export default function HowWeAre () {
    return (
        <div className="ionic-app-dev">
            <CompanyBanner
                pageTitle="How we work"
                classProp="mini_banner"
                bg_text="Work"
                bg_title={true}
                bannerImage={false}
                subTitle={["Development, Consultation, Optimization"]}
                bannerTitle={["How ", <span className="at-digi">DigiMark</span>, " Developers Work"]}
                bannerDescription={[
                    <p>At DigiMark, we leverage our <strong>extensive experience and talented resource</strong> pool to deliver top-notch IT services for businesses globally.</p>,
                    <p>We're experts at transforming unique business challenges into strategic opportunities. Over the years, we have successfully maintained the trust of our customers and established long-term relationships.</p>]}
            />
            <DevelopmentProcess
                appName={["Our ", <span>Proven Process,</span>, " Products Results"]}
                DevelopmentProcessList={ComapnyDevelopmentProcessList}
                companyProcess={true}
                classes="company_process"
            />
            <AchieveSuccess/>
            <PerksOfWorking workingBenfits={true} data={benefitsOfWorkingList} appName="Benefits" classes="working_benefits"/>
            <EngagementBanner/>
            <EngagementModels/>
            <ManagementTools/>
            <GetQuote/>
        </div>
    )
}