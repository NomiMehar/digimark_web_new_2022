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
                subTitle={["Design, Development, Consultancy"]}
                bannerTitle={["How ", <span className="at-digi">DigiMark</span>, " Developers Work"]}
                bannerDescription={[
                    <p>In our process we always focus on <strong>commitment, quality, bug free product</strong> and delivery before the given time.</p>,
                    <p>We work on a wide range of software projects, we know each project will be different so we approach each project with an open mind and manage each piece of bespoke software in a way that suits the individual project.</p>]}
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