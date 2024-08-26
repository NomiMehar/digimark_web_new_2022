import { useState, useEffect, useRef } from "react";
import style from "./caseStudiesCards.module.scss";
import caseStudiesCardList from "./caseStudiesCardList.json";
import Image from "next/image";
import Link from "next/link";
import moreArrow from "../../../public/assets/images/case-study/arrow.svg";
import whiteArrow from "../../../public/assets/images/homepage/customer_talk/white-arrow.svg";

export default function CaseStudiesCards() {
    const [industryFilter, setIndustryFilter] = useState("");
    const [serviceFilter, setServiceFilter] = useState("");
    const [solutionFilter, setSolutionFilter] = useState("");
    const [filteredCaseStudies, setFilteredCaseStudies] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const initialDisplayCount = 3;

    const caseStudiesSectionRef = useRef(null);

    useEffect(() => {
        const filtered = caseStudiesCardList.filter(({ tags }) => {
            const industryMatch = industryFilter ? tags.includes(industryFilter) : true;
            const serviceMatch = serviceFilter ? tags.includes(serviceFilter) : true;
            const solutionMatch = solutionFilter ? tags.includes(solutionFilter) : true;
            return industryMatch && serviceMatch && solutionMatch;
        });
        setFilteredCaseStudies(filtered.slice(0, initialDisplayCount));
    }, [industryFilter, serviceFilter, solutionFilter]);

    const handleClearFilters = () => {
        setIndustryFilter("");
        setServiceFilter("");
        setSolutionFilter("");
    };

    const handleShowMore = () => {
        if (showAll) {
            setFilteredCaseStudies(filteredCaseStudies.slice(0, initialDisplayCount));
            caseStudiesSectionRef.current.scrollIntoView({ behavior: "smooth" });
        } else {
            setFilteredCaseStudies(filteredCaseStudies.concat(caseStudiesCardList.filter(({ tags }) => {
                const industryMatch = industryFilter ? tags.includes(industryFilter) : true;
                const serviceMatch = serviceFilter ? tags.includes(serviceFilter) : true;
                const solutionMatch = solutionFilter ? tags.includes(solutionFilter) : true;
                return industryMatch && serviceMatch && solutionMatch;
            }).slice(initialDisplayCount)));
        }
        setShowAll(!showAll);
    };

    return (
        <>
            <div className={style.case_filter}>
                <div className="container">
                    <div className={`flex items-center ${style.case_filter_bg}`}>
                        <span>Filter</span>
                        <section>
                            <ul className="list-none flex">
                                <li>
                                    <label htmlFor="industries">Industries</label>
                                    <select name="industries" id="industries" value={industryFilter} onChange={(e) => setIndustryFilter(e.target.value)}>
                                        <option value="">All Industries</option>
                                        <option value="Healthcare">Healthcare</option>
                                        <option value="EdTech">EdTech</option>
                                        <option value="Fintech">Fintech</option>
                                        <option value="Blockchain">Blockchain</option>
                                        <option value="Gaming">Gaming</option>
                                        <option value="E-commerce">E-commerce</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Social">Social</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </li>
                                <li>
                                    <label htmlFor="services">Services</label>
                                    <select name="services" id="services" value={serviceFilter} onChange={(e) => setServiceFilter(e.target.value)}>
                                        <option value="">All Services</option>
                                        <option value="User Experience">User Experience</option>
                                        <option value="User Interface">User Interface</option>
                                        <option value="Mobile Development">Mobile Development</option>
                                        <option value="Web Application">Web Application</option>
                                        <option value="SaaS Development">SaaS Development</option>
                                        <option value="AI & ML Development">AI & ML Development</option>
                                        <option value="AI Consulting">AI Consulting</option>
                                        <option value="ChatBot Development">ChatBot Development</option>
                                        <option value="Computer Vision">Computer Vision</option>
                                        <option value="Data Science">Data Science</option>
                                        <option value="Data Engineering">Data Engineering</option>
                                        <option value="Generative AI">Generative AI</option>
                                        <option value="DevOps">DevOps</option>
                                        <option value="Branding">Branding</option>
                                        <option value="Gamification">Gamification</option>
                                        <option value="Marketing">Marketing</option>
                                    </select>
                                </li>
                                <li>
                                    <label htmlFor="solutions">Solutions</label>
                                    <select name="solutions" id="solutions" value={solutionFilter} onChange={(e) => setSolutionFilter(e.target.value)}>
                                        <option value="">All Solutions</option>
                                        <option value="Sales Automation">Sales Automation</option>
                                        <option value="Business Process Automation">Business Process Automation</option>
                                        <option value="Data Analysis">Data Analysis</option>
                                        <option value="On-Demand">On-Demand</option>
                                    </select>
                                </li>
                            </ul>
                        </section>
                        <button onClick={handleClearFilters}>Clear All</button>
                    </div>
                </div>
            </div>
            <div className={style.case_studies_cards} ref={caseStudiesSectionRef}>
                <div className="container">
                    <ul className="list-none flex flex-wrap">
                        {
                            filteredCaseStudies.map(({ cardImage, title, tags, description }, index) => {
                                return (
                                    <Link key={index} href={`/case-studies/case-details/${title.replace(/ /g, '-').toLowerCase()}`}>
                                    <li>
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
                                                <Link className="explore_btn" href={`/case-studies/case-details/${title.replace(/ /g, '-').toLowerCase()}`}>Explore More <Image src={moreArrow} alt="image" /></Link>
                                            </section>
                                        </div>
                                    </li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                    <div className="center">
                        <button className={`contact_btn ${style.simple_btn}`} onClick={handleShowMore}>
                            {showAll ? 'Show Less' : 'Show More'}
                            <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
