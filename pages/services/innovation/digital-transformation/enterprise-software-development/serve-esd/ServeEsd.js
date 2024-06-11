import style from "./ServeEsd.module.scss"
import serveEsdList from "./serveEsdList.json"
import Image from "next/image";

export default function ServeEsd(props) {
    return(
        <>
          <div className={` ${style[props.extraClass]} ${style.serve_esd}`}>
              <div className="container">
                <div className={style.blockchain_serve}>
                  <div className={`section_title ${style.section_title}`}>
                      <h2>Industries We <span> Serve</span></h2>
                      <p>{props.description}</p>
                  </div>
                  <ul className="list-none flex">
                      {
                          serveEsdList.map(({image, title},index)=>{
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
          </div>
        </>
    )
}