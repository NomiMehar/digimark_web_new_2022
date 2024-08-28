// components/case-details/case-solution/CaseSolution.js
import React from 'react';
import style from '../about-client/aboutClient.module.scss';
import Image from "next/image";

export default function CaseSolution({ caseSolution }) {
    if (!caseSolution) {
        return <p>Data is not available.</p>;
    }
    const { solution = [], ImgUrl, finalConclusion = [] } = caseSolution; // Default values
    return (
        <>
            <div className={style.case_solution}>
                    <Image width={100} height={100} src={ImgUrl} alt="ImgUrl" />
            </div>
            <div className={style.challenges_faced}>
                <div className="container">
                    <h2><span>The Solution</span></h2>
                    <ul className="list-none">
                    {solution.map((tech, index) => (
                            <li key={index}><p>{tech}</p></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={style.challenges_faced}>
            <div className="container">
                <h2><span>Final Conclusion & Results</span></h2>
                <ul className="list-none">
                    {finalConclusion.map((tech, index) => (
                            <li key={index}><p>{tech}</p></li>
                        ))}
                    </ul>
            </div>
        </div>
        </>
    );
}
