import Link from "next/link";
import style from "../Header.module.scss";
import styleMenu from "../mega-menu/megaMenu.module.scss"
import ServiceMegaMenu from "../mega-menu/ServiceMegaMenu";
import {useState} from "react";
import OutsideClickHandler from "react-outside-click-handler";

export default function Navigation() {
    const [isActive, setActive] = useState("false");
    const [companyActive, setCompanyActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };
    const companyToggle = () => {
        setCompanyActive(!companyActive);
    };

    const handleMouseEnter = () => {document.body.classList.add('hovered');};
    const handleMouseLeave = () => {document.body.classList.remove('hovered');};
  return (
      <ul className={`list-none flex ${style.main_menu}`}>
          <li>
              <Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  href="/">
                  HOME
              </Link>
          </li>
          <li className={`relative ${companyActive ? '' : `${styleMenu.menu_active}`}`}>
              <OutsideClickHandler
                  onOutsideClick={() => {
                      setCompanyActive("false");
                  }}
              >
                  <button
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave} className={`${style.menuwrap} ${styleMenu.menuwrap}`} onClick={companyToggle}>
                      COMPANY<i className="fa fa-chevron-down"></i>
                  </button>
                  <ul className={`list-none ${style.mini_dropdown} ${styleMenu.mini_dropdown}`} onClick={()=>{setCompanyActive("false")}}>
                      <li><Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} href="/company/about-us">About Company</Link></li>
                      <li><Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} href="/company/how-we-are">How We Work</Link></li>
                      <li><Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} href="/company/team">Our Team</Link></li>
                      {/* <li><Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} href="/company/careers">Our Careers</Link></li> */}
                      <li><Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} href="/company/women-empowerment">Women Empowerment</Link></li>
                      <li><Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} href="/company/life-at-digimark">Life @DigiMark</Link></li>
                  </ul>
              </OutsideClickHandler>
          </li>
          <li className={isActive ? '' : `${styleMenu.menu_active}`}>
              <OutsideClickHandler
                  onOutsideClick={() => {
                      setActive("false");
                  }}
              >
                  <button
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave} className={`${style.menuwrap} ${styleMenu.menuwrap}`} onClick={handleToggle}>
                      SERVICES<i className="fa fa-chevron-down"></i>
                  </button>
                  <ServiceMegaMenu onClick={()=>{setActive("false")}}/>
              </OutsideClickHandler>
          </li>
          <li>
              <Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} href="/engagements-model">
                  ENGAGEMENT MODELS
              </Link>
          </li>
          {/* <li>
              <Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} href="/industries">
                  INDUSTRIES
              </Link>
          </li>
          <li>
              <Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} href="/case-studies">
                  CASE STUDIES
              </Link>
          </li> */}
      </ul>
  );
}
