import React from 'react'
import GetQuote from '../../components/get-quote/GetQuote'
import MobilityBanner from '../services/innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from './faq/Faqs'
import bannerSideImage from '../../public/assets/images/services/augmentation.svg'
import Overview from '../services/innovation/mobility/android-app-development/app-overview/Overview'
import engangementOverViewList from '../services/innovation/mobility/android-app-development/app-overview/engangementOverViewList.json'
import HiringModal from './hiring-modals/HiringModal'
import PerksOfWorking from './perks-of-working/PerksOfWorking'
import DedicatedTeam from './dedicated-team/DedicatedTeam'
import TechnologyStack from './technology-stack/TechnologyStack'
export default function index() {
    return (
        <>
            <div className="android-app-development ionic-app-dev">
                <MobilityBanner classes="engagementsModel"
                    dynamicBanner={true}
                    breadcrumParent="Home"
                    breadcrumChild="Engagement Models"
                    bannerTitle={[
                        "The ",
                        <span>
                        <strong>Engagement Models</strong>
                    </span>, <br/>," We Use for Software",<br/>," Development Projects",
                    ]}
                    dynamicCTA={true}
                    ctaText="Let’s Talk About Your Project"
                    SideImage={true}
                    bannerSideImage={bannerSideImage}
                    bannerTextWrap={[
                        <p>We provide a variety of cooperation and engagement models to guarantee the delivery of high-performance solutions through a clear workflow.</p>,
                    ]} />
                <Overview
                    overviewTitle="Measuring Success: Examining Our Influence"
                    overviewDescription="We demonstrate our skills and established history of success through outstanding outcomes."
                    overViewList={engangementOverViewList}
                    classesProp="skin-layout"
                />
                <HiringModal />
                <DedicatedTeam />
                <TechnologyStack />
                <PerksOfWorking />
                <Faqs />
                <GetQuote />
            </div>
        </>
    )
}
