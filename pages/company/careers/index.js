import CompanyBanner from "../about-us/company-banner/CompanyBanner";
import React from "react";
import Vacancies from "./vacancies/Vacancies";
import GetQuote from "../../../components/get-quote/GetQuote";
import Perks from "./perks/Perks";
import CallToAction from "./call-to-action/CallToAction";

export default function Careers () {
  return(
      <div className="ionic-app-dev">
          <CompanyBanner
              pageTitle="Careers"
              classProp="mini_banner"
              bg_text="Team"
              bg_title={false}
              bannerImage={false}
              careersImage={true}
              subTitle="We are"
              bannerTitle={["Hiring."]}
              bannerDescription={[
                  <p> Join our team and be a part of something great! Digi Mark seeks trustworthy, pragmatic, and reliable people who possess a unique balance of technical depth and strong interpersonal skills.
                  </p>]}
          />
          <Vacancies/>
          <Perks/>
          <CallToAction/>
          <GetQuote/>
      </div>
  )
}