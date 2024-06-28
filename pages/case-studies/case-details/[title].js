import CompanyBanner from "../../company/about-us/company-banner/CompanyBanner";
import React from "react";
import { useRouter } from 'next/router';
import GetQuote from "../../../components/get-quote/GetQuote";
import style from "../../landingpage/Banner/Banner.module.scss";
import CaseTags from "./case-tags/CaseTags";
import TableOfContents from "./table-of-contents/TableOfContents";
import AboutClient from "./about-client/AboutClient";
import CaseSolution from "./case-solution/CaseSolution";
import caseStudiesCardList from "./caseStudyDetail.json";

export default function CaseDetails({ caseStudy }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div className="ionic-app-dev">
            <CompanyBanner
                pageTitle={caseStudy.title}
                classProp="mini_banner"
                extraClass="case_studies_inner"
                bg_text="Work"
                dynamicBread={true}
                breadText="Case Studies"
                bannerDescription={[<p key="desc">{caseStudy.titleDescription}</p>]}
                bg_title={true}
                bannerImage={false}
                subTitle={["CASE STUDIES"]}
                dynamicImage={true}
                dynamicImageUrl={caseStudy.imageLink}
                bannerTitle={[caseStudy.detailPageTitle, " ", <span key="span">{caseStudy.title}</span>]}
                productLink={caseStudy.productLink}
            />
            <CaseTags tags={{
                industry: caseStudy.industry,
                techStack: caseStudy.techStack,
                servicesUsed: caseStudy.servicesUsed
            }} />
                <div className="case_video_section">
                    <video className={style.banner_video} autoPlay loop muted poster="/assets/images/homepage/banner/banner-poster.jpg">
                        <source src={caseStudy.videoLink} type="video/mp4" />
                    </video>
                </div>
            <TableOfContents contents={caseStudy.tableOfContents} />
            <AboutClient aboutClient={{ overview: caseStudy.overview, challenges: caseStudy.challenges }} />
            <CaseSolution caseSolution={{ solution: caseStudy.solution, ImgUrl: caseStudy.ImgUrl, finalConclusion:caseStudy.finalConclusion }} />
            <GetQuote />
        </div>
    );
}


export async function getStaticPaths() {
    const paths = caseStudiesCardList.map(caseStudy => ({
        params: { title: caseStudy.title.replace(/ /g, '-').toLowerCase() }
    }));

    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    const title = params.title.replace(/-/g, ' ').toLowerCase();
    const caseStudy = caseStudiesCardList.find(caseStudy => caseStudy.title.toLowerCase() === title);

    return {
        props: { caseStudy },
        revalidate: 1
    };
}