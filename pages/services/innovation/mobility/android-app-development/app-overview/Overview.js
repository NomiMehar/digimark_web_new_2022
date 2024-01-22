import React, {useEffect} from "react";
import style from "./Overview.module.scss";
import CountUp from "react-countup";
import Image from "next/image";
import AOS from 'aos';
import VisibilitySensor from 'react-visibility-sensor';

export default function Overview(props) {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <div className={`flex direction-column ${style[props.classesProp]} ${style[props.classes]} ${style.overview_wrapper}`}>
        <div className={`${style.overview_content}`}>
            <span>OVERVIEW</span>
            <h2>{props.overviewTitle}</h2>
            <p>{props.overviewDescription}</p>
            {
                props.support === true ? "" :
                    <ul className="list-none flex">
                        {
                            props.overViewList?.map(({overViewImage,overViewCount,overViewSign,overViewDescription},index)=> {
                                return(
                                    <li className="flex" key={`overview-${index}`}
                                        data-aos="flip-right"
                                        data-aos-duration="2000"
                                    >
                                        <figure className="flex items-center justify-center">
                                            <Image src={overViewImage} alt={overViewImage} width="30" height="30" />
                                        </figure>
                                        <section>
                                    <span>
                                        <CountUp end={overViewCount} duration={10}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start}>
                                                    <small ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                          </CountUp>{" "}
                                        {overViewSign}
                                    </span>
                                            <p>{overViewDescription}</p>
                                        </section>
                                    </li>
                                )
                            })
                        }
                    </ul>
            }
        </div>
    </div>
  );
}
