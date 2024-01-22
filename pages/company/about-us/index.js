import React from "react";
import CompanyBanner from "./company-banner/CompanyBanner";
import QuickFacts from "./quick-facts/QuickFacts";
import OurStory from "./our-story/OurStory";
import OurVision from "./our-vision/OurVision";
import CoreValue from "./core-value/CoreValue";
import Companies from "../../landingpage/Comapnies/Companies";
import CustomerTalks from "../../landingpage/CustomerTalks/CustomerTalks";
import OurProducts from "../../landingpage/OurProducts/OurProducts";
import GetQuote from "../../../components/get-quote/GetQuote";

export default function AboutUs () {
    return (
        <div className="ionic-app-dev">
            <CompanyBanner
                pageTitle="About Us"
                subTitle=""
                bannerTitle={["We are here solely for one thing: \n", <span>Help SMBs</span>,
                " achieve sustainable growth," +
                "reach their milestones and make their " +
                "digital products unique."]}
                bannerDescription={[
                    <p>By supplying high-quality software engineers and all our background expertise in many industries, we aim to change people's life by partnering with North American & European businesses.</p>,
                    <p>Our mission is simple: Become and be considered the Nº 1 technology partner based in LatAm for companies seeking to scale their in-house software development capabilities.</p>]}
            />
            <QuickFacts/>
            <OurStory
                title={[<span>Our Story</span>]}
                text={[<p>In 2017, Software Engineer and IT Business Consultant started DigiMark Developers Consulting Services after realizing the difficulties that Small and Medium Business owners faced when looking to implement a digital Software System at their company. with the goal of helping these Small and Medium Enterprises improve and streamline their management processes by leveraging the latest technologies developed by the team of software engineers and business experts.</p>,
                    <p>Our main focus was to offer efficient solutions and services at affordable prices, all through a customized experience, so that even the smallest companies are well equipped with powerful systems and ready to tackle any business challenge. The company’s belief is that every business has unique IT needs that can only be truly met by treating each and every customer as a valued partner. Digitization of information and storing it online will not only save space but also integrate and centralize it so that it is easy to access for those who need it.</p>]}
            />
            <OurVision/>
            <CoreValue/>
            <Companies classProp="colored_bg" />
            <CustomerTalks classProp="transparent-bg" />
            <OurProducts classProp="transparent-bg" />
            <GetQuote classProp="about_wrap"/>
        </div>
    );
};