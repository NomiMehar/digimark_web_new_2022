import React from 'react'
import GetQuote from '../../components/get-quote/GetQuote'
import MobilityBanner from '../services/innovation/mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../services/innovation/mobility/android-app-development/faq/Faqs'
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
                <MobilityBanner classes="augmentation_banner"
                    dynamicBanner={true}
                    breadcrumParent="Innovation"
                    breadcrumChild="AI Consulting"
                    bannerTitle={[
                        "Our Software Development ", <br />,
                        <span>
                            <strong>Engagement Models</strong>
                        </span>
                    ]}
                    dynamicCTA={true}
                    ctaText="Let’s Talk About Your Project"
                    SideImage={true}
                    bannerSideImage={bannerSideImage}
                    bannerTextWrap={[
                        <p>We offer flexible cooperation models and diverse engagement models to ensure delivering high-performance solutions through a transparent workflow.</p>,
                    ]} />
                <Overview
                    overviewTitle="Success Measured: A Look at Our Impact"
                    overviewDescription="We showcase our expertise and proven track record through exceptional deliverables."
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
