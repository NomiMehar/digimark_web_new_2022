import style from "./unrealProjects.module.scss"
import unrealProjectList from "./unrealProjectList.json"
import React from "react";
import Image from "next/image";
import stack1 from "../../../../../../public/assets/images/services/stack1.png"
import whiteArrow from "../../../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";

export default function UnrealProjects(props) {
    return(
        <>
            <div className={`${style.unreal_projects} ${style[props.classes]}`}>
                <div className="container">
                    <div className="white section_title">
                        <h2><span>Our Recent Projects</span></h2>
                        <p>Take a look at our successful and top-notch gaming projects for better understanding.</p>
                    </div>
                    <div className={style.unreal_projects_list}>
                        <ul className="list-none flex flex-wrap">
                            {
                                unrealProjectList.map(({projectImage,projectTitle,projectDescription},index)=>{
                                    return(
                                        <li>
                                            <figure style={{ backgroundImage: `url(${projectImage})` }}>
                                                <figcaption>
                                                    <h3>{projectTitle}</h3>
                                                    <p>{projectDescription}</p>
                                                    <Link href="#" className={`contact_btn`}>Contact Us <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                                                </figcaption>
                                            </figure>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}