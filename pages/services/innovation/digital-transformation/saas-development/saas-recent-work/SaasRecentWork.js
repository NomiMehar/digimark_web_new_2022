import style from "./saasRecentWork.module.scss";
import saasPartnersList from "./SaasRecentList.json";
import Image from "next/image";

export default function SaasRecentWork() {
    return(
        <div className={style.sass_recent_project}>
            <div className="container">
                <div className="section_title">
                    <h2>Our <span>Recent Work</span></h2>
                </div>
                <div className={style.sass_recent_content_wrap}>
                    {
                        saasPartnersList.map(({projectTitle,projectLogo,projectDescription,mainImage,tags},index)=>{
                            return(
                                <div key={`text-${index}`} className={`flex ${style.sass_recent_content}`}>
                                    <figure>
                                        <Image width={100} height={100} src={mainImage} alt="mainImage"/>
                                    </figure>
                                    <section>
                                        <Image src={projectLogo} width={138} height={60} alt="projectLogo"/>
                                        <h3>{projectTitle}</h3>
                                        <p>{projectDescription}</p>
                                        <ul className="list-none flex flex-wrap">
                                            {
                                                tags.map((tags,index)=>{
                                                    return(
                                                        <li key={index}><span>{tags}</span></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </section>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}