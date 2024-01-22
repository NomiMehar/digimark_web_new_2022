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
                  <p>We are always excited to discuss innovation and contribute our experience to add value. A right approach and a well framed strategy ensures a major part done and we help you with the same.</p>]}
          />
          <Vacancies/>
          <Perks/>
          <CallToAction/>
          <GetQuote/>
      </div>
  )
}