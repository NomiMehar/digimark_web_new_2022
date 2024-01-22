import style from "./portfolioEsd.module.scss"
import portfolioEsdList from "./portfolioEsdList.json"
import Image from "next/image";

export default function PortfolioEsd() {
    return(
        <>
          <div className={style.portfolio_esd}>
              <div className="container">
                  <div className="section_title">
                      <h2><span>Our Featured Portfolio</span></h2>
                  </div>
                  <ul className="list-none flex flex-wrap">
                      {
                          portfolioEsdList.map(({image, title},index)=>{
                              return(
                                  <li key={index}>
                                      <section>
                                          <Image width={447} height={375} src={image} alt="image"/>
                                          <span>{title}</span>
                                      </section>
                                  </li>
                              )
                          })
                      }
                  </ul>
              </div>
          </div>
        </>
    )
}