import React, {useEffect} from "react";
import CompanyLogo from "./CompanyLogo.json";
import style from "./Companies.module.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";

export default function Companies(props) {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <>
      <div className={`flex direction-column ${style[props.classProp]} ${style.companies_logo}`}>
        <div className="container">
          <ul className="list-none grid-container-4">
            {CompanyLogo.map(({CompanyLogoImg, aos_duration, width, height}, index) => {
              return (
                <li
                  className={`flex-center-center ${style.company_logos}`}
                  key={`companyLogo-${index}`}
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration={aos_duration}
                >
                  <Image src={CompanyLogoImg} alt={CompanyLogoImg} width={width} height={height} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
