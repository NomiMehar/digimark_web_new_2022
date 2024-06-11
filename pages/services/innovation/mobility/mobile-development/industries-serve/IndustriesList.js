import style from "./industriesList.module.scss"
import IndustriesLists from "./IndustriesList.json"
import Link from "next/link";
import Image from "next/image";
import greenArrow from "../../../../../../public/assets/images/services/green-arrow.svg";
import AOS from 'aos';
import {useEffect} from "react";

export default function IndustriesList(props) {
    useEffect(() => {
        AOS.init();
    }, [])
    useEffect(()=>{
        const elmnt = document.querySelectorAll('.indust');
        const numberOfelmnt = document.querySelectorAll('.indust').length;
        const activeClass = 'active';

        const repeat = (numberOfIterations, timeBetweenItereation, stuffToRepeat) => {
            let iterationCounter = 0;
            const repeater = () => {
                setTimeout( () => {
                    stuffToRepeat(elmnt[iterationCounter], activeClass);
                    iterationCounter++;
                    if (numberOfIterations === iterationCounter) {
                        iterationCounter = 0;
                    }
                    if (iterationCounter >= numberOfIterations) {
                        return;
                    }
                    repeater();
                }, 2500 * timeBetweenItereation);
            };
            repeater();
        };

        const addClassToElmnt = (elmnt, className) => {
            let elmntWithClassToRemove = document.getElementsByClassName(className);

            [...elmntWithClassToRemove].forEach((curentElmnt)=>{
                curentElmnt.classList.remove(className);
            });

            elmnt.classList.add(className);
        };

        repeat(numberOfelmnt, 1, addClassToElmnt);
    })
    return(
        <div className={`flex direction-column ${style[props.overLayClass]} ${style.mobile_industries_wrap}`}>
            <div className="container">
                <div
                    className={`section_title flex direction-column ${props.titleClass}`}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <h2><span>industries</span> we serve</h2>
                    <p>Being a mobile services provider, we've experts in <br />
                    Various industries, are ready to help you succeed. <br />
                    We serve:
                    </p>
                </div>
                <div className={`mobile_industries_list ${style.mobile_industries_list}`}>
                    <ul className="list-none flex flex-wrap"
                        data-aos="fade-up"
                        data-aos-duration="1000">
                        {
                            IndustriesLists.map(({icons,industries},index)=>{
                                return(
                                <li className="indust flex direction-column items-center justify-center" key={index}>
                                    <i className={icons}></i>
                                    <span>{industries}</span>
                                </li>
                                )
                            })
                        }
                    </ul>
                    <div className="center">
                        <Link
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            href="/contact-us/#contactForm" className={`transparent-btn ${props.titleClass}`}>CONSULT NOW <Image src={greenArrow} alt={greenArrow} width={13} height={16}/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}