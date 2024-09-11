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
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Digimark Developers | Your Innovative Solution Partner</title>
        <meta name="description" content="Your Innovative Solution Partner." />
        <link rel="shortcut icon" href="/assets/images/header/favicon.webp" type="image/x-icon" />
        <meta property="og:title" content="Digimark Developers" />
        <meta property="og:description" content="Your Innovative Solution Partner." />
        <meta property="og:image" content="/assets/images/header/favicon.webp" />
        <meta name="twitter:title" content="Digimark Developers" />
        <meta name="twitter:description" content="Your Innovative Solution Partner." />
        <meta name="twitter:image" content="/assets/images/header/favicon.webp" />
      </Head>
     
      <Companies />
      <EngagementModels />
      <CustomerTalks />
      <OurProducts />
      {/* <WhatWeOffer /> */}
      <LetsTalk />
    </>
  );
};

export default HomePage;
