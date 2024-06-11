import React, {useEffect} from "react";
import style from "./customList.module.scss";
import Image from "next/image";
import Link from "next/link";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import AOS from 'aos';
import Sticky from 'react-stickynode';

export default function CustomApp(props) {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
      <>
          <div className={`flex direction-column items-start ${props.classProp} ${style[props.classProp]} ${style.custom_app_wrapper}`}>
            <div className="container">
                <div className={`flex items-start customs_app_wrap ${style.customs_app_wrap}`}>
                    <Sticky enabled={true} top={50} bottomBoundary=".customs_app_wrap">
                    <div className={`customs_app_title flex direction-column ${style.customs_app_title}`}
                         data-aos="fade-right"
                         data-aos-offset="300">
                            <h2>{props.customAppTitle}</h2>
                            <p>{props.customAppDescription}</p>
                            <Link href="/contact-us/#contactForm" className={`contact_btn`}>schedule An App Expert Session <Image src={whiteArrow} alt={whiteArrow} width={13} height={16  } /></Link>
                    </div>
                    </Sticky>
                    <div className={`${style[props.classesProp]} ${style.custom_app_list}`}>
                        <ul className="list-none flex direction-column">
                            {
                                props.customAppProcess?.map(({customAppNumber, customAppIcon, customAppTitle,customAppDetail},index)=> {
                                    return(
                                        <li className="flex direction-column" key={`list-${index}`}
                                            data-aos="fade-up"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine"
                                        >
                                            <figure className="flex items-center">
                                                {props.classProp === "native_custom_app" ?
                                                "" : <span>{customAppNumber}</span>
                                                }
                                                <figcaption>
                                                    <Image src={customAppIcon} alt={customAppIcon} width="35" height="35" />
                                                </figcaption>
                                            </figure>
                                            <h3>{customAppTitle}</h3>
                                            <p>{customAppDetail}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        {props.classProp === "native_custom_app" ?
                            <Link href='/pages' className={`contact_btn ${style.contact_btn}`}>
                                schedule An App Expert Session
                                <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} />
                            </Link> : ""
                        }
                    </div>
                </div>
            </div>
        </div>
      </>
  );
}
