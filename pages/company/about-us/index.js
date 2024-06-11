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
                bannerTitle={["Our sole mission is: \n", <span>Facilitate SMBs</span>,
                " to solve complex business problems," +
                " build great products, " +
                "and transform businesses digitally."]}
                bannerDescription={[
                    <p>We're a dynamic team of digital solution providers dedicated to creating innovative IT solutions that empower businesses to succeed in today’s digital world. </p>,
                    <p>With our passion for innovation and expertise, we're in the perfect position to analyze your needs and deliver industry-focused solutions that help businesses reach their goals.
                    </p>]}
            />
            <QuickFacts/>
            <OurStory
                title={[<span>Our Story</span>]}
                text={[<p>In 2017, a Software Engineer and IT Business Consultant started DigiMark Developers Consulting Services to assist Small and Medium-sized businesses by implementing digital software systems. By leveraging the latest technology, our goal is to help these enterprises improve their management processes. We believe that every business has unique IT needs and we provide customized and innovative solutions, and services at affordable prices.</p>,
                    <p>Our focus is on empowering the smallest companies with powerful systems to overcome any business challenge. We offer high-quality technology consulting, customized web solutions, individual software, and mobile app development. Our approach combines smart and relevant data with an agile methodology to tackle any client's complex challenges and accelerate the digital impact across any industry. Our team includes programming experts and marketing consultants, offering a unique combination of skills and abilities. 
                        <br />
                        We're dedicated to our goal of building a better tomorrow for your business.
                    </p>
                ]}
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