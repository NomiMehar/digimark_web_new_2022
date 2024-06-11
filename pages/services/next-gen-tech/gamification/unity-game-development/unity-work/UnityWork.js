import style from "./unityWork.module.scss"
import Image from "next/image";

export default function UnityWork() {
    return(
        <>
            <div className={style.unity_work}>
                <div className="container">
                    <div className={style.unity_work_text}>
                        <h2>How Our <span>Unity Developers Work</span></h2>
                        <p>DigiMark Developers is known for its outstanding results and approach when it comes to leading Unity game development services. We offer complete strategies for gamification so that you can turn your dreams into reality. We are dedicated to driving results in the best way.</p>
                        <ul className="list-none flex flex-wrap">
                            <li>
                                <section>
                                    <span>1.</span>
                                    <p>Enjoy smart and perfect <span>gaming solutions</span> at DigiMark Developers by using the Unity 3D game development services</p>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <span>2.</span>
                                    <p>Get a complete effective project plan, execution plan, and achieving <span>millstones plan</span> for your gaming app according to the requirements of your business.</p>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <span>3.</span>
                                    <p>Experience the <span>best system design,</span> wireframing prototyping, UI/UX design, and architecture for your gaming solution.</p>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <span>4.</span>
                                    <p>We ensure that we cover every <span>aspect like</span> coding, executing APIs, testing, and debugging for great results.</p>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <span>5.</span>
                                    <p>We also ensure that the <span>result does not</span> have any issues and it works effectively on all the different platforms. However, we can modify the things for you if you wish to make any changes. We provide complete cooperation and support.</p>
                                </section>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}