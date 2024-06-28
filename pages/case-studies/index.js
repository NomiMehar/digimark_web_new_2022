import CompanyBanner from "../company/about-us/company-banner/CompanyBanner";
import React from "react";
import LetsTalk from "../landingpage/LetsTalk/LetsTalk";
import dynamicImageUrl from "../../public/assets/images/services/monowithimage.png"
import CaseStudiesCards from "./case-studies-cards/CaseStudiesCards";
import OurProducts from "../landingpage/OurProducts/OurProducts";

export default function CaseStudies () {
    return (
        <div className="">
            <CompanyBanner
                pageTitle="How we work"
                classProp="mini_banner"
                extraClass="case_studies"
                bg_text="Work"
                bg_title={true}
                bannerImage={false}
                subTitle={["CASE STUDIES"]}
                dynamicImage={true}
                dynamicImageUrl={dynamicImageUrl}
                bannerTitle={["We have helped ", <span>200+</span>, <br/>, "companies progress with ", <span>tech solutions</span>]}
            />
            <CaseStudiesCards/>
            <OurProducts/>
            <LetsTalk/>
        </div>
    )
}