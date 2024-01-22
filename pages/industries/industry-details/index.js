import dynamicImageUrl from "../../../public/assets/images/services/monowithimage.png";
import CompanyBanner from "../../company/about-us/company-banner/CompanyBanner";
import React from "react";
import IndustriesAbout from "./IndustriesAbout";
import IndustriesAccordion from "./industries-accordion/IndustriesAccordion";
import IndustriesAdvantages from "./industries-advantages/IndustriesAdvantages";
import IndustriesHealth from "./industries-health/IndustriesHealth";
import GetQuote from "../../../components/get-quote/GetQuote";

export default function IndustryDetails() {
    return(
        <div className="ionic-app-dev">
            <CompanyBanner
                pageTitle="Industries"
                classProp="mini_banner"
                extraClass="industries_banner"
                boxes={true}
                bg_text="Work"
                bg_title={true}
                bannerImage={false}
                subTitle={["CASE STUDIES"]}
                dynamicImage={true}
                dynamicBread={true}
                breadText="Home"
                dynamicImageUrl={dynamicImageUrl}
                bannerTitle={["Advanced technology solutions for ",<br/>,"the ", <span>Healthcare</span>, " Industry"]}
            />
            <IndustriesAbout/>
            <IndustriesAccordion/>
            <IndustriesAdvantages/>
            <IndustriesHealth/>
            <GetQuote/>
        </div>
    )
}