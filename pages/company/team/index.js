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
                    <p>At DigiMark, we are grateful for our amazing team who are dedicated to putting clients first. Our expertise, vision and loyalty allow us to consistently deliver high-quality and value-packed solutions to our clients.</p>]}
            />
            <TeamMembers/>
            <Join/>
            <GetQuote classProp="about_wrap"/>
        </div>
    );
};