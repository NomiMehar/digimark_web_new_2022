import React, {useEffect, useState} from "react";
import style from "./developmentProcess.module.scss";
import AOS from 'aos';
import Image from "next/image";
export default function DevelopmentProcess (props) {
    useEffect(() => {
        AOS.init();
    }, [])
  const [tabs, setTabs] = useState(0);
    return (
        <div className={`flex direction-column ${style.development_wrapper} ${style[props.classes]} ${style[props.extraClass]} ${style[props.ionicClass]}`}>
            <div className="container">
                <div className={`section_title white flex direction-column ${style.section_title}`}  data-aos="fade-up" data-aos-duration="1000">
                    <h2>{props.appName}</h2>
                    {props.name ? <p>{props.name}</p> : <p>Harness the power of modern algorithms with our expert team. Let us create cutting-edge applications that drive your business forward.</p>}
                </div>
                <div className={`flex items-center justify-between ${style.process_tabs}`}>
                    <div className={`flex ${style.process_tabs_content}`} data-aos="fade-right" data-aos-duration="1000">
                      {
                        props.DevelopmentProcessList?.map(({process_number,process_name,process_list,process_description}, index) => {
                          if(tabs===index) {
                            return (
                                <section key={`tab-content-${index}`}>
                                    <span>{process_number}</span>
                                    <h3>{process_name}</h3>
                                    {
                                        props.companyProcess === true? <p>{process_description}</p> :
                                            <ul className="list-none">
                                                {
                                                    process_list?.map((list, index) => {
                                                        return <li key={index}>{list}</li>
                                                    })
                                                }
                                            </ul>
                                    }
                                    {
                                        props.WebDevelopmentProcessList === true? <p>{process_description}</p> :
                                            <></>
                                    }
                                </section>
                            )
                          }
                        })
                      }
                    </div>
                    <div className={`flex direction-column ${style.process_tabs_list}`} data-aos="zoom-in"  data-aos-duration="1000">
                        <ul className="flex direction-column list-none">
                          {
                            props.DevelopmentProcessList?.map(({process_name},index)=>{
                              return(
                                <li key={`customer-${index}`} className="flex justify-center direction-column">
                                    <button
                                        onClick={() => setTabs(index)}
                                        className={` ${ tabs === index ? `${style.active}` : ""}`}
                                    >
                                        {process_name}
                                    </button>
                                </li>
                              )
                            })
                          }
                        </ul>
                    </div>
                    {
                      props.WebDevelopmentProcessList === true? <Image className={style.webProcessImg} src="/assets/images/services/dev_process.svg" width={305} height={715} alt="image" /> :
                      <video className={style.process_video} autoPlay loop muted data-aos="fade-left" data-aos-duration="1000">
                      <source src="/assets/images/services/process.mp4" type="video/mp4" />
                      </video>
                    }
                    
                </div>
            </div>
        </div>
    );
};