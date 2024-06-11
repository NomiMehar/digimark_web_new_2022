import style from "../about-client/aboutClient.module.scss"
import React from "react";

export default function CaseSolution() {
    return(
        <>
            <div className={style.case_solution}>
                <div className="container">
                    <video autoPlay loop muted poster="/assets/images/homepage/banner/banner-poster.jpg">
                        <source src="/assets/images/homepage/banner/intro.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className={`${style.challenges_faced} ${style.challenges_solution}`}>
                <div className="container">
                    <h2><span>The Solution</span></h2>
                    <p>The issues that sonnen, especially the digital department, faced were results of its complex structure and the fact that some of the services and products were being handled by third party companies. Additionally, <span>the company was growing very fast,</span> using support from various external companies to help them with its software development efforts - Boldare was one of those companies.</p>
                    <p><span>sonnen’s stakeholders decided to turn to Boldare in the search for a tailored solution.</span> The reasons? While building digital products for sonnen, we proved our excellence in the areas of product development, process management and practical use of Agile. Furthermore, as a company with vast experience in Agile and digital transformation we were a natural choice as partners.</p>
                    <blockquote>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="45" viewBox="0 0 48 45" fill="none">
                            <path d="M21.1265 0V10.1858C15.2926 10.1858 10.5631 14.9148 10.5631 20.7487V23.7669H21.1265V44.8934H0V21.1265C0 9.45922 9.45854 0 21.1265 0Z" fill="#1D4354"/>
                            <path d="M47.5338 0V10.1858C41.6999 10.1858 36.9709 14.9148 36.9709 20.7487V23.7669H47.5338V44.8934H26.4073V21.1265C26.4073 9.45922 35.8658 0 47.5338 0Z" fill="#1D4354"/>
                        </svg>
                        “DigiMark Developers stood out as a company who really wanted to understand our problem and fulfill our needs. If you see that the potential partner is on the same page as you, speaking the same language, trying to achieve something in a partnership and not just sign a contract, that is a winner.”
                        <span>Norbert Baumann, VP Research & Development at sonnen</span>
                    </blockquote>
                    <p>The issues that sonnen, especially the digital department, faced were results of its complex structure and the fact that some of the services and products were being handled by third party companies. Additionally, <span>the company was growing very fast,</span> using support from various external companies to help them with its software development efforts - Boldare was one of those companies.</p>
                </div>
            </div>
            <div className={`${style.challenges_faced} ${style.challenges_result}`}>
                <div className="container">
                    <h2><span>Final Conclusion & Results</span></h2>
                    <p>The issues that sonnen, especially the digital department, faced were results of its complex structure and the fact that some of the services and products were being handled by third party companies. Additionally, <span>the company was growing very fast,</span> using support from various external companies to help them with its software development efforts - Boldare was one of those companies.</p>
                    <p><span>sonnen’s stakeholders decided to turn to Boldare in the search for a tailored solution.</span> The reasons? While building digital products for sonnen, we proved our excellence in the areas of product development, process management and practical use of Agile. Furthermore, as a company with vast experience in Agile and digital transformation we were a natural choice as partners.</p>
                </div>
            </div>
        </>
    )
}