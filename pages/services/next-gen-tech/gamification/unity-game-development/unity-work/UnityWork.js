import style from "./unityWork.module.scss"
import Image from "next/image";

export default function UnityWork() {
    return(
        <>
            <div className={style.unity_work}>
                <div className="container">
                    <div className={style.unity_work_text}>
                        <h2>How Our <span>Unity Developers Work</span></h2>
                        <p>Being a leading Unity Game Development Company, we are known for our out-of-the-box approach. We provide exceptional gamification strategies to turn your idea into reality. Every aspect of our work process is focused on results-driven performance.</p>
                        <ul className="list-none flex flex-wrap">
                            <li>
                                <section>
                                    <span>1.</span>
                                    <p>We <span>brainstorm, hypothesize, conceptualize,</span> suggest, and strategize the perfect gaming solution using Unity 3D game development.</p>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <span>2.</span>
                                    <p>We <span>define</span> the SRS document, efficiently plan a project, develop planning, and milestones for your gaming app as per the unique needs of your business.</p>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <span>3.</span>
                                    <p>We <span>create</span> a system design, Wireframing, prototyping, UX/UI design, and architecture for your gaming solution.</p>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <span>4.</span>
                                    <p>From <span>coding</span> to <span>executing</span> APIs, testing, and debugging, we consider all the aspects of delivering the best results.</p>
                                </section>
                            </li>
                            <li>
                                <section>
                                    <span>5.</span>
                                    <p>We make sure that the <span>outcome</span> is debugged and Bug-free. It works efficiently on all platforms, and if you want changes, then we can make it for you based on your requirements.</p>
                                </section>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}