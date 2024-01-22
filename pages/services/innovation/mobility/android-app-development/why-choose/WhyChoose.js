import React, {useEffect} from "react";
import style from "./whyChoose.module.scss";
import Image from "next/image";
import AOS from 'aos';
import SliderVersion from "./SliderVersion";

export default function WhyChoose(props) {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <div className={`flex direction-column ${style[props.classesProp]} ${style.why_choose_wrapper}`}>
        <div className="container">
            {
                props.nftService === true ? 
                <div className="section_title flex direction-column"
                         data-aos="fade-up"
                         data-aos-duration="2000">
                            <h2><span>NFT Development</span> Services</h2>
                </div> :
                <>
                    {
                        props.mobileDev === true ?
                            <div
                                className="section_title extend-title flex direction-column"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <h2>What makes <span>a mobile app successful?</span></h2>
                                <p>With over 7 years of experience developing custom mobile apps, DigiMark Developers Group has found out essential characteristics that distinguish great apps.</p>
                            </div> :
                            <div className="section_title flex direction-column"
                                 data-aos="fade-up"
                                 data-aos-duration="1000">
                                { props.ionicShow ?null:
                                    props.ionic === true ?
                                        <h2>Build Digital Experiences with <br/><span>Ionic Application</span> Development</h2> :
                                        <h2>Why Choose <span>{props.appName} Application</span> Development Services</h2>
                                }
                                { props.ionicShow ?null: <p>Combine custom tech solutions and business objectives to reach the world’s largest mobile app market</p>}
                            </div>
                    }
                </>
            }
            {props.metaverse ? <div
                        className="section_title extend-title flex direction-column"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <h2>Our Best <span>Metaverse</span> Development Services</h2>
                        <p>We deliver futuristic Metaverse solutions conforming to the dynamic consumer needs.</p>
                    </div>:<div
                        className={`section_title extend-title flex direction-column ${style.metaverse_title}`}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <h2>Why <span>Hire DigiMark Developers</span> as Your Metaverse Development Company?</h2>
                        <p>With our years of experience in building immersive applications, we can serve as a strong metaverse software development service partner that can take your project off the ground and lead it towards success.</p>
                    </div>
            }
            {
                props.mobileDev === true ? <h3 data-aos="fade-right" data-aos-duration="1000" className={style.title}>Our mobile apps are:</h3> : ""
            }
            {
                props.sliderVersion === true ? <SliderVersion/> :
                <div className={style.choose_services}>
                    <ul className="list-none flex flex-wrap">
                        {
                            props.whyChooseList?.map(({whyChooseIcon,whyChooseTitle,whyChooseDetail,duration}, index)=>{
                                return(
                                    <li
                                        className="flex direction-column items-center"
                                        key={`choose-${index}`}
                                        data-aos="fade-up"
                                        data-aos-duration={duration}
                                    >
                                        {
                                            props.mobileDev === true ? "" : <figure><Image src={whyChooseIcon} alt={whyChooseIcon} width={88} height={84} /></figure>
                                        }
                                        <h3>{whyChooseTitle}</h3>
                                        <p>{whyChooseDetail}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    </div>
  );
}
