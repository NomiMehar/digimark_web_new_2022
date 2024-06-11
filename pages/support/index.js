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
                overviewDescription="Has it become crucial to maintain mobile apps? Get the updated and bug-free mobile app for your business's success and make the performance better with DigiMark Developers. Being one of the best choices for Support and Maintenance Services, we stand out from others. Achieve business goals by getting technology skills, and an innovative approach from the experts."
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