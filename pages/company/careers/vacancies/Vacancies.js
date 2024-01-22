import style from "./vacancies.module.scss"
import VacanciesList from "./VacanciesList";
import Image from "next/image";
import whiteArrow from "../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import AOS from 'aos';
import {useEffect} from "react";

export default function Vacancies () {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <>
            <div className={`${style.vacancies_wrapper}`}>
                <div className="container">
                    <div className="section_title white"
                         data-aos="fade-up"
                         data-aos-duration="2000">
                        <h2>Open <span>Vacancies</span></h2>
                    </div>
                    <div className={`${style.vacancies_search}`}
                         data-aos="fade-up"
                         data-aos-duration="2000">
                        <form action="">
                            <ul className="list-none flex">
                                <li>
                                    <select name="" id="">
                                        <option value="all">Select Department</option>
                                        <option value="">Front-end Developer</option>
                                        <option value="">Back-end Developer</option>
                                        <option value="">Android Developer</option>
                                        <option value="">Designer</option>
                                        <option value="">SEO</option>
                                    </select>
                                </li>
                                <li>
                                    <input type="text" placeholder="Search Job"/>
                                </li>
                                <li>
                                    <button className={style.submit_btn}>Search <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></button>
                                </li>
                            </ul>
                        </form>
                    </div>
                    <div className={`${style.vacancies_list}`}
                         data-aos="fade-up"
                         data-aos-duration="2000">
                        <VacanciesList/>
                    </div>
                </div>
            </div>
        </>
    )
}