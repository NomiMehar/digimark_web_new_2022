import style from "./engagementBanner.module.scss"
import Banner from "../../../../public/assets/images/company/engagement_banner.png"
import Image from "next/image";

export default function EngagementBanner () {
    return(
        <div className={style.engagement_banner}>
                <Image src={Banner} alt={Banner}/>
        </div>
    )
}