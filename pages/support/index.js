import React from "react";
import MobilityBanner from "../services/innovation/mobility/android-app-development/android-app-banner/MobilityBanner";
import Overview from "../services/innovation/mobility/android-app-development/app-overview/Overview";
import iosOverViewList from "../services/innovation/mobility/android-app-development/app-overview/iosOverViewList.json";
import Benefits from "../services/innovation/mobility/android-app-development/benefits/Benefits";
import nativeBenefitsList from "../services/innovation/mobility/android-app-development/benefits/nativeBenefitsList.json";
import WhyMaintenance from "./why-maintenance/WhyMaintenance";
import IndustriesList from "../services/innovation/mobility/mobile-development/industries-serve/IndustriesList";
import GetQuote from "../../components/get-quote/GetQuote";
import MaintenanceServices from "./maintenance-services/MaintenanceServices";

export default function Support () {
  return (
    <div className="android-app-development ionic-app-dev">
        <MobilityBanner classes="support_banner" supportBanner={true} />
        <div className="overview_bg_layer overview_native_layer">
            <Overview
                overviewTitle="Mobile App Supports & Maintenance"
                overviewDescription="With the rise in the number of mobile apps and the corresponding escalation in the number of bugs and technology updates, mobile application maintenance becomes indispensable. We provide complete mobile app maintenance service for all type of mobile applications across multiple domains. With extensive technology skills, well define process and innovative approach our team can make your application efficient and successful to achieve your business goals."
                overViewList={iosOverViewList}
                classesProp="white-layout"
                classes="support_overview"
                support={true}
            />
            <WhyMaintenance/>
        </div>
        <MaintenanceServices/>
        <IndustriesList
            titleClass="white"
            overLayClass="colored_overlay"
        />
        <GetQuote/>
    </div>
  );
};