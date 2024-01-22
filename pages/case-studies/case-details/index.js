import CompanyBanner from "../../company/about-us/company-banner/CompanyBanner";
import React from "react";
import dynamicImageUrl from "../../../public/assets/images/services/monowithimage.png"
import GetQuote from "../../../components/get-quote/GetQuote";
import style from "../../landingpage/Banner/Banner.module.scss";
import CaseTags from "./case-tags/CaseTags";
import TableOfContents from "./table-of-contents/TableOfContents";
import AboutClient from "./about-client/AboutClient";
import CaseSolution from "./case-solution/CaseSolution";

export default function CaseStudies () {
    return (
        <div className="ionic-app-dev">
            <CompanyBanner
                pageTitle="Website Design"
                classProp="mini_banner"
                extraClass="case_studies_inner"
                bg_text="Work"
                dynamicBread={true}
                breadText="Case Studies"
                bannerDescription={[<p>Lorem ipsum dolor sit amet consectetur. Porttitor dignissim egestas dolor arcu viverra facilisi. Sed aliquam posuere risus ultrices. Turpis adipiscing ipsum leo est ac eget et risus sed. Tellus sem lacus lectus mus orci.</p>]}
                bg_title={true}
                bannerImage={false}
                subTitle={["CASE STUDIES"]}
                dynamicImage={true}
                dynamicImageUrl={dynamicImageUrl}
                bannerTitle={["Website For ", <span>Real Estate Agency</span>]}
            />
            <CaseTags/>
            <div className="case_video_section">
                <video className={style.banner_video} autoPlay loop muted poster="/assets/images/homepage/banner/banner-poster.jpg">
                    <source src="/assets/images/homepage/banner/intro.mp4" type="video/mp4" />
                </video>
            </div>
            <TableOfContents/>
            <AboutClient/>
            <CaseSolution/>
            <GetQuote/>
        </div>
    )
}