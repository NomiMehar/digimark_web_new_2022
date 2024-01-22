import React from "react";
import style from "./comparativeAnalysis.module.scss";
import comparativeAnalysisList from "./comparativeAnalysisList.json";

export default function ComparativeAnalysis() {
  return (
    <div className={style.comparative_analysis}>
        <div className="container">
            <div className="section_title">
                <h2><span>Comparative Analysis</span></h2>
                <p>We provide tailored, robust, scalable and secure Android development solutions that delight users and deliver engagement.</p>
            </div>
            <div className={style.comparative_analysis_wrap}>
                <div className={style.comparative_analysis_table}>
                    <table>
                        <tr>
                            <th></th>
                            <th>DigiMark Developers Solutions</th>
                            <th>In-House</th>
                            <th>Freelance</th>
                        </tr>
                        {
                            comparativeAnalysisList.map(({title,firstSlot,secondSlot,thirdSlot},index)=>{
                                return(
                                    <tr key={`comp-${index}`}>
                                        <td>{title}</td>
                                        <td>{firstSlot}</td>
                                        <td>{secondSlot}</td>
                                        <td>{thirdSlot}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
