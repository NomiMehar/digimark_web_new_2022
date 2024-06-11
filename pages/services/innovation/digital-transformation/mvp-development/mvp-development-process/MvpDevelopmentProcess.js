import style from "./mvpDevelopmentProcess.module.scss"
import mvpDevelopmentProcessList from "./mvpDevelopmentProcessList.json"

export default function MvpDevelopmentProcess() {
    return(
        <div className={style.mvp_process_wrap}>
            <div className="container">
                <div className="section_title">
                    <h2>Our <span>MVP Development Process</span></h2>
                </div>
                <div className={style.mvp_dev_process}>
                    <ul className="list-none flex flex-wrap">
                        {
                            mvpDevelopmentProcessList.map(({counting,title,detail},index)=>{
                                return(
                                    <li key={`process-${index}`}>
                                        <div className={`flex ${style.mvp_dev_content}`}>
                                            <span>{counting}</span>
                                            <section>
                                                <h3>{title}</h3>
                                                <p>{detail}</p>
                                            </section>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}