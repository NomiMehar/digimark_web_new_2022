import { useEffect } from "react";
import style from "./Header.module.scss";
import TopStrip from "./top-strip/TopStrip";
import MobileNav from "./mobile-nav/MobileNav";
import SocialNetwork from "./social-network/SocialNetwork";
import Navigation from "./navigation/Navigation";
import Link from "next/link";
import Image from "next/image";
function Header() {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = () => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 80
      ? header.classList.add(`${style.is_sticky}`)
      : header.classList.remove(`${style.is_sticky}`);
  };

  return (
    <header className={`${style.main_header}`}>
      <TopStrip/>
      <div className={`header-section ${style.navigation_wrapper}`}>
        <div className="container">
          <div className={`flex-between-center ${style.navigation_content}`}>
            <Link href="/">
            <Image src="/assets/images/header/logo.svg" width={100} height={100} alt="logo" />
            </Link>
            <Navigation/>
            <div className={`flex items-center ${style.header_social_wrapper}`}>
              <SocialNetwork/>
            </div>
          </div>
        </div>
      </div>
      <MobileNav/>
    </header>
  );
}

export default Header;
