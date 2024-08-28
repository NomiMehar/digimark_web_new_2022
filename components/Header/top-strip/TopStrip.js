import Link from "next/link";
import style from "../Header.module.scss";
import QuickLinks from "../quick-links/QuickLinks";
import TopStripInfo from "../topstrip-info/TopStripInfo";
import Image from "next/image";

export default function TopStrip() {
  return (
      <div className={style.header_widget}>
          <div className="container">
              <div className={`flex-between-center ${style.header_section}`}>
                  <TopStripInfo/>
                  <div className={style.logo}>
                  <Link href="/">
                    <img src="/assets/images/header/logo.svg" alt="logo" />
                    </Link>
                  </div>
                  <QuickLinks/>
              </div>
          </div>
      </div>
  );
}
