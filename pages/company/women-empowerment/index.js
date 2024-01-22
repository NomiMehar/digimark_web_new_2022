import Join from "../../../components/join/Join";
import GetQuote from "../../../components/get-quote/GetQuote";
import CompanyBanner from "../about-us/company-banner/CompanyBanner";
import WomenRole from "./women-role/WomenRole";
import OurStory from "../about-us/our-story/OurStory";
import WomenPerks from "./women-perks/WomenPerks";
import WomenInDigimark from "./women-in-digimark/WomenInDigimark";

export default function WomenEmpowerment () {
    return(
        <div className="ionic-app-dev">
            <CompanyBanner
                pageTitle="Women Empowerment"
                classProp="women_banner"
                bg_title={true}
                bannerImage={false}
            />
            <WomenRole/>
            <OurStory
                womenStory={true}
                title={["DigiMark Developers Role in ", <span>Women Empowerment</span>]}
                text={[<p>DigiMark Developers is proud to announce the launch of the Women’s Empowerment Initiative; an initiative that seeks to mentor, motivate and empower women to become leaders in all aspects of their lives.</p>,
                    <p>The fruit of these efforts is evident as most of the company’s leadership roles are held by females. An anomaly in the IT industry, the company has a female majority staff in most of its departments.</p>]}
            />
            <WomenPerks/>
            <WomenInDigimark/>
            <Join/>
            <GetQuote classProp="about_wrap"/>
        </div>
    )
}