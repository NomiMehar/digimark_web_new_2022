import style from "./enterpriseServices.module.scss"
import enterpriseServicesList from "./enterpriseServicesList.json"

export default function EnterpriseServices(props) {
    return(
        <div className={` ${style[props.extraClass]} ${style.enterprise_services_wrap}`}>
            <div className="container">
                <div className={`flex ${style.section_title_wrap}`}  data-aos="fade-up" data-aos-duration="1000">
                    <h2>What we do in <br/>
                        <span>Enterprise Application Development</span></h2>
                    <p>Tap into cutting edge enterprise software development to increase operational efficiency</p>
                </div>
                <div className={style.enterprise_services}>
                    <ul className="list-none flex flex-wrap">
                        {
                            enterpriseServicesList.map(({title,description},index)=>{
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
            </div>
        </div>
    )
}