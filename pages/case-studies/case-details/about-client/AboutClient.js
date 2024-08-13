import style from "./aboutClient.module.scss"
import React from "react";
import Image from "next/image";
import mapImage from "../../../../public/assets/images/case-study/map.webp"

export default function AboutClient({ aboutClient }) {
    if (!aboutClient) {
        return <p>Data is not available.</p>;
    };
    const { overview = "", challenges = [] } = aboutClient; // Default values
    return (
        <>
            <div className={style.case_about_client}>
                <div className="container items-center flex flex-wrap">
                    <section>
                        <h2>Overview</h2>
                        <p>{overview}</p>
                    </section>
                </div>
            </div>
            <div className={style.challenges_faced}>
                <div className="container">
                    <h2><span>Challenges & Expectations</span></h2>
                    <ul className="list-none">
                    {challenges.map((tech, index) => (
                            <li key={index}><p>{tech}</p></li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
