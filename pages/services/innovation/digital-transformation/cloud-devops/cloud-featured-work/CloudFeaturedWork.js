import style from "./cloudFeaturedWork.module.scss"
import cloudFeaturedWorkList from "./cloudFeaturedWorkList.json"
import Image from "next/image";

export default function CloudFeaturedWork() {
    return(
        <div className={style.benefits_cloud_wrapper}>
            <div className="container">
                <div className="section_title">
                    <h2>Our Great <span>Featured Work</span></h2>
                </div>
                <div className={style.benefits_cloud}>
                    <ul className="list-none flex flex-wrap">
                        {
                            cloudFeaturedWorkList.map(({tags,description,title,image},index)=>{
                                return(
                                    <li key={`b-${index}`}>
                                        <div className={style.benefits_cloud_text}>
                                            <img src={image} alt="img"/>
                                            <section>
                                                <h3>{title}</h3>
                                                <p>{description}</p>
                                                <span>
                                                    {
                                                        tags.map((tags,index)=>{
                                                            return(
                                                                <small key={`s-${index}`}>{tags}</small>
                                                            )
                                                        })
                                                    }
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
        </div>
    )
}