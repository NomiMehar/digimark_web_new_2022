import style from "./aboutClient.module.scss"
import React from "react";
import Image from "next/image";
import mapImage from "../../../../public/assets/images/case-study/map.png"

export default function AboutClient() {
    return(
        <>
            <div className={style.case_about_client}>
                <div className="container items-center flex flex-wrap">
                    <section>
                        <h2>About the client</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Porttitor dignissim egestas dolor arcu viverra facilisi. Sed aliquam posuere risus ultrices. Turpis adipiscing ipsum leo est ac eget et risus sed. Tellus sem lacus lectus mus orci.</p>
                        <span>Location: <small>Switzerland</small></span>
                    </section>
                    <Image src={mapImage} alt="mapImage"/>
                </div>
            </div>
            <div className={style.challenges_faced}>
                <div className="container">
                    <h2><span>Challenges Faced</span></h2>
                    <p>The biggest challenge of the project was to make sure it is compliant with all regulatory requirements for the Healthcare industry:</p>
                    <ul className="list-none">
                        <li><span>Crossfunctional and diversified team: </span> continuous improvements on the data science side that should be synchronously implemented by Front-End & Back-End teams.</li>
                        <li><span>High non-functional requirements: </span> additionally to security, processing enormous datasets, and constant improvement of the system capacity. Stress tests of the system.</li>
                        <li>
                            <p>Integration of new features with the old ones such as:</p>
                            <small>- adding new user types</small>
                            <small>- integrating the new payment system</small>
                            <small>- complex UI/UX upgrade</small>
                            <small>- gamification elements</small>
                            <small>- and many more</small>
                            <br/>
                            <p>Constantly changing business requirements and agility of development.</p>
                        </li>
                    </ul>
                    <p><span>Other challenges</span> we had to overcome consisted in making it possible for users to not only download files but also edit them.</p>
                    <p>After improving the design and already existing functions, we had to smoothly develop the new features with our product development team enabling quick document search and sorting, compiling all records, and downloading/editing the needed information.</p>
                </div>
            </div>
        </>
    )
}