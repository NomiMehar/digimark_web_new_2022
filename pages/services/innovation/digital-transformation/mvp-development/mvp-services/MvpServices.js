import style from "./mvpServices.module.scss"
import mvpServices from "./mvpServices.json"
import letSolveImage from "../../../../../../public/assets/images/services/let-solve.webp"
import Image from "next/image";

export default function MvpServices() {
    return(
        <div className={style.mvp_services_wrap}>
            <div className="container">
                <div className={`section_title`}>
                    <h2><span>MVP services</span></h2>
                </div>
                <div className={style.mvp_services}>
                    <ul className="list-none flex flex-wrap">
                        {
                            mvpServices.map(({title,description},index)=>{
                                return(
                                    <li key={`serv-${index}`}>
                                        <section>
                                            <span></span>
                                            <h3>{title}</h3>
                                            <p>{description}</p>
                                        </section>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={style.get_action}>
                    <h2>let’s solve it <span>Together!</span></h2>
                    <Image src={letSolveImage} alt="letSolveImage"/>
                </div>
            </div>
        </div>
    )
}