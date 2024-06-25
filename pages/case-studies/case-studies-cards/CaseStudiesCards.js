import { useState, useEffect } from "react";
import style from "./caseStudiesCards.module.scss";
import caseStudiesCardList from "./caseStudiesCardList.json";
import Image from "next/image";
import Link from "next/link";
import moreArrow from "../../../public/assets/images/case-study/arrow.svg";
import whiteArrow from "../../../public/assets/images/homepage/customer_talk/white-arrow.svg";

export default function CaseStudiesCards() {
    const [titleFilter, setTitleFilter] = useState("");
    const [industryFilter, setIndustryFilter] = useState("");
    const [serviceFilter, setServiceFilter] = useState("");
    const [filteredCaseStudies, setFilteredCaseStudies] = useState(caseStudiesCardList);

    useEffect(() => {
        const filtered = caseStudiesCardList.filter(({ title, tags }) => {
            const titleMatch = titleFilter ? title === titleFilter : true;
            const industryMatch = industryFilter ? tags.includes(industryFilter) : true;
            const serviceMatch = serviceFilter ? tags.includes(serviceFilter) : true;
            return titleMatch && industryMatch && serviceMatch;
        });
        setFilteredCaseStudies(filtered);
    }, [titleFilter, industryFilter, serviceFilter]);

    const handleClearFilters = () => {
        setTitleFilter("");
        setIndustryFilter("");
        setServiceFilter("");
    };

    const uniqueTitles = [...new Set(caseStudiesCardList.map(({ title }) => title))];

    return (
        <>
            <div className={style.case_filter}>
                <div className="container">
                    <div className={`flex items-center ${style.case_filter_bg}`}>
                        <span>Filter</span>
                        <section>
                            <ul className="list-none flex">
                                <li>
                                    <label htmlFor="titles">Titles</label>
                                    <select name="titles" id="titles" value={titleFilter} onChange={(e) => setTitleFilter(e.target.value)}>
                                        <option value="">All Titles</option>
                                        {uniqueTitles.map((title, index) => (
                                            <option key={index} value={title}>{title}</option>
                                        ))}
                                    </select>
                                </li>
                                <li>
                                    <label htmlFor="industries">Industries</label>
                                    <select name="industries" id="industries" value={industryFilter} onChange={(e) => setIndustryFilter(e.target.value)}>
                                        <option value="">All Industries</option>
                                        <option value="Healthcare">Healthcare</option>
                                        <option value="Fintech">Fintech</option>
                                        <option value="Retail">Retail</option>
                                        <option value="Education">Education</option>
                                        <option value="Hospitality">Hospitality</option>
                                        <option value="Tour & travel">Tour & travel</option>
                                        <option value="Transport">Transport</option>
                                        <option value="Insurance">Insurance</option>
                                    </select>
                                </li>
                                <li>
                                    <label htmlFor="services">Services</label>
                                    <select name="services" id="services" value={serviceFilter} onChange={(e) => setServiceFilter(e.target.value)}>
                                        <option value="">All Services</option>
                                        <option value="Phusion Passenger">Phusion Passenger</option>
                                        <option value="Postgre SQL">Postgre SQL</option>
                                        <option value="NGINX">NGINX</option>
                                        <option value="Ruby on Rails">Ruby on Rails</option>
                                        <option value="jQuery">jQuery</option>
                                    </select>
                                </li>
                            </ul>
                        </section>
                        <button onClick={handleClearFilters}>Clear All</button>
                    </div>
                </div>
            </div>
            <div className={style.case_studies_cards}>
                <div className="container">
                    <ul className="list-none flex flex-wrap">
                        {
                            filteredCaseStudies.map(({ cardImage, title, tags, description }, index) => {
                                return (
                                    <li key={index}>
                                        <div className={style.case_studies}>
                                            <figure><Image width={452} height={461} src={cardImage} alt="card" /></figure>
                                            <section>
                                                <h2>{title}</h2>
                                                <p>{description}</p>
                                                <ul className="list-none flex flex-wrap">
                                                    {
                                                        tags.map((tag, index) => (
                                                            <li key={`tag-${index}`}><span>{tag}</span></li>
                                                        ))
                                                    }
                                                </ul>
                                                <Link className="explore_btn" href={`/case-studies/case-details/${title.replace(/ /g, '-').toLowerCase()}`}>Explore More <Image src={moreArrow} alt="" /></Link>
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
    );
}
