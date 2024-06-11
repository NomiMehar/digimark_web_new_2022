import React from "react";
import style from "./MobilityBanner.module.scss";
import Link from "next/link";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg"
import backArrow from "../../../../../../public/assets/images/services/back.svg"
import Image from "next/image";

export default function MobilityBanner(props) {
  return (
    <div className={`flex items-center product_banner_wrapper ${style[props.classes]} ${style.product_banner_wrapper}`}>
      {
        props.backgroundVideo && <video className={style.banner_bg_video} autoPlay loop muted poster={props.bg_video_poster}><source src={props.bg_bannerUrl} type="video/mp4" /></video>
      }
      {
            props.dynamicBanner === true ?
                <div className="container flex items-center">
                    <div className={`flex direction-column ${style.service_banner_wrapper}`}>
                        <ul className={`list-none flex items-center ${style.breadcrumbs}`}>
                            <li><Image src={backArrow} alt={backArrow} width={32} height={29}/><span>Services</span></li>
                            <li>{props.breadcrumParent}</li>
                            <li><small>{props.breadcrumChild}</small></li>
                        </ul>
                        <h1>{props.bannerTitle}</h1>
                        {props.bannerTextWrap}
                        <Link href="/contact-us/#contactForm" className={`banner_btn ${style.banner_btn}`}>{props.dynamicCTA === true ? `${props.ctaText}` : "Let’s Talk About Your App"} <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                    </div>
                  {
                    props.SideImage === true ? <Image className={style.app_banner_video} src={props.bannerSideImage} alt="banner-image" />:<video className={style.app_banner_video} autoPlay loop muted>
                      <source src="/assets/images/services/service-video.mp4" type="video/mp4" />
                    </video>
                  }
                </div>: <div className="container flex items-center">
                    {
                        props.supportBanner === true ?
                            <div className={`flex direction-column ${style.service_banner_wrapper}`}>
                                <ul className={`list-none flex items-center ${style.breadcrumbs}`}>
                                    <li><Image src={backArrow} alt={backArrow} width={32} height={29}/><span>Services</span></li>
                                    <li><small>Mobility</small></li>
                                </ul>
                                <h1><strong>App</strong> Support & <br/><span>Maintenance</span></h1>
                                <p>DigiMark offers custom testing solutions for all digital products we've created to ensure the quality of the final product is at the highest level.</p>
                                <Link href="/contact-us/#contactForm" className={`banner_btn ${style.banner_btn}`}>Let’s Talk About Your App <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                            </div> :
                            <>
                                <div className={`flex direction-column ${style.service_banner_wrapper}`}>
                                    <ul className={`list-none flex items-center ${style.breadcrumbs}`}>
                                        <li><Image src={backArrow} alt={backArrow} width={32} height={29}/><span>Services</span></li>
                                        <li><small>Mobility</small></li>
                                    </ul>
                                    <h1><span><strong>{props.title}</strong> App</span><br/> Development</h1>
                                    <p>{props.para}</p>
                                    <Link href="/contact-us/#contactForm" className={`banner_btn ${style.banner_btn}`}>Let’s Talk About Your App <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                                </div>
                                <video className={style.app_banner_video} autoPlay loop muted>
                                    <source src="/assets/images/services/service-video.mp4" type="video/mp4" />
                                </video>
                            </>
                    }
                </div>
        }
    </div>
  );
}
