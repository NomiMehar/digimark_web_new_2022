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
                    <p>Besides technological expertise, we value interpersonal skills and team spirit. Based on our long-term partnership we can say with confidence, that this approach does miracles!</p>,
                <p>Using talented people from the business world, we create experiences that leave you with actionable insights that will drive your business forward.</p>]}
            />
            <Events/>
            <InHouseSession/>
            <EventGallery/>
            <GetQuote/>
        </div>
    )
}