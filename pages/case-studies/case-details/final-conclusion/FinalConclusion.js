// components/case-details/about-client/FinalConclusion.js
import React from 'react';
import style from './FinalConclusion.module.scss';
import Image from 'next/image';
import mapImage from '../../../../public/assets/images/case-study/map.png';

export default function FinalConclusion({ aboutClient }) {
    const { overview, challenges, finalConclusion } = aboutClient;
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
                    <h2><span>Challenges Faced</span></h2>
                    <p>{challenges}</p>
                </div>
            </div>
            <div className={style.challenges_faced}>
            <div className="container">
                <h2><span>Final Conclusion & Results</span></h2>
                <p>{finalConclusion}</p>
            </div>
        </div>
        </>
    );
}
