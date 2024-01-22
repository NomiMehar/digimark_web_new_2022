import style from "./subBanner.module.scss"
import keyFactList from "./keyFactList.json"

export default function SubBanner() {
    return(
        <>
            <div className={style.subanner_wrap}>
                <div className="container">
                    <span>QUALITY AT UNRIVALED SPEED & SCALE</span>
                    <h2>Test IO delivers a full range of <span>web, mobile</span> and <span>IoT testing</span> through a flexible service model. With services available on-demand, we partner with you to navigate tight delivery constraints and complex requirements to drive sustained business value
                        <br/><span>—at speed and scale.</span></h2>
                    <h2>Our <span>Testing-as-a-Service (TaaS)</span> model gives you capacity and capability when you need it, to ship high-quality products faster.</h2>
                </div>
            </div>
            <div className={style.key_facts}>
                <div className="container">
                    <h2>Key Facts</h2>
                    <ul className="list-none flex">
                        {
                            keyFactList.map(({description,title,image},index)=>{
                                return(
                                    <li key={`list-${index}`}>
                                        <div className={style.key_list}>
                                            <figure><img src={image} alt="image"/></figure>
                                            <section>
                                                <h3>{title}</h3>
                                                <p>{description}</p>
                                            </section>
                                        </div>
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