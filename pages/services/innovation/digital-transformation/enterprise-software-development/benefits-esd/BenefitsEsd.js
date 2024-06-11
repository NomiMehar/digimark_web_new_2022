import style from "./benefitsEsd.module.scss"
import benefitsEsdList from "./benefitsEsdList.json"
import Image from "next/image";

export default function BenefitsEsd(props) {
    return(
        <>
          <div className={`${style[props.extraClass]} ${style.benefits_esd}`}>
              <div className="container">
                  <div className="section_title">
                      {
                          props.dynamicTitle === true ? <h2>{props.dynamicTitleText}</h2> : <h2>Benefits of <br/><span>Enterprise Software Development</span></h2>
                      }
                  </div>
                  <ul className="list-none flex flex-wrap">
                      {
                          benefitsEsdList.map(({image, title},index)=>{
                              return(
                                  <li key={index}>
                                      <section>
                                          <Image width={64} height={64} src={image} alt="image"/>
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