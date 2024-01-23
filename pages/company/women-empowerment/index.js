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
                text={[<p>At DigiMark Developers, we're committed to empowering women to take leadership roles. Our Women's Empowerment Initiative offers training, mentorship, and support to help women excel in the tech industry!</p>,
                    <p>We take pride in our predominantly female leadership roles, showcasing our dedication to gender diversity. We firmly believe that investing in women's potential is advantageous for our company and society as a whole.</p>]}
            />
            <WomenPerks/>
            <WomenInDigimark/>
            <Join/>
            <GetQuote classProp="about_wrap"/>
        </div>
    )
}