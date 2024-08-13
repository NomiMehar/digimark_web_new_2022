import React, {useState} from 'react';
import style from "./vacancies.module.scss"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Image from "next/image";
import downArrow from "../../../../public/assets/images/company/down-arrow.webp";
import whiteArrow from "../../../../public/assets/images/homepage/customer_talk/white-arrow.svg";
import Link from "next/link";
import NewVacanciesList from "./VacanciesList.json"
import CareersModal from "../../../../components/careers-modal/CareersModal";

export default function VacanciesList() {
    const [careerModalOpen, setCareerModalOpen] = useState(false);
    function modalToggle() {
        setCareerModalOpen(!careerModalOpen);
    }
    return (
        <>
        <Accordion preExpanded={['a']} className="job_listing_wrap">
            {
                NewVacanciesList.map(({itemName,requirements,jobDescription,jobTitle,no},index)=>{
                    return (
                        <AccordionItem key={`job-${index}`} uuid={itemName}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <small>{no}</small>
                                    {jobTitle}
                                    <Image src={downArrow} alt={downArrow} width={22} height={28}/>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className={`flex direction-column ${style.job_detail}`}>
                                    <h2>About the project:</h2>
                                    <p>{jobDescription}</p>
                                    <h2>Requirements:</h2>
                                    <ul className="list-none">
                                        {
                                            requirements.map((requirements,index)=>{
                                                return(
                                                    <li key={`list-${index}`}>{requirements}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <Link href="javascript:void(0)" onClick={modalToggle} className={`transparent-btn white ${style.transparent_btn}`}>Send Resume <Image src={whiteArrow} alt={whiteArrow} width={13} height={16} /></Link>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })
            }
        </Accordion>
            {
                careerModalOpen === false ? "" : <CareersModal careerModal={true} onClick={modalToggle}/>
            }
        </>
    );
}