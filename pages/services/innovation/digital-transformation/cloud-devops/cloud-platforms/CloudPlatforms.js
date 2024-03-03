import style from "./cloudPlatforms.module.scss"
import cloudPlatformsList from "./cloudPlatformsList.json"
import {useState} from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";

export default function CloudPlatforms() {
    const [activeItem, setActiveItem] = useState(null);
    const [activeItemt, setActiveItemt] = useState(null);

    const handleItemClick = (index) => {
        setActiveItem((prevActiveItem) => (prevActiveItem === index ? null : index));
    };
    const handleItemtClick = (index) => {
        setActiveItemt((prevActiveItemt) => (prevActiveItemt === index ? null : index));
    };

    return(
        <div className={style.platforms_cloud_wrapper}>
            <div className="container">
                <div className={style.section_title}>
                    <h2><span>Cloud</span> & <span>DevOps</span> Tools & Platforms we use</h2>
                    <p>We use the best cloud & DevOps technology platforms & tools to help our clients achieve faster and more robust solutions.</p>
                </div>
                <div className={`platforms_cloud ${style.platforms_cloud}`}>
                    <Accordion allowZeroExpanded>
                        <section>
                            {
                                cloudPlatformsList.slice(0,5).map(({title,list},index)=>{
                                    return(
                                        <AccordionItem
                                            key={`first-${index}`}
                                            className={`accordion__item ${index === activeItem ? 'active' : ''}`}
                                            onClick={() => {
                                                handleItemClick(index)
                                                handleItemtClick(false)
                                            }}
                                        >
                                            <AccordionItemHeading>
                                                <AccordionItemButton>{title}</AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <ul className="list-none">
                                                    {
                                                        list.map((list,index)=>{
                                                            return(
                                                                <li key={`index-${index}`}>
                                                                    <img src={list} alt="logo"/>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    )
                                })
                            }
                        </section>
                        <section>
                            {
                                cloudPlatformsList.slice(5,10).map(({title,list},index)=>{
                                    return(
                                        <AccordionItem
                                            key={`second-${index}`}
                                            className={`accordion__item ${index === activeItemt ? 'active' : ''}`}
                                            onClick={() => {
                                                handleItemtClick(index)
                                                handleItemClick(false)
                                            }}
                                        >
                                            <AccordionItemHeading>
                                                <AccordionItemButton>{title}</AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <ul className="list-none">
                                                    {
                                                        list.map((list,index)=>{
                                                            return(
                                                                <li key={`index-${index}`}>
                                                                    <img src={list} alt="logo"/>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    )
                                })
                            }
                        </section>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}