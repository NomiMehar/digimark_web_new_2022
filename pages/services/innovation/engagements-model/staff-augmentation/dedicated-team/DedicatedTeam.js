import React,{ useEffect } from "react";
import style from './DedicatedTeam.module.scss'
import AOS from 'aos';

function DedicatedTeam() {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <React.Fragment>
      <div className={style.dedicatedTeam}>
        <div className="container">
        <div className="main_section_title" data-aos="fade-up"
             data-aos-easing="ease-in-sine"
             data-aos-duration="1000">
                    <h2>Outsourcing Vs <span>Staff Augmentation</span> Vs Dedicated Team</h2>
        </div>
        <div className={style.tableResponsive}>
        <table>
            <thead>
                <tr>
                    <th>Parameters</th>
                    <th>IT Staff Augmentation</th>
                    <th>Outsource</th>
                    <th>Dedicated Team</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><div className={style.imgBlock}><img src="/assets/images/services/defination.svg" alt="augImg" /> Definition </div></td>
                    <td>It is an arrangement where a business hires an outside firm or individual to supplement its existing IT staff with additional personnel</td>
                    <td>Outsourcing is a cost-effective option that can help businesses scale quickly and efficiently</td>
                    <td>A dedicated team is a group of IT professionals devoted to one project</td>
                </tr>
                <tr>
                    <td><div className={style.imgBlock}><img src="/assets/images/services/uses.svg" alt="augImg" /> Uses </div></td>
                    <td>IT staff augmentation can be used to save costs and have expertise on specific projects.</td>
                    <td>It is often used for labor- intensive tasks, requires specialized expertise and takes too much time for the internal staff to manage</td>
                    <td>A dedicated team can take over responsibility for a complete software development project</td>
                </tr>
                <tr>
                <td><div className={style.imgBlock}><img src="/assets/images/services/coin.svg" alt="augImg" /> Cost </div></td>
                    <td>IT augmentation can be variable, depending on your specific needs. For full-time, it can be expensive, but part-time can be lesser</td>
                    <td>The cost of outsourcing is typically lower than in-house personnel</td>
                    <td>The cost of a dedicated team can be expensive, and it is generally used for complex projects</td>
                </tr>
                <tr>
                <td><div className={style.imgBlock}><img src="/assets/images/services/advant.svg" alt="augImg" /> Advantage </div></td>
                    <td>Improves efficiency by reducing time & money spent on training and managing new personnel</td>
                    <td>24/7 support for critical systems</td>
                    <td>Build long-term relationships with dedicated teams</td>
                </tr>
                <tr>
                <td><div className={style.imgBlock}><img src="/assets/images/services/draw.svg" alt="augImg" /> Drawbacks </div></td>
                    <td>Don't have direct control over the IT staff</td>
                    <td>Difficult to find reliable outsourcing partner</td>
                    <td>Cost of team setup and training</td>
                </tr>
                
            </tbody>
        </table>
        </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DedicatedTeam
