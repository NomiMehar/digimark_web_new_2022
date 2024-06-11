import React, { useEffect } from "react";
import style from "./TechSection.module.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TechSection(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`${style.industries_section} ${style[props.extraClass]}`} >
      <div className="container">
        <div className={style.industries_content}>
          {props.TechSectionList?.map(({ title, techs }, index) => (
            <div key={index} className={style.industry_item}>
              <h3 className={style.industry_title}>{title}</h3>
              <ul className="list-none">
                {techs.map((tech, idx) => (
                  <li key={idx} className={style.tech_item}>
                    <section>
                      {tech}
                    </section>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
