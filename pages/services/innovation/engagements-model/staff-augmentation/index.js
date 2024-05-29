import React from 'react'
import GetQuote from '../../../../../components/get-quote/GetQuote'
import MobilityBanner from '../../mobility/android-app-development/android-app-banner/MobilityBanner'
import Faqs from '../../mobility/android-app-development/faq/Faqs'
import bannerSideImage from '../../../../../public/assets/images/services/augmentation.svg'
import Overview from '../../mobility/android-app-development/app-overview/Overview'
import augmentOverViewList from '../../mobility/android-app-development/app-overview/augmentOverViewList.json'
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
                        "Augment your IT team with", <br />,
                        <span>
                            <strong>DigiMark Developers</strong>
                        </span>
                    ]}
                    dynamicCTA={true}
                    ctaText="Let’s Talk About Your Project"
                    SideImage={true}
                    bannerSideImage={bannerSideImage}
                    bannerTextWrap={[
                        <p>Need skilled software teams to fill talent gaps? Our IT Staff Augmentation offers ready-to-go AI teams for your business needs.</p>,
                    ]} />
                <Overview
                    overviewTitle="Our Impact In Numbers"
                    overviewDescription="This highlights our skills, experience, and quality of work, demonstrating our commitment to excellence."
                    overViewList={augmentOverViewList}
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
