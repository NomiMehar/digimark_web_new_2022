import style from "./MetaverseFoundation.module.scss";
import metaverseFoundationList from "./MetaverseFoundationList.json";
import AOS from "aos";
import { useEffect } from "react";

export default function MetaverseFoundation() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className={style.metaverse_foundation}>
           <div className="container">
           <div
                className={`section_title extend-title flex direction-column ${style.metaverse_title}`}
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <h2>
                Our <span>Technological Foundation</span>
                </h2>
                <p>
                We utilize the latest technologies to provide robust, secure, and user-oriented Metaverse App Development Services that provide you exclusive access to interactive virtual experiences. We aim to identify and develop innovations to keep products market-competitive and scalable. 
                </p>
            </div>
            <div className={`flex native_version ${style.native_version}`}>
                <div className="container">
                    <div className={`flex ${style.tech_part}`}>
                        <div
                            className={`flex direction-column ${style.native_heading_version}`}
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <h2>
                                Blockchain <span>Technology</span> Platform
                            </h2>
                        </div>
                        <div
                            className={`flex direction-column ml-auto ${style.lang_wrapper}`}
                        >
                            <section>
                                <ul className="list-none flex">
                                    {metaverseFoundationList.map(({ langIcon }, index) => {
                                        return (
                                            <li
                                                key={index}
                                                data-aos="flip-left"
                                                data-aos-duration="1000"
                                            >
                                                <img src={langIcon} alt={langIcon} />
                                            </li>
                                        );
                                    })}
                                </ul>
                            </section>
                        </div>
                    </div>
                    <span className={style.line}></span>
                    <div className={`flex ${style.tech_part}`}>
                        <div
                            className={`flex direction-column ${style.native_heading_version}`}
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <h2>
                                <span>Technology</span> Stack
                            </h2>
                        </div>
                        <div
                            className={`flex direction-column ml-auto ${style.lang_wrapper}`}
                        >
                            <section>
                                <ul className="list-none flex">
                                    {metaverseFoundationList.map(({ langIcon }, index) => {
                                        return (
                                            <li
                                                key={index}
                                                data-aos="flip-left"
                                                data-aos-duration="1000"
                                            >
                                                <img src={langIcon} alt={langIcon} />
                                            </li>
                                        );
                                    })}
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
}
