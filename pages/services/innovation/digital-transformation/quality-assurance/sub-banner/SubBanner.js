import style from "./subBanner.module.scss"
import keyFactList from "./keyFactList.json"
import Image from "next/image";

export default function SubBanner() {
    return(
        <>
            <div className={style.subanner_wrap}>
                <div className="container">
                    <span>QUALITY AT UNRIVALED SPEED & SCALE</span>
                    <h2>Get the best testing solutions for <span>web, mobile, & IoT applications</span> using a <span>flexible and adaptable service</span> approach.</h2>
                    <h2>Experience our unique <span>Testing-as-a-Service (TaaS) model,</span> designed to enhance product <span>delivery capabilities</span> & ensure the accelerated release of <span> high-quality software solutions.</span> We help you in delivering sustainable business value along with the best <span>speed and scalability.</span></h2>
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