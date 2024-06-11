import React, {useEffect} from "react";
import caseStudy from "./caseStudy.json"
import style from "./caseStudy.module.scss";
import Image from "next/image";
import Link from "next/link";
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import mobile from "../../../../../../public/assets/images/services/phone.svg";
import AOS from 'aos';

export default function CaseStudy(props) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className={`flex direction-column ${style[props.classProp]} ${style.case_study_wrapper}`}>
        {
            caseStudy.map(({caseStudyTheme,caseStudyTitle,caseStudyDr,caseStudyDetail},index)=>{
                return (
                    <div className={`${style.box_cases} ${caseStudyTheme}`} key={index}>
                        <div className="container">
                            <div className={`${style.case_clip}`}>
                                <div className={`${style.fixed_wrap}`}>
                                    <div className={`${style.gallery_wrapper}`}>
                                        <div className={`${style.screen_wrap}`}>
                                            <Image src={mobile} alt={mobile} width={311} height={634} />
                                            <div className={style.screen_clip_wrap}>
                                                <div className={`screen-${index} ${style.screen}`}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`flex justify-between items-center ${style.case_study_content}`}>
                                <div className={`${style.left_column}`} data-aos="fade-right"  data-aos-duration="1000">
                                    <span>Case Study</span>
                                    <h3>{caseStudyTitle}</h3>
                                  {
                                    props.classProp === "ios_casestudy" ?
                                        <p>We successfully addressed client threats & offered them the best Custom Software Solutions where they were able to keep records of the patients, billing, appointments, and other administrative tasks. 
                                        </p> : ""
                                  }
                                    <Link href="/case-studies" className={`contact_btn ${style.contact_btn}`}>Read Our Case Study <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                                </div>
                                <div className={`${style.img_column}`}>
                                </div>
                                <div className={`${style.right_column}`} data-aos="fade-left" data-aos-duration="1000">
                                    <p>{caseStudyDetail}</p>
                                    <small>{caseStudyDr}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  );
}
