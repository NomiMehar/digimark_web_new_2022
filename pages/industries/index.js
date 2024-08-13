import dynamicImageUrl from "../../public/assets/images/services/monowithimage.webp";
import CompanyBanner from "../company/about-us/company-banner/CompanyBanner";
import React from "react";
import IndustriesAbout from "./industries-about/IndustriesAbout";
import IndustriesServe from "./industries-serve/IndustriesServe";
import LetsTalk from "../landingpage/LetsTalk/LetsTalk";
import OurProducts from "../landingpage/OurProducts/OurProducts";
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
                bannerTitle={["DigiMark Developers assist high-tech ",<br/>," industries in ", <span>unlocking growth</span>, " and offer end-to-end solutions for tech and business requirements. "]}
            />
            <IndustriesAbout/>
            <IndustriesServe/>
            <OurProducts />
            <LetsTalk
                extraClass="change_bg"
            />
        </>
    )
}