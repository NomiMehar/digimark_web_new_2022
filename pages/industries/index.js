import dynamicImageUrl from "../../public/assets/images/services/monowithimage.png";
import CompanyBanner from "../company/about-us/company-banner/CompanyBanner";
import React from "react";
import IndustriesAbout from "./industries-about/IndustriesAbout";
import IndustriesServe from "./industries-serve/IndustriesServe";
import LetsTalk from "../landingpage/LetsTalk/LetsTalk";
import IndustriesLogo from "./industries-logo/IndustriesLogo";

export default function Industries() {
    return(
        <>
            <CompanyBanner
                pageTitle="Industries"
                classProp="mini_banner"
                extraClass="industries_banner"
                bg_text="Work"
                bg_title={true}
                bannerImage={false}
                subTitle={["CASE STUDIES"]}
                dynamicImage={true}
                dynamicBread={true}
                breadText="Home"
                dynamicImageUrl={dynamicImageUrl}
                bannerTitle={["We deliver real value to clients because of our ",<br/>," deep knowledge of the ", <span>industries</span>, " in which they operate"]}
            />
            <IndustriesAbout/>
            <IndustriesServe/>
            <IndustriesLogo/>
            <LetsTalk
                extraClass="change_bg"
            />
        </>
    )
}