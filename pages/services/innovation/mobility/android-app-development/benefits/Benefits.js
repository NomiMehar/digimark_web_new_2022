import React, {useEffect} from "react";
import style from "./Benefits.module.scss";
import Image from "next/image";
import AOS from 'aos';

export default function Benefits(props) {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <div className={`flex direction-column ${style[props.classProps]} ${style.benefits_wrapper}`}>
        <div className="container">
            <div className={`${style.benefits_content}`}>
                <h2 data-aos="fade-up" data-aos-duration="1000">{props.benefitsTitle}</h2>
                <ul className="list-none flex">
                    {
                        props.benefitsList?.map(({benefitsImage, benefitsTitle},index)=> {
                            return(
                                <li className="flex direction-column items-center" key={`benefits-${index}`} data-aos="flip-left"
                                    data-aos-duration="2000">
                                    <Image src={benefitsImage} alt={benefitsImage} width="72" height="87" />
                                    <h3>{benefitsTitle}</h3>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  );
}
