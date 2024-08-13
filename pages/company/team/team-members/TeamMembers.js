import React, {useEffect} from "react";
import teamMemberList from "./teamMember.json"
import style from "./teamMember.module.scss"
import linkedinIcon from "../../../../public/assets/images/company/linkedin.webp"
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';

export default function TeamMembers () {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className={style.team_member}>
            <div className="section_title white"
                 data-aos="fade-up"
                 data-aos-duration="2000">
                <h2>Head Of <span>Departments</span></h2>
            </div>
            <div className="container">
                <ul className="list-none flex flex-wrap">
                    {
                        teamMemberList.map(({teamImage,teamName,teamDesignation,linkedinLink}, index)=>{
                            return(
                                <li
                                    key={`team-${index}`}
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >
                                    <div className={style.team_member_text}>
                                        <figure>
                                            <Image src={teamImage} alt={teamImage} width={324} height={452} />
                                        </figure>
                                        <section>
                                            <h2>{teamName}</h2>
                                            <span>
                                                {teamDesignation}
                                                <Link href={linkedinLink} target="_blank"><Image src={linkedinIcon} alt={linkedinIcon} width={20} height={19}/></Link>
                                            </span>
                                        </section>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}