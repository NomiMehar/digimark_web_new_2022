import CompanyBanner from "../about-us/company-banner/CompanyBanner";
import Events from "./events/Events";
import InHouseSession from "./inhouse-session/InHouseSession";
import Join from "../../../components/join/Join";
import GetQuote from "../../../components/get-quote/GetQuote";
import EventGallery from "./event-gallery/EventGallery";

export default function LifeAtDigimark () {
    return (
        <div className="ionic-app-dev">
            <CompanyBanner
                pageTitle="Life @DigiMark Developers"
                classProp="mini_banner"
                bg_text="LIFE"
                bg_title={true}
                bannerImage={false}
                subTitle="Community"
                bannerTitle={["Life ", <span className="at-digi">@</span>, " DigiMark Developers"]}
                bannerDescription={[
                    <p>Our Learning Resources Are Primed To Keep You In Touch With The Latest Trends In The World Of Tech & Entrepreneurship.</p>,
                <p>Bringing The Most Talented People From The World Of Business, We Strive To Create Experiences That Stay With You and Help You Devise Actionable Insights In Order To Power Your Business Forward.</p>]}
            />
            <Events/>
            <InHouseSession/>
            <EventGallery/>
            <GetQuote/>
        </div>
    )
}