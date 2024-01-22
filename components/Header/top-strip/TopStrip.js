import style from "../Header.module.scss";
import QuickLinks from "../quick-links/QuickLinks";
import TopStripInfo from "../topstrip-info/TopStripInfo";

export default function TopStrip() {
  return (
      <div className={style.header_widget}>
          <div className="container">
              <div className={`flex-between-center ${style.header_section}`}>
                  <TopStripInfo/>
                  <div className={style.logo}>
                      <img src="/assets/images/header/logo.svg" alt="logo" />
                  </div>
                  <QuickLinks/>
              </div>
          </div>
      </div>
  );
}
