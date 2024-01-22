import React from "react";
import CompanyBanner from "../about-us/company-banner/CompanyBanner";
import TeamMembers from "./team-members/TeamMembers";
import Join from "../../../components/join/Join";
import GetQuote from "../../../components/get-quote/GetQuote";

export default function Team () {
    return (
        <div className="ionic-app-dev">
            <CompanyBanner
                pageTitle="Our Team"
                classProp="mini_banner"
                bg_text="Team"
                bg_title={true}
                bannerImage={false}
                subTitle="Professionals"
                bannerTitle={["Team Members"]}
                bannerDescription={[
                    <p>We're more than just a group of developers working on clients' projects. We're a family. Together we build great things and help one another grow. We enjoy life, friendship, and products we develop and launch.</p>]}
            />
            <TeamMembers/>
            <Join/>
            <GetQuote classProp="about_wrap"/>
        </div>
    );
};