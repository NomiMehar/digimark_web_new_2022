import style from "./caseStudiesCards.module.scss"
import caseStudiesCardList from "./caseStudiesCardList.json"
import Image from "next/image";
import Link from "next/link";
import moreArrow from "../../../public/assets/images/case-study/arrow.svg"
import whiteArrow from "../../../public/assets/images/homepage/customer_talk/white-arrow.svg";

export default function CaseStudiesCards() {
    return(
        <>
            <div className={style.case_filter}>
                <div className="container">
                    <div className={`flex items-center ${style.case_filter_bg}`}>
                        <span>Filter</span>
                        <section>
                            <ul className="list-none flex">
                                <li>
                                    <label htmlFor="">Platforms</label>
                                    <select name="" id="">
                                        <option value="">All Platforms</option>
                                        <option value="">All Platforms</option>
                                        <option value="">All Platforms</option>
                                        <option value="">All Platforms</option>
                                        <option value="">All Platforms</option>
                                    </select>
                                </li>
                                <li>
                                    <label htmlFor="">Industries</label>
                                    <select name="" id="">
                                        <option value="">All Industries</option>
                                        <option value="">Healthcare</option>
                                        <option value="">Fintech</option>
                                        <option value="">Retail</option>
                                        <option value="">Education</option>
                                        <option value="">Hospitality</option>
                                        <option value="">Tour & travel</option>
                                        <option value="">Transport</option>
                                        <option value="">Insurance</option>
                                    </select>
                                </li>
                                <li>
                                    <label htmlFor="">Services</label>
                                    <select name="" id="">
                                        <option value="">All Platforms</option>
                                        <option value="">All Platforms</option>
                                        <option value="">All Platforms</option>
                                        <option value="">All Platforms</option>
                                        <option value="">All Platforms</option>
                                    </select>
                                </li>
                            </ul>
                        </section>
                        <button>Clear All</button>
                    </div>
                </div>
            </div>
            <div className={style.case_studies_cards}>
                <div className="container">
                    <ul className="list-none flex flex-wrap">
                        {
                            caseStudiesCardList.map(({cardImage,title,tags,description},index)=>{
                                return(
                                    <li key={index}>
                                        <div className={style.case_studies}>
                                            <figure><Image width={452} height={461} src={cardImage} alt="card"/></figure>
                                            <section>
                                                <h2>{title}</h2>
                                                <p>{description}</p>
                                                <ul className="list-none flex flex-wrap">
                                                    {
                                                        tags.map((tags,index)=>{
                                                            return <li key={`tag-${index}`}><span>{tags}</span></li>
                                                        })
                                                    }
                                                </ul>
                                                <Link className="explore_btn" href="/case-studies/case-details">Explore More <Image src={moreArrow} alt=""/></Link>
                                            </section>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="center">
                        <Link href="#" className={`contact_btn ${style.simple_btn}`}>Show More <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}