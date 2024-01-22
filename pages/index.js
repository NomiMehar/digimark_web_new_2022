import Banner from "./landingpage/Banner/Banner";
import Companies from "./landingpage/Comapnies/Companies";
import WhoWeAre from "./landingpage/WhoWeAre/WhoWeAre";
import OurServices from "./landingpage/OurServices/OurServices";
import OurProducts from "./landingpage/OurProducts/OurProducts";
import EngagementModels from "./landingpage/EngagementModels/EngagementModels";
import CustomerTalks from "./landingpage/CustomerTalks/CustomerTalks";
import WhatWeOffer from "./landingpage/WhatWeOffer/WhatWeOffer";
import OurIndustries from "./landingpage/OurIndustries/OurIndustries";
import Expertise from "./landingpage/Banner/Expertise";
import React from "react";
import LetsTalk from "./landingpage/LetsTalk/LetsTalk";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Expertise/>
      <WhoWeAre />
      <OurServices />
      <div
        data-aos="fade-in"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2000"
        >
        <OurIndustries />
      </div>
      <Companies />
      <EngagementModels />
      <CustomerTalks />
      <OurProducts />
      <WhatWeOffer />
      <LetsTalk />
    </>
  );
};

export default HomePage;
