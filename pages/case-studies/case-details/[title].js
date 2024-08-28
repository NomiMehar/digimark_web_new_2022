import CompanyBanner from "../../company/about-us/company-banner/CompanyBanner";
import React from "react";
import { useRouter } from 'next/router';
import GetQuote from "../../../components/get-quote/GetQuote";
import style from "../../landingpage/Banner/Banner.module.scss";
import CaseTags from "../case-details/case-tags/CaseTags";
import TableOfContents from "../case-details/table-of-contents/TableOfContents";
import AboutClient from "../case-details/about-client/AboutClient";
import CaseSolution from "../case-details/case-solution/CaseSolution";
import caseStudiesCardList from "../case-details/caseStudyDetail.json";
import OurProducts from "../../landingpage/OurProducts/OurProducts";
import Image from "next/image";

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
                    {caseStudy.videoLink ? (
                        <video className={style.banner_video} autoPlay loop muted poster="/assets/images/homepage/banner/banner-poster.webp">
                        <source src={caseStudy.videoLink} type="video/mp4" />
                        </video>
                    ) : (
                        <img src={caseStudy.mainImg} alt="Default Image" />
                    )}
                    </div>
            <TableOfContents contents={caseStudy.tableOfContents} />
            <AboutClient aboutClient={{ overview: caseStudy.overview, challenges: caseStudy.challenges }} />
            <CaseSolution caseSolution={{ solution: caseStudy.solution, ImgUrl: caseStudy.ImgUrl, finalConclusion:caseStudy.finalConclusion }} />
            <OurProducts/>
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

    if (!caseStudy) {
        return { notFound: true };
    }

    return {
        props: { caseStudy },
        revalidate: 1
    };
}