import React,{ useEffect } from "react";
import style from './DedicatedTeam.module.scss'
import AOS from 'aos';
import Image from "next/image";

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
                    <h2>Delegating Vs <span>Increased Staffing</span> Vs Devoted Group</h2>
        </div>
        <div className={style.tableResponsive}>
    <table>
        <thead>
            <tr>
                <th>Specifications</th>
                <th>Increased IT Staffing</th>
                <th>Contract out</th>
                <th>Devoted Group</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><div className={style.imgBlock}><Image width={100} height={100} src="/assets/images/services/defination.svg" alt="augImg" /> Definition </div></td>
                <td>It is a plan wherein an organisation engages a third-party company or individual to add more workers to its current IT team.</td>
                <td>A cheap solution that can help companies grow swiftly and effectively is outsourcing.</td>
                <td>An IT professional group committed to a single project is called a dedicated team.</td>
            </tr>
            <tr>
                <td><div className={style.imgBlock}><Image width={100} height={100} src="/assets/images/services/uses.svg" alt="augImg" /> Uses </div></td>
                <td>Augmenting IT staff can be a cost-effective way to get specialised knowledge for particular projects.</td>
                <td>It needs specialised knowledge, is frequently utilised for labour-intensive jobs, and takes too long for internal workers to handle.</td>
                <td>A committed group can assume control of an entire software development project.</td>
            </tr>
            <tr>
                <td><div className={style.imgBlock}><Image width={100} height={100} src="/assets/images/services/coin.svg" alt="augImg" /> Cost </div></td>
                <td>The level of IT augmentation can vary based on your unique requirements. Full-time employment may incur more costs, but part-time employment may not.</td>
                <td>Generally speaking, outsourcing is less expensive than hiring staff internally.</td>
                <td>A specialised crew can be costly, thus complex projects are typically the use case for them.</td>
            </tr>
            <tr>
                <td><div className={style.imgBlock}><Image width={100} height={100} src="/assets/images/services/advant.svg" alt="augImg" /> Advantage </div></td>
                <td>Decreases the amount of time and money needed to educate and oversee new hires, improving efficiency.</td>
                <td>Round-the-clock assistance for vital systems.</td>
                <td>Create enduring connections with committed teams.</td>
            </tr>
            <tr>
                <td><div className={style.imgBlock}><Image width={100} height={100} src="/assets/images/services/draw.svg" alt="augImg" /> Drawbacks </div></td>
                <td>Lack direct authority over the IT personnel.</td>
                <td>Finding a trustworthy outsourcing partner is difficult.</td>
                <td>The setup and training costs for a team.</td>
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
