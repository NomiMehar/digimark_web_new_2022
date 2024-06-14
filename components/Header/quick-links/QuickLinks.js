import Link from "next/link";
import style from "../Header.module.scss";
import Image from "next/image";
import QuickNav from "./QuickNav.json";

export default function QuickLinks() {
    const handleMouseEnter = () => {
        document.body.classList.add('hovered');
    };
    const handleMouseLeave = () => {
        document.body.classList.remove('hovered');
    };
  return (
      <div className={`flex items-center ${style.career_section}`}>
          <ul
              className="list-none flex-between-center"
          >
              {/* {QuickNav.map(({quickTitle,quickImage,quickLink},index) => {
                  return (
                      <li key={`quickLink-${index}`}>
                          <Link
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                              href={quickLink} className={`flex direction-column justify-center items-center ${style.quick_link_content}`}>
                              <Image src={quickImage} width={33} height={21} alt="images" />
                              <span>{quickTitle}</span>
                          </Link>
                      </li>
                  );
              })} */}
          </ul>
          <Link href="/contact-us"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="btn-green">REQUEST A QUOTE</Link>
      </div>
  );
}
